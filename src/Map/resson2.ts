type dataType = {
    id: string
    name: string
    age: number
}

const data: dataType[] = [
    {
        id: "ghuraghaui",
        name: "Sato",
        age: 10
    },
    {
        id: "harjiohajoirhjao",
        name: "Suzuki",
        age: 8
    },
    {
        id: "gjarogjaigjaoibamoia",
        name: "Yamada",
        age: 30
    }
]

const map2 = new Map<string, dataType>()

data.forEach((item) => {
    map2.set(item.id, item)
})

console.log(map2)

const getValue = map2.get("ghuraghaui")

console.log(getValue)

const newValue: dataType = {
    id: getValue?.id as string,
    name: getValue?.name as string,
    age: 25
}

map2.set("ghuraghaui", newValue)

console.log("修正後")
console.log(map2)

map2.delete("gjarogjaigjaoibamoia")

console.log("修正後")
console.log(map2)
