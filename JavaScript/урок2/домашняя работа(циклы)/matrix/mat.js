let row = parseInt(prompt('строки'))
let columns = parseInt(prompt('колоны'))

let diogonoalSum = 0
let diogonoalArr = []

if(isNaN(row)|| isNaN(row)) {
        alert('Вы Ввели недопустимое значение в одно из запросов, введите число!');    
    } else if(row < 0 && columns > 0 || row > 0 && columns < 0 || row < 0 && columns < 0) {
        alert('вы ввели в один из запросов отрицательное число, введите положительное число!')
    } else if((row == 0 && columns > 0 || row == 0 && columns < 0) || (row > 0 && columns == 0 || row < 0 && columns == 0) || (row == 0 && columns == 0)) {
        alert('вы ввели 0 в один из запросов')
    } else {
        test
        :for(let i = 1; i <= row; i++) {
            let matrix = ''
            let res = 0
            diogonoalArr.push([])
            for(let k = 1; k <= columns; k++) {
                let number = parseInt(prompt(`введите значение ячейки ${i}-${k}`))
                if (isNaN(number)) {
                    alert('вы ввели не допустимое значение, попробуйте заного и введите число')
                    break test
                } else {
                    matrix += ' ' + number
                    res += number
                    diogonoalArr[i-1].push(number)    
                }
            }
            console.log(matrix)
            
            alert (`Сумма элементов в строке N${i} равна ${res}`)      
    }
}


if (row > columns || row < columns) {
    alert('сумм по диаганли не удалсь так как вы ввели разные числа в запрос')
} else if (isNaN(row) && !isNaN(columns) || !isNaN(row) && isNaN(columns) || isNaN(row) && isNaN(columns)) {
    alert('сумм по диаганли не удалсь так как вы отминили ввод или ввели недопустимое значение')
} else {
    for (let i = 0; i < diogonoalArr.length; i++) {
        diogonoalSum += diogonoalArr[i][i]
    }
    if (isNaN(diogonoalSum) || diogonoalSum == 0) {
        alert('сумма по диогонали не подсчитана\nвы не верно заполнили ячейки\nповторите попытку');
    } else {
        alert(`сумма по диогонали равна ${diogonoalSum}`)
    }
}
console.log(diogonoalArr);


