// let arrFruit = ['груши','яблоки', 'сливы','абрикосы','апельсины','бананы']
// let fixArr = []
// for (const el of arrFruit) {
    // if (el.includes('а')) {
        // fixArr.push(el)
    // }
//     if (el.length == 5) {
//         fixArr.push(el)
//     }
// }
// console.log(fixArr);

// let num = [-3,-2,-1,2,3,4,5]
// let resultNum = []
// for (const el of num) {
//     if (el > 0) {
//         resultNum.push(el)
//     }
    // отрицательные числа
    // if (el < 0) {
    //     resultNum.push(el)
    // }
// }
// console.log(resultNum);

// let arr = [2,5,9]
// arr.splice(1,1)

// let arrNum = [1,2,3,4,5]
// arrNum.splice(3)

// console.log(arrNum);

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']

// let result = []
// result.push(fruits.slice(3))
// console.log(result);

// let num = [1,2,3,4,5]
// num.splice(1,0, 'a','b'),
// num.splice(1+5,0,'c')
// num.splice(7+1,0,'e')


// console.log(num);
// const friends = [
//     {name:'alex',pizzas:['cheese','pepperoni']},
//     {name: 'mike', pizzas:['salami', 'margarita']},
//     {name:'stas',pizzas:['meat']},
//     {name:'anna',pizzas:['fish']}
// ]
// let arrPizza = []

// for (const el of friends) {
//     arrPizza = arrPizza.concat(el.pizzas)
// }

// let arr = [-3,-2,-1,1,2,3,4,5]
// let resArr = []
// let resArr2 = []
// arr.forEach(el => {
//     resArr2.push(el + 5)
//     resArr.push(el ** 2)
// })
// console.log(resArr2);
// console.log(resArr);

// const friends = [
//         {name:'alex',pizzas:['cheese','pepperoni']},
//         {name: 'mike', pizzas:['salami', 'margarita']},
//         {name:'stas',pizzas:['meat']},
//         {name:'anna',pizzas:['fish']}
//     ]
//     let arrPizza = []
//     friends.forEach(el => {
//         arrPizza.push(`${el.name} likes ${el.pizzas.join(' and ')}`)
//     })
//     console.log(arrPizza);

// дз
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']
let newF = fruits.sort()
console.log(newF);

function test () {
    let result = {}
    let arr = []
    newF.forEach((el) => {
        if (!arr.includes(el)) {
            arr.push(el)
        }
    })
    console.log(arr);

    return result
}
console.log(test());
// console.log(result);

// console.log(fruits.includes('kiwi'));
// console.log(fruits.indexOf('orange'));
// let test = []
// fruits.forEach(el => {
//     if (!test.includes(el)) {
//         test.push(el)
//     }
// })
// console.log(test);