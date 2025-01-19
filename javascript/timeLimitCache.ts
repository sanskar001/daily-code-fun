/*
 Cache With Time Limit

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

interface Value {
    value: any;
    expireTime: number; // In millisecond
    timerId: number;
}

class TimeLimitCache {
    private memory: Record<string,Value>;
    private length: number;

    constructor() {
        this.memory = {};
        this.length = 0;
    }

    setValue(key: string, value: any, expireTime: number) {
        
        const existingValue = this.getValue(key);
        const alreadyExists = existingValue !== -1;

        if(alreadyExists) {   
            clearTimeout((existingValue as Value).timerId);
        }else {
            this.length++;
        }

        const timerId = setTimeout(() => {
            delete this.memory[key];
            this.length--;
        }, expireTime);

        this.memory[key] = {value, expireTime, timerId};

        return alreadyExists;
    }

    getValue(key: string): any {
        return this.memory[key]?.value || -1;
    }

    get size() {
        return this.length;
    }
}

const cache = new TimeLimitCache();

cache.setValue("theme", "dark", 3000);
console.log(cache.getValue("theme"));
console.log(cache.size);

setTimeout(() => {
    console.log("After 1900 ms")
    console.log(cache.getValue("theme"));
    console.log(cache.size);
    cache.setValue("color", "green", 2000);
}, 1900);

setTimeout(() => {
    console.log("After 2100 ms")
    console.log(cache.getValue("theme"));
    console.log(cache.getValue("color"));
    console.log(cache.size);
}, 2100);

setTimeout(() => {
    console.log("After 4100 ms")
    console.log(cache.getValue("theme"));
    console.log(cache.getValue("color"));
    console.log(cache.size);
}, 4100);
