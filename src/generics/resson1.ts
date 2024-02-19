/**
 * Genericsで型を定義することで使用するまで型が確定されず、動的に型を決めることができる
 */
type valueObj<T> = {
    value: T
}

const stringObj: valueObj<string> = {
    value: "ahoooooo"
}

console.log(stringObj)
