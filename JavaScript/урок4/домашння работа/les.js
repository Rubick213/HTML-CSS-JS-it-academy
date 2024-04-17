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




// 2.1 сама заполняет его числами по порядку, пока не заполнится массив. (1, 2, 3, ...)





// 2.2 сама заполняет его отрицательными числами по порядку, пока не заполнится
// массив. (-1, -2, -3, ...)





//2.3 сама заполняет его только четными числами (2, 4, 6, 8...)

///////////////////////////////////////////////////////////////////////////////////////////////////
