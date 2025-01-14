const wait = function (delay, success = "SUCCESS", error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error);
      }
      resolve(success);
    }, delay);
  });
};

console.time("promise");

const requests = [
  wait(1000, "SUCCESS 1000", "ERROR 1000"),
  wait(500, undefined, "ERROR 500"),
  wait(3000, "SECOND SUCCESS 3000"),
];

// Promise.any(requests)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.timeEnd("promise");
//   });

// ========================================================

// Polyfill of Promise.all()

const customAll = function (requestArr) {
  const acc = [];
  const n = requestArr.length;

  return new Promise((resolve, reject) => {
    requestArr.forEach((request, index) => {
      request
        .then((res) => {
          acc.push(res);

          if (index === n - 1) {
            resolve(acc);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// customAll(requests)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.timeEnd("promise");
//   });

// ========================================================

// Polyfill of Promise.race()

const customRace = function (requestArr) {
  return new Promise((resolve, reject) => {
    requestArr.forEach((request) => {
      request
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// customRace(requests)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.timeEnd("promise");
//   });

// ========================================================

// Polyfill of Promise.race()

const customAllSettled = function (requestArr) {
  const acc = [];
  const n = requestArr.length;

  return new Promise((resolve, reject) => {
    requestArr.forEach((request, index) => {
      request
        .then((res) => {
          acc.push({ status: "fulfilled", value: res });
        })
        .catch((err) => {
          acc.push({ status: "rejected", reason: err });
        })
        .finally(() => {
          if (index === n - 1) {
            resolve(acc);
          }
        });
    });
  });
};

// customAllSettled(requests)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.timeEnd("promise");
//   });

// ========================================================

// Polyfill of Promise.race()

const customAny = function (requestArr) {
  const errors = [];
  const n = requestArr.length;

  return new Promise((resolve, reject) => {
    requestArr.forEach((request) => {
      request
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errors.push(err);
        })
        .finally(() => {
          if (errors.length === n) {
            reject({ errors, message: "All promises were rejected!" });
          }
        });
    });
  });
};

customAny(requests)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.timeEnd("promise");
  });
