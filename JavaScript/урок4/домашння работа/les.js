// 1. Десять раз попросите пользователя ввести данные массива (любые типы могут
//     быть). Найдите сумму всех элементов-чисел.
    
//     (Можно сделать несколько вариантов)

// N1
// function sumNum() {
//     let resSum = 0
//     let i = 1
//     let use

//    while (true) {
//     use = prompt(`Введите число ${i}`)
//     if (isNaN(parseInt(use)) || isNaN(Number(use)) || use === '' || use == null) {
//         console.log(('Вы ввели не допустимое значение'))
//         continue
//     } else {
//         i++
//         resSum += Number(use)
//     }

//     if (i === 11) break
//     }
    
//     return resSum
// }
// console.log(sumNum())

// N2
// function sumNum() {
//     const sumArr = []
//     let use
//     let i = 1

//     while (sumArr.length < 10) {
//         use = prompt(`Введите число ${i}`)
//         sumArr.push(use)
//         i++
//     }
    // 1 вариант
    // let sum = 0
    // for (let i = 0; i < sumArr.length; i++) {
    //     if (isNaN(parseInt(sumArr[i]))) {
    //         continue
    //     } else {
    //     sum += parseInt(sumArr[i])
    //     }
    // }
    // return sum

    // 2 вариант 
    // let nun = sumArr.reduce((a,b) => {
    //     return !isNaN(b) ? a + Number(b) : a
    // },0)
    // console.log(nun);

    // 3вариант
    // let res = 0
    // for (const sum of sumArr) {
    //     if(!isNaN(sum)) res += Number(sum)
    // }
    // console.log(res);
// }

// console.log(sumNum())




// 2. Написать функцию со вспомогательными функциями, которая просит ввести
// пользователя размеры массива (пример 2x2, 2x3, 3x4, 5x5). И затем также в
// зависимости от выбора пользователя.
let user = () => {
    do {
        let x = prompt('Введите размер X')
        let y = prompt('Ведите размер Y')
        if ((x == null || y == null) || (!x.trim() || !y.trim())) {
            alert('Вы ничего не ввели в один из запросов!')
        } else if (isNaN(x) || isNaN(y)) {
            alert('в один из запросов вы ввели не правильное значение!\nповторите попытку')
        } else if (Number(x) <= 0 || Number(y) <= 0){
            alert('в один из запросов вы ввели значение меньше нуля!\nПовторите попытку')
        } else {
            return {x,y}
        }
    } while (true);
}
// console.log(user());





// функция заполнения 1,2,3,4,5

let createArr = (usObj) => {
    let arr = []
    let count = 1
    let out = 'Вы выбрали 1:\n'
    for (let i = 0; i < parseInt(usObj.x); i++) {
        arr.push([])
        for (let k = 0; k < parseInt(usObj.y); k++) {
            arr[i].push(count)
            count++
        }
        out += `                      ${arr[i]}\n`
        
    }
    alert(out)
    return
}
// createArr(user())





// 2.2 сама заполняет его отрицательными числами по порядку, пока не заполнится
// массив. (-1, -2, -3, ...)
let minusCreateArr = (minus) => {
    let arr = []
    let count = 0
    let out = 'Вы выбрали 2:\n'
    for (let i = 0; i < parseInt(minus.x); i++) {
        arr.push([])
        for (let k = 0; k < parseInt(minus.y); k++) {
            count--
            arr[i].push(count)
        }
        out += `                      ${arr[i]}\n`
        
    }
    alert(out)
}
// minusCreateArr(user())

//2variant func 





//2.3 сама заполняет его только четными числами (2, 4, 6, 8...)
let numChet = (num) => {
    let arr = []
    let count = 0
    let out = 'Вы выбрали 3:\n'

    for (let i = 0; i < parseInt(num.x); i++) {
        arr.push([])
        for (let k = 0; k < parseInt(num.y); k++) {
            count += 2
            arr[i].push(count)  
        }
        out += `                      ${arr[i]}\n`
    }
    alert(out)
    
}







let res = () => {
    let us
    do {
        us = prompt('Введите способ вывода:\n1,\n2,\n3.')
        if (us == null || !us.trim()) {
            alert('Неправильный ввод')
        } else if (isNaN(us)) {
            alert('Вы ввели не число')
        } else if (Number(us) > 3 || Number(us) <= 0) {
            alert('Неправильный ввод Введите способ вывода от 1 до 3')
        } else {
            us = parseInt(us)
            break
        }
    } while (true);

    let userProm = user()
   
    switch (us) {
        case 1:
            createArr(userProm)
            break;
        case 2: 
            minusCreateArr(userProm)
        break;
        case 3:
            numChet(userProm)
        default:
            break;
    }
}





///////////////////////////////////////////       V A R     2      ///////////////////////////////////

let koren = () => {
    let us
    let funcCreatObj
    let create_arr
    do {
        us = prompt('Введите способ вывода:\n1,\n2,\n3.')
        if (us == null || !us.trim()) {
            alert('Неправильный ввод')
        } else if (isNaN(us)) {
            alert('Вы ввели не число')
        } else if (Number(us) > 3 || Number(us) <= 0) {
            alert('Неправильный ввод Введите способ вывода от 1 до 3')
        } else {
            us = parseInt(us)
            funcCreatObj = ObjUser()
            create_arr = arrData(funcCreatObj)
            break
        }
    } while (true);

    switch (us) {
        case 1:
            outArrData(create_arr)
            break;
        case 2: 
            minusArr(create_arr)
        break;
        case 3:
            venNumbers(create_arr)
        default:
            break;
    }
}

//funcCreatObj
let ObjUser = () => {
    do {
        let x = prompt('Введите размер X')
        let y = prompt('Ведите размер Y')
        if ((x == null || y == null) || (!x.trim() || !y.trim())) {
            alert('Вы ничего не ввели в один из запросов!')
        } else if (isNaN(x) || isNaN(y)) {
            alert('в один из запросов вы ввели не правильное значение!\nповторите попытку')
        } else if (Number(x) <= 0 || Number(y) <= 0){
            alert('в один из запросов вы ввели значение меньше нуля!\nПовторите попытку')
        } else {
            return {x,y}
        }
    } while (true);
}

//create_arr
let arrData = (usObj) => {
    let arr = []
    let count = 1
    for (let i = 0; i < parseInt(usObj.x); i++) {
        arr.push([])
        for (let k = 0; k < parseInt(usObj.y); k++) {
            arr[i].push(count)
            count++
        }   
    }
    return arr
}
//out1
let outArrData = (arr) => {
    let out = 'Вы выбрали 1:\n'
    for (const el of arr) {
        out += `                      ${el}\n`
    }
    alert(out)
}


// minusArr out2
let minusArr = (minus) => {
    let out = 'Вы выбрали 2:\n'
    for (let i = 0; i < minus.length; i++) {
        for (let k = 0; k < minus[i].length; k++) {
            minus[i][k] = -minus[i][k]
        }
        out += `                      ${minus[i]}\n`
    }
    alert(out)
}
 

// venNumbers out3
let venNumbers = (num) => {
        let arr = []
        let count = 2
        let out = 'Вы выбрали 3:\n'
        for (let i = 0; i < num.length; i++) {
            arr.push([])
            for (let k = 0; k < num[i].length; k++) {
                 arr[i].push(count)
                 count += 2
            }
            out += `                      ${arr[i]}\n`
        }
        alert(out) 
    }

// кароче все равно код повторяетья 
   