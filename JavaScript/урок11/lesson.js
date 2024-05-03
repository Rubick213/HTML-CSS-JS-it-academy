// let link = 'url("https://www.example.com/path?query=123#hash")'
let link = 'url("ftp://yandex.ru")'
console.log(link.indexOf('.com'));


let a = link => link.slice(link.indexOf('"')+1,link.indexOf('")'))
console.log(a(link));

let b = link => link.substr(link.indexOf('"')+1,link.indexOf('//')-3)
console.log(b(link));
/////домен и якорь доделать
// let c = link => {
//    if () {
    
//    }
// }
// console.log(c(link))

// let d = link => {

// } 
// console.log(d(link));


// let str = 'Янв,Февр,Мар,Апр,Май,Июн,Июл,Авг,Сент,Ноябр,Дек'
// let strSlic = str.slice(0,str.indexOf(',Дек'))

// let subDec = str.slice(str.indexOf('Дек'))

// let result = subDec + ',' + strSlic


// console.log(result);
// function comelize(str) {
//     let x = str.split('')
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == '-') {
//              x[i+1] = x[i+1].toUpperCase()
//         }
//     }
//     return x.join('').replaceAll('-','')
// }
// console.log(comelize('-backgound-color-war'))

// let arr = [1,2,3]
// arr.push(3,4,5)
// arr.unshift(-2,-1,0)
// let arr = ['что то', 'еще']
// let el = arr.pop()
// arr.unshift(el)
// console.log(arr);

let str = 'Янв,Февр,Мар,Апр,Май,Июн,Июл,Авг,Сент,Ноябр,Дек'
// let arr2 = str.split(',')
// let el2 = arr2.pop()
// arr2.unshift(el2)
// let result = arr2.join(',')
// console.log(result); 

let arr2 = str.split(',')
let arr3 = []
for (const stroke of arr2) {    
    arr3.unshift(stroke)
}
console.log(arr3);
