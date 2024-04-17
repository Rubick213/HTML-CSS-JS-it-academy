
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
        str += product[i].name + ': ' + parseFloat(product[i].price) + ' за kg\n'     
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
    let res = 'За вашу сумму вы купите: '
    do {
        sum = prompt('Введите сколько у вас денег')
        if (isNaN(sum)) {;
            alert('Вы ввели неправильное значение,Повторите попытку')
        } else if (parseInt(sum) < 0 ) {
            alert('Вы ввели отрицательно значение')
        } else if (sum == null || sum == '' || isNaN(parseInt(sum))) {
            alert('Вы ничего не ввели')
        } else {
            let test = false;

            for (const obj of arrObj) {
                let resSum = Math.floor(Number(sum) / parseFloat(obj.price));
                if (resSum > 0 && resSum < parseInt(obj.count)) {
                    res += `${resSum} kg ${obj.name} или `;
                    test = true;
                }
            }

            if (!test) {
                res = 'За вашу сумму вы ничего не купите!';
            } else {
                res = res.slice(0, -4);
            }
            break
            
        }
    } while (true);
    
    
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