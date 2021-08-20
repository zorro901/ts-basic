// import World from './world'
// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello 俺!!!')
// world.sayHello(root)

// 03.基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

// 04.関数の型定義
// import { logMessage, logMessage2, logMessage3, logMessage4, alwaysThrowError } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'
// // logMessage("Hello TypeScript!")
// // logMessage2("Hello TypeScript!")
// // logMessage3("Hello TypeScript!")
// // logMessage4("Hello TypeScript!")
// // alwaysThrowError("a")
// isUserSignedIn('ABC', 'Tora')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(10000000, 1)
// console.log('Function parameters sample 5: ', sum)

// 05.オブジェクトの型定義
// import objectSample from "./object/object";
// import typeAliasSample from "./object/alias"
// objectSample()
// typeAliasSample()

// 06.配列とタプルの型定義
import arraySample from "./array/array";
import tupleSample from "./array/taple";

arraySample();
tupleSample()