// function getNumber(num1, num2, num3) {
//     console.log((num1 + num2 + num3) / 4);
// }
// getNumber(1,2,5)

// function test(x, y) {
//     return (x > 0 && y > 0) ? x * y : x - y
// }
// console.log(test(3,4));

////5
// function getNumber1  (num) {
    // return !+num ? 0 : parseInt(num)
// }
// console.log(getNumber1(prompt('введите число'))); 

////6
// function getNumber2 (num1, num2) {
    // let test
    // return isNaN(num1) || isNaN(num2) || isNaN(num1) && isNaN(num2) ? 'error' : test = num1 ** 2 + num2 ** 2
// }
// console.log(getNumber2(parseInt(prompt('число 1')), parseInt(prompt('число 2')))); 


////7
// function getNumber3(num1, num2) {
//     return num1 + num2 > 10
// }
// console.log(getNumber3(parseInt(prompt('число 1')), parseInt(prompt('число 2'))));

//8
// function resultat (res1, res2) {
    // return getNumber2(res1, res2)
// }
// let x = resultat(getNumber1(prompt('введите число')), getNumber1(prompt('введите число')))
// console.log(x);
// document.write(x)


// let arr = ['one' , false, [1,2,3], 'two', 'three']
// document.write(arr[0], arr[2], arr[4])

// function arr(el) {
//     el[3] = 4
//     // el[2] = 99
//     el[el.length - 2] = 99
//     return el
// }
// console.log(arr([1,2,3]))
//  function frut (f) {
//     f[f.length - 2] = 'грейфрут'
//     return f
//  }
//  console.log(frut(['яюлоко', 'апельсин', 'банан', 'ананас', 'манго']));

// function num (n) {
//     let res = 0
//     for(let i = 0; i < n.length; i++){
//         res += n[i]
//     }
//     return res
// }
// console.log(num([1, 2, 3, 4, 5]));

function num (n) {
    for(let i = 0; i < n.length; i++) {
        n[i] < 0 ? n[i] = n[i] - (n[i] * 2) : n[i] = -n[i]
        // n[i] = -n[i]
    }
    return n
}
console.log(num([1, 2, -3, 4, -5, -6, -99, 0]));