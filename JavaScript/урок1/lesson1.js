// var oneNum = 50 - 15 * 7 + 17 / 3
// var twoNum = 21 * 3 / 7 - 20
// var res = 115 % 75
// console.log(`${oneNum} : ${twoNum} : ${res}`);

// console.log(`1:${oneNum > twoNum}, 2:${oneNum == res || oneNum < res}, :3${twoNum == res && oneNum > res}`);

// var oneStr = "Я пошел на "
// var twoStr = "Я люблю свою"
// var threeStr = "работу"
// console.log(`${oneStr + ' ' + threeStr} ::: ${twoStr + ' ' + threeStr}`);

// var s = 100
// var s2 = 80
// var street = 'main street'

// console.log((s >= 100 && street != "main street") || (s2 < 100 && street == 'main street'));

// var speed = parseInt(prompt('С какой скоросью едет мотоциклист (км ч)'))
// console.log(typeof speed);
// var dist = prompt('какое растояние должен преодолеть мотоциклист (км)')
// var res = dist / speed
// alert(res)

// var zp = parseInt(prompt('ваша зарплата'))
// var home = '230r'
// var market = 5 * parseInt('80r')


// console.log(zp - (zp * 0.1) - parseInt(home) - market);

// var oneNum = parseInt(prompt('введите число 1'))
// var twoNum = parseInt(prompt('введите число 2'))

// var x = parseFloat(prompt('num1'))
// var y = parseFloat(prompt('num2'))
// var res = (x + y) * 5
// console.log(`${oneNum + twoNum} and ${res}`);

var num = prompt('Введите положительное число')
if (num == '' || num == null) {
    console.log('Вы ничего не ввели');
} else if(!Number(num)){
    console.log('вы ввели не число ');
} else if(parseFloat(num) < 0){
    console.log('введите положительно число');
} else {
    console.log('все ок');
}
