"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Dave' }));
console.log(isObj(null));
const isTrue = (arg) => {
    return { arg, is: !!arg };
};