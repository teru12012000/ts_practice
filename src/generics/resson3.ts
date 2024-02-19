/**
 * `extend`をつけることで指定した型を満たさなければならない
 */

;(() => {
    const getUserInfo = <T extends object, U extends object>(
        obj1: T,
        obj2: U
    ): T & U => {
        return { ...obj1, ...obj2 }
    }

    //objectじゃないとerrorになる
    //const userDummy=getUserInfo({name:"hogehoge"},1)

    const userInfo = getUserInfo({ name: "aaaaaaa" }, { food: "meat" })

    console.log(userInfo)

    console.log(userInfo.food)
})()
