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

// - сама заполняет его числами по порядку, пока не заполнится массив. (1, 2, 3, ...)

// - сама заполняет его отрицательными числами по порядку, пока не заполнится
// массив. (-1, -2, -3, ...)

// - сама заполняет его только четными числами (2, 4, 6, 8...)

//функция пушит пустые массивы в массив
let MatrixX
let MatrixY
let arr1
function matrixArr() {
    arr1 = []
    MatrixX = prompt('Введите размеры массива по X')
    MatrixY = prompt('Введите размеры массива по Y')
    let num = 1 //счетчик для заполнения элемента массива(пустых массивов)

    if(isNaN(parseInt(MatrixX)) || isNaN(parseInt(MatrixY)) || isNaN(Number(MatrixX)) || isNaN(Number(MatrixY))) {
        return 'Вы ввели неверное значение, введите число'
    } else if(Number(MatrixX) == 0 || Number(MatrixY) == 0 || Number(MatrixX) < 0 || Number(MatrixY) < 0) {
        return 'Вы ввели 0 либо меньше 0, введите число больше нуля'
    } else {
        for (let i = 0; i < MatrixX; i++) {
            arr1.push([]) 
            let strD = ''
            for (let k = 0; k < MatrixY; k++) {
                arr1[i].push(num)
                strD += ' ' + num
                num++
            }
            // console.log(strD);
        }
    }
    
    return arr1
}
// matrixArr()

// функция которая меняет на отрицательные значения 
function negativeNumber() {
    let negNumArr = matrixArr()
    for (let i = 0; i < negNumArr.length; i++) {
        let strD = ''
        for(let k = 0; k < negNumArr[i].length; k++) {
            negNumArr[i][k] = -negNumArr[i][k]
            strD += ' ' + negNumArr[i][k]
        }
        // console.log(strD);
    }
    // console.log(negNumArr);
    return negNumArr
}


// функция которая выводит четные числа
let numArr
function even() {
    numArr = []
    matrixArr()
    
        if (isNaN(parseInt(MatrixX)) || isNaN(parseInt(MatrixY)) || isNaN(Number(MatrixX)) || isNaN(Number(MatrixY))) {
            return 'Вы ввели неверное значение, введите число'
        } else if (Number(MatrixX) == 0 || Number(MatrixY) == 0 || Number(MatrixX) < 0 || Number(MatrixY) < 0) {
            return 'Вы ввели 0 либо меньше 0, введите число больше нуля'
        } else {
            let num = 2
            for (let i = 0; i < MatrixX; i++) {
                let strD = ''
                numArr.push([])
                for (let k = 0; k < MatrixY; k++) {
                    if (num % 2 === 0) {
                        strD += ' ' + num
                        numArr[i].push(num)
                       
                        num += 2
                    } else {
                        num += 2
                    }
                    
                }
                // console.log(strD);    
            }
        }
    // console.log(numArr);
    return numArr
}


//функия которая выводит на экран результат в зависимости от выбора 
let userSelection
function resultNum () {
    userSelection = +prompt(`какие числа хотите получить:\n1: по порядку\n2:отрицательные\n3:четные`)
    switch (userSelection) {
        case 1:
            // document.write(`вы выбрали 1(чилса по порядку): ${matrixArr()}`)
            matrixArr()
            z() 
            break;
        case 2:
            // document.write(`вы выбрали 2(отрицательные числа): ${negativeNumber()}`)
            negativeNumber()
            z()
            break;
        case 3: 
            // document.write(`вы выбрали 3(четные): ${even()}`)
            even()
            z()
            break;
        default:
            document.write('такого пункта у нас нет')
            break;
    }
}

function z () {
    switch (userSelection) {
        case 1:
        case 2:
            if (isNaN(parseInt(MatrixX)) || isNaN(parseInt(MatrixY)) || isNaN(Number(MatrixX)) || isNaN(Number(MatrixY))) {
                document.write('Вы ввели неверное значение, введите число')
            } else if (Number(MatrixX) == 0 || Number(MatrixY) == 0 || Number(MatrixX) < 0 || Number(MatrixY) < 0){
                document.write('Вы ввели 0 либо меньше 0, введите число больше нуля')
            } else {
                for (let i = 0; i < arr1.length; i++) {
                    document.write(arr1[i] + '<br>')
                }
            }
            break;
        case 3 :
            if (isNaN(parseInt(MatrixX)) || isNaN(parseInt(MatrixY)) || isNaN(Number(MatrixX)) || isNaN(Number(MatrixY))) {
                document.write('Вы ввели неверное значение, введите число')
            } else if (Number(MatrixX) == 0 || Number(MatrixY) == 0 || Number(MatrixX) < 0 || Number(MatrixY) < 0){
                document.write('Вы ввели 0 либо меньше 0, введите число больше нуля')
            } else {
                for (let i = 0; i < numArr.length; i++) {
                    document.write(numArr[i] + '<br>')
                }
            }
            break
            default:
                break
    }
    
    
    
}