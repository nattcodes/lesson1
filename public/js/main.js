"use strict";
// const echo = <T>(arg: T): T => arg
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'dave' }));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
