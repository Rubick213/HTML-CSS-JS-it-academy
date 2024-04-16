// let user = {
//     personAlinformation : {
//         name: 'sasha',
//         LastName: 'sukach',
//         age: 27,
//         address: {
//             country: 'belarus',
//             city: 'gomel'
//         },
//     },
//     family: {
//         partner: 'masha',
//         children: ['sasha', 'dima'],
//     }
// }
// function showPersonalInfo (info) {  
//     return info.personAlinformation.name + ' ' + info.personAlinformation.LastName + ',' + ' ' + info.personAlinformation.address.country + ',' + ' ' + info.personAlinformation.address.city   
// }
// console.log(showPersonalInfo(user));

// function showFamily (info,res) {
//     if (info.family.children.length !== 0) {
//         res = info.family.partner + ' ' + '=>' + ' '
//         for (let i = 0; i < info.family.children.length; i++) {
//             res += info.family.children[i] + ','
//         }  
//     } else {
//         return info.family.partner + ' ' + '=>' + ' ' + 'нет детей'
//     }
//     return res
    
// }
// console.log(showFamily(user));
// 1f vod imeni 


// 2

// function getName() {
//     let name
//     do {
//         name = prompt('vedite imya polsovatekya')
//         if (name == '' || name == null) {
//             alert('nepraw_znach')
//         }
//     } while (name == '' || name == null);
//     return name 
// }

// /////////////////////////////////
// function getMark(numLesson) {
//     return prompt(numLesson)
// }

// function getNles () {
//     return prompt('vedite col zan')
// }
// /////////////////////////////
// function getData (n) {
//     let lesson
//     do {
//         lesson = n ? getMark(`vedite ocenku za znyatiya ${n}`) : getNles();
//         if (lesson == '' || lesson == null) {
//             alert('wi nicto ne wweli')
//         } else if(isNaN(lesson)){
//             alert('wi ne cheslo')
//         } else if (parseInt(lesson) < 1) {
//             alert('wi otr cheslo')
//         } else if (parseInt(lesson) !== parseFloat(lesson)) {
//             alert('wi wweli ne celor chislo')
//         } else {
//             lesson == parseInt(lesson)
//         }
//     } while (lesson != parseInt(lesson));
//     return lesson 
// }

// function creatUderObject(name, lesson) {
//     let lessonsObject = {}
//     for (let i = 1; i <= lesson; i++) {
//         lessonsObject[i] = getData(i)
//     }
//     let user = {
//         name: name,
//         lesson: lessonsObject,
//     }
//     // console.log(user);
//     return user
// }

// function calc (key, a) {
//     let result = 0
//     for (const res in key) {
//         result += parseInt(key[res])
        
//     }
//     return result / a
// }

// // - говорит, сколько ему не хватает до 7.5 либо пишет что баллов достаточно для прохождения 
// // на следующий курс


// function ball(a, b) {
//     return a < b ? `вам не хвататет ${a - b}` : 'баллов достаточно для прохождения на следующий курс'
// }
// function result () {
//     let name = getName()
//     let lessons = getData()
//     let user = creatUderObject(name, lessons)
//     let res = calc(user.lesson, lessons)
//     let bal = ball(res, 7.5)
//     return bal
// }
// console.log(result())



let objectMarket = () => {
    let fruits = {
        apple : {
            name: 'Яблоко',
            price: '3.5 RUB',
            count: '10Kg',
        },
        orange: {
            name: 'Апельсин',
            price: '6 RUB',
            count: '14Kg',
        },
        banana: {
            name: 'Банан',
            price: '5.1 RUB',
            count: '2Kg',
        },
        tangerine: {
            name: 'Мандарин',
            price: '5.9 RUB',
            count: '9Kg',
        },
        pear: {
            name: 'Груша',
            price: '1.3 RUB',
            count: '5Kg',
        },
    }
    return [fruits.apple, fruits.orange, fruits.banana, fruits.tangerine, fruits.pear]  
}
// console.log(objectMarket());


//функция которая показывает все названия таваров с ценой
let showProduct = (product) => {
    let str = 'НАШ ПРАЙС:\n'
    for (let i = 0; i < product.length; i++) {
        str += product[i].name + ': ' + parseInt(product[i].price) + ' за kg\n'     
    }
    return alert(str)
    
}
// console.log(showProduct(objectMarket()));



let createProduct = () => {
    return prompt('Введите название товара')
}

// проверяет что полз вводит
let checkProduct = info => {
    do {
        info = prompt('Введите название товара')
        if (info == '' || info == null) {
            alert('Вы ничего не ввели!')

        } else if (parseInt(info) || parseInt(info) == 0){
            alert('Вы ввели неверное значение') 

        } else {
            return info 
            
        }
    } while (true);
}
// checkProduct()


// функция которая выводит результат после проверки
// Пользователь передает название товара, а в ответ получает его 	цену в виде сообщения «Стоимость товара ‘апельсин’ - 6
let getProduct = (product, arrObj) => {
        for (let i = 0; i < arrObj.length; i++) {
            if(arrObj[i].name == product) {
            alert(`Стоимость товара ${arrObj[i].name} - ${parseFloat(arrObj[i].price)}`)
            return  arrObj[i].name
            } 
        }
    
    return false
}   
// getProduct(checkProduct(),objectMarket())


let checkData = (data) => {
    return !data ?  alert('у нас такого нет') : checkSum(objectMarket())
}


//3 Спрашивает сколько денег у пользователя и отвечает сколько кг одного товара он может купить за эту сумму. (на 9-10 баллов)
// Пример: Ввод -> 15
// 	      Вывод: -> 4 кг яблоко или 2 кг апельсин или 2 кг банан или 2 кг мандарин или 5 кг груша
let checkSum = arrObj => {
    let sum
    let res = ''
    do {
        sum = prompt('Введите сколько у вас денег')
        if (isNaN(sum)) {;
            alert('Вы ввели неправильное значение,Повторите попытку')
        } else if (parseInt(sum) < 0 ) {
            alert('Вы ввели отрицательно значение')
        } else if (sum == null || sum == '' || isNaN(parseInt(sum))) {
            alert('Вы ничего не ввели')
        } else {
            for (const obj of arrObj) {
                res += `${Math.floor(parseInt(sum) / parseFloat(obj.price))} kg ${obj.name}, или `
            }
            break
        }
    } while (true);
    res = res.slice(0, -6)
    alert(res)
}   
// checkSum(objectMarket())



let result = () => {
    let arr = objectMarket()
    showProduct(arr)
    let check = checkProduct();
    let out = getProduct(check, arr)
    return checkData(out)    
}
result()