
let nam = document.querySelectorAll('input')
let div = document.querySelectorAll('div')
let text = document.querySelector('h1')

function test() {
 for (let i = 0; i < nam.length; i++) {
    if (nam[i].value == '' || nam[i].value == null) {
        div[i].classList.add('error')
    } else {
        text.innerHTML = out()
    }  
 }
}

for(let i = 0; i < nam.length; i++) {
    nam[i].addEventListener('focus', () => {
        div[i].classList.remove('error')
    })
}

function out () {
    let test = 'добро пожаловать '
    let check = 0
    for (let i = 0; i < nam.length; i++) {
        if (nam[i].value != '') {
            test += `${nam[i].value} `
        } else {
            check++
        }
    }
    if (check != 0) {
        test = ''
        return test
    } else {
        return test.toUpperCase()
    }
    
}

// math

// let num = Math.sqrt(397)
// let num2 = Math.floor(num)
// let num3 = num2.toFixed(1)
// let num4 = num2.toFixed(2)

// let arr = [num,num2,num3,num4]
// console.log(arr);


// let numMath = {
//     floor: Math.floor(Math.sqrt(587)) ,
//     ceil: Math.ceil(Math.sqrt(587))
// }
// console.log(numMath);

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.ceil(Math.random() * (100 - 9)) + 9)
    
// }
// console.log(arr);


// let arrNum = [Math.min(4,-2, 5, 19, -130, 0, 10), Math.max(4,-2, 5, 19, -130, 0, 10)]
// console.log(arrNum);

let js = 'JS'
console.log(js.toLowerCase());

let str = 'я учу javascript'
console.log(str.includes('javascript'));
console.log(str.indexOf('JavaScript'));

let funStr = string => {
    // return string.toLowerCase().includes('script')
    // return string.toLowerCase().indexOf('script') > -1
}
console.log(funStr(str));