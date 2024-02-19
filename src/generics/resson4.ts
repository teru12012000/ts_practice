;(() => {
    type profile = {
        name: string
        age: number
        hobby: string
        food: string
    }

    const getValue = <T extends keyof profile>(
        obj: profile,
        key: T
    ): profile[T] => {
        return obj[key]
    }

    type keyType<T> = keyof T

    const keys: keyType<profile>[] = ["food", "name"]
    let info = []

    keys.forEach((item) => {
        const value = getValue(
            { name: "hogehoge", age: 10, hobby: "soccer", food: "meat" },
            item
        )

        console.log(value)
    })
})()
