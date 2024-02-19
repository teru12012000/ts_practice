//関数で引数の型を動的にしたい場合
const getUserInfo = <T, U>(obj1: T, obj2: U): T & U => {
    return { ...obj1, ...obj2 }
}

const user1Info = getUserInfo({ name: "hogeho" }, { age: 10 })

console.log(user1Info)

console.log(user1Info.age)

const user2Info = getUserInfo({ name: "ahoge" }, { hobby: "soccer" })

console.log(user2Info)

console.log(user2Info.hobby)
