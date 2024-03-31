//1
// let oneNum = +prompt('введите число 1')
// let twoNum = +prompt('введите число 2')
// let threeNum = +prompt('введите число 3')
// let res = oneNum * 2 - threeNum - twoNum * 3
// console.log(res);
//2
// var oneNum = parseFloat(prompt('введите число 1'))
// var twoNum = parseFloat(prompt('введите число 2'))
// oneNum % 2 === 0 && twoNum % 2 === 0 ? console.log('оба числа являются четными - true') : console.log('оба числа являются четными - false');
//3
// var oneNum = parseFloat(prompt('введите число 1'))
// var twoNum = parseFloat(prompt('введите число 2'))
// if (oneNum % 2 === 0 && twoNum % 2 === 0) {
//     console.log(oneNum + twoNum);
// } else if (oneNum % 2 === 1 && twoNum % 2 === 1){
//     console.log(oneNum * twoNum);
// } else if (oneNum % 2 === 0 && twoNum % 2 === 1) {
//     console.log(twoNum);
// } else {
//     console.log(oneNum);
// }
//задание из рабочей тетради if
// var family = prompt('Введите фамилию')
// var name = prompt('Введите имя')
// var patronymic = prompt('Введите отчество')
// var age = parseFloat(prompt('Введите ваш возраст'))
// var gender = confirm('Ваш пол мужской?')

// if (gender !== true && age < 65) {
//     alert(`ваше ФИО: ${family} ${name} ${patronymic}\nваш возраст в годах: ${age}\nваш возраст в днях: ${age * 365}\nчерез 5 лет вам будет: ${age + 5}\nваш пол: ${'Женский'}\nвы на пенсии: ${'нет'}`);
// } else if (gender !== true && age >= 65) {
//     alert(`ваше ФИО: ${family} ${name} ${patronymic}\nваш возраст в годах: ${age}\nваш возраст в днях: ${age * 365}\nчерез 5 лет вам будет: ${age + 5}\nваш пол: ${'Женский'}\nвы на пенсии: ${'да'}`);
// } else if (gender === true && age < 65) {
//     alert(`ваше ФИО: ${family} ${name} ${patronymic}\nваш возраст в годах: ${age}\nваш возраст в днях: ${age * 365}\nчерез 5 лет вам будет: ${age + 5}\nваш пол: ${'мужской'}\nвы на пенсии: ${'нет'}`);
// } else {
//     alert(`ваше ФИО: ${family} ${name} ${patronymic}\nваш возраст в годах: ${age}\nваш возраст в днях: ${age * 365}\nчерез 5 лет вам будет: ${age + 5}\nваш пол: ${'мужской'}\nвы на пенсии: ${'да'}`);
// }
//задание из рабочей тетради ?:
// alert(`ваше ФИО: ${family} ${name} ${patronymic}
//        ваш возраст в годах: ${age}
//        ваш возраст в днях: ${age * 365}
//        через 5 лет вам будет: ${age + 5}
//        ваш пол: ${gender === true ? 'мужской' : 'женский'}
//        вы на пенсии: ${age >= 65 ? 'да' : 'нет'}`);


