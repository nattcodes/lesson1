const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('john'))
console.log(isObj([1, 2, 3]))
console.log(isObj({name: 'Dave'}))
console.log(isObj(null))

const isTrue = <T>(arg: T): {arg: T, is:boolean} => {
    return {arg, is: !!arg}
}