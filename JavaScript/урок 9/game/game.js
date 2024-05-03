
let input = document.querySelector('.inputData')
let text = document.querySelector('.message')
const arr = []

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        CheckInput(input.value)
        input.value = ''
    }
})


let CheckInput = (input) => {
    input = input.toLowerCase()
    if (input == '' || input == null || !input.trim()) {  
        text.innerHTML = 'Вы ничего не ввели'
    } else if (/\d/.test(input)) {
        text.innerHTML = 'Вашем слове есть цифры'
    } else if(input.includes(' ')) {
        text.innerHTML = 'Вы ввели несколько слов или в словах есть пробелы введите одно слово!'
    } else {
        input = input.toLowerCase()
        if (input.slice(-1) == 'ь' || input.slice(-1) == 'ъ') {
            input = input.slice(0, input.length-1)
        }
        if (arr.length == 0) {
            text.innerHTML = `Следующее слово на ${input.slice(-1)}`
            arr.push(input)
        } else {
            let wordFirst = input[0] //первая буква слова из инпута
    
            let arrElem = arr[arr.length-1]
            let arrElemLast = arrElem[arrElem.length-1]  //последняя буква последнего эдемента массива
    
            if (arrElemLast == wordFirst) {
                if (!arr.includes(input)) {
                    text.innerHTML = `Следующее слово на ${input.slice(-1)}`
                    arr.push(input) 
                } else {
                    text.innerHTML = 'Такое слово уже говорили'
                }
            } else {
                text.innerHTML = `Слово должно начинаться на последнюю букву предыдущего слова "${arrElem}"`
            }
        }
        console.log(arr);
    }
}

