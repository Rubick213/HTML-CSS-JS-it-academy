// const strArr = ['леш','саргей','Миша','ана','лексндр','денис','дддд', 'вася']

// function nameA (x) {
//     for (let i = 0; i < x.length; i++) {
//         // if (x[i][x[i].length-1] === 'а') x[i] = 'sos'   
//         for (let k = 0; k < x[i].length; k++) {
//             if (x[i][k] === 'а') x[i] = 'sos'
//             continue
//         }
//     } 
//     return x
// }
// console.log(nameA(strArr));


//двумерный масивы

// const numArr = [[1,2], [3,4], [5,6]]
// let sumArr = 0
// for (let i = 0; i < numArr.length; i++) {
//     for (let k = 0; k < numArr[i].length; k++) {
//         sumArr += numArr[i][k] 
//     }  
// }
// console.log(sumArr);

// let res = numArr.reduce((one,two) => {
//     let x = two.reduce((a,b) => a + b,0)
//     return one += x
// },0)
// console.log(res);

//object

// let user = {
//     name: 'ivan',
//     LastName: 'ivanow',
//     Age: 35
// }
// console.log(user);


// let test = ''
// for (const z in user) {
//     test += z + ': ' + user[z] + ', '
// }
// console.log(test);

// let info = prompt('что вы хотите узнать о человеке name?\nLastName?\nAge?')
// let use = prompt('Введите новое имя')
// user.name = use
// console.log(user);

// let apple = {
//     color: 'red',
//     weight: 200,
//     origin: 'turkey',
//     price: 3.5,
//     test: {
//         one: 1,
//         tow: 2,
//     }
// }
// let info = prompt('введи название поля')

// info in apple ? console.log(apple[info]) : console.log('такого поля нет');

// console.log(apple.test.one);

let market = {
    apples: 10,
    oranges: 5,
    pears: 15,
    bananas: 26,
    lemon: 7,
}
// for (const x in market) {
//     if (market[x] < 5 || market[x] >= 10) delete market[x] 
// }
// console.log(market);
let x = 0
for(const z in market) {
    
    if (market[z] > x ) {
        x = market[z]
    }
}
console.log(x);