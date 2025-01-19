function flat(array, depth = 1) {
    if (depth < 0) {
        throw new Error("Depth must be a non-negative number.");
    }

    const flatten = (arr, depth) => {
        if (depth === 0) return arr;
        return arr.reduce((acc, item) => {
            if (Array.isArray(item)) {
                acc.push(...flatten(item, depth - 1));
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
    };

    return flatten(array, depth);
}

// Example usage:
const nestedArray = [1, [2, [3, [4, [5]]]]];

console.log(flat(nestedArray)); // Default depth 1: [1, 2, [3, [4, [5]]]]
console.log(flat(nestedArray, 2)); // Depth 2: [1, 2, 3, [4, [5]]]
console.log(flat(nestedArray, Infinity)); // Fully flattened: [1, 2, 3, 4, 5]
