// const echo = <T>(arg: T): T => arg

// const isObj = <T>(arg: T): boolean => {
//     return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }

// console.log(isObj(true))
// console.log(isObj('john'))
// console.log(isObj([1, 2, 3]))
// console.log(isObj({name: 'Dave'}))
// console.log(isObj(null))

// const isTrue = <T>(arg: T): {arg: T, is:boolean} => {
//     if (Array.isArray(arg) && !arg.le)
//     return {arg, is: !!arg}
// }

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}
console.log(processUser({id: 1, name: 'dave'}))

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] =>{
    return users.map(user => user[key])
}