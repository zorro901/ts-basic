export default function objectSample(){
    // const a: object = {
    //     name: "Tora",
    //     age : 33
    // }
    // // a.name

    // オブジェクトリテラル記法で型定義
    let country: {
        language: string
        name: string
    }={
        language: "Japanese",
        name: "Japan"
    }
    console.log("Object object sample 1:",country)

    country = {
        language: "English",
        name: "United States of America"
    }

    console.log("Object object sample 2:",country)

}

// オプショナルとreadonly
const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
} = {
    age:33,
    lastName: "Yamada",
    firstName: "Taro"
}

torahack.gender="male"
torahack.lastName="kamado"
// torahack.firstName="a"

console.log("Object object sample 3:",torahack)


// インデックスシグネチャ
const capitals: {
    [conntryName: string]:string
} = {
    Japan: "Tokyo",
    Korea: "Seoul"
}
capitals.China = "Beijing"
capitals.Canada = "Ottawa"

console.log("Object object sample 4:",capitals)
