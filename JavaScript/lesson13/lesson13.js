// const arrName = ['jon','kon','lida','misha']
// let NameObj
// let arrResulmt = arrName.map((el,index) => el = `${index}-${el}`)

// NameObj = arrName.map((el,index) => {
//         return {id: index,
//                 name:el}
//         }
// )
// console.log(NameObj);

// let arrProduct = [
//     {
//     id: 1,
//     name: "Leggings",
//     price: 5,
//     },
//     {
//     id: 2,
//     name: "Cardigan",
//     price: 49.9,
//     },
//     {
//     id: 4,
//     name: "Dressing gown",
//     price: 55,
//     },
//     {
//     id: 11,
//     name: "Dress",
//     price: 70.9,
//     },
//     {
//     id: 33,
//     name: "Jacket",
//     price: 86.7,
//     },
//     {
//     id: 8,
//     name: "Coat",
//     price: 99.9,
//     }
//     ]
    
// 	// 1
//     // Написать 	функцию, которая принимает в качестве 	аргумента id и 	находит элемент по этому id, 
//     // и возвращает его либо сообщение, что 	такого элемента нет в списке
//     // 2
//     // Написать функцию, которая принимает в качестве 	аргумента name 	и находит элемент по этому name, 
//     // и возвращает его 	либо 	сообщение, что такого элемента нет в 	списке
//     // 3
//     // Написать функцию, которая принимает в качестве 	аргумента redPrice (красная цена). 
//     // Найти элементы у которых ценник 	ниже redPrice 	и 	вернуть массив этих элементов.


//     function test(index, nameUs, redPrice) {
        // 1
        // let searchId = arrProduct.find(el => el.id == index)
        // return searchId.id == index ? searchId : 'Takogo net'

        // 2
        // let searchId = arrProduct.find(el => el.name == nameUs)
        // return searchId == nameUs ? searchId : 'Takogo net'

        // 3
    //     let searchId = arrProduct.filter(el => el.price <= redPrice)
        
    //     return searchId.length != 0 ? searchId : 'Takogo net'
    // }
    // console.log(test(11,"Coat", 10));

    const shopList = {
        '09360374': {
        name: 'Cardigan',
        price: 49.90
        },
        '02929990': {
        name: 'Coat',
        price: 99.90
        },
        '01827744': {
        name: 'Dressing gown',
        price: 55.00
        },
        '18288828': {
        name: 'Dress',
        price: 70.90
        },
        '08093063': {
        name: 'Jacket',
        price: 86.70
        },
        '09282888': {
        name: 'Leggings',
        price: 5.00
        }
    };

    let arr = []
    for (const el in shopList) {
        arr.push(shopList[el])
    }
    
//   1  Написать 	функцию, которая сортирует элементы 	по имени, возвращает массив 	
// ["Cardigan","Coat","Dress","Dressing gown","Jacket","Leggings”]
//        2.     Написать 	функцию, которая сортирует по цене, 	возвращает массив 

// 2 [5, 49.9, 55, 70.9, 86.7, 99.9]
// Написать 	функцию, которая 	возвращает 	 массив отсортированных по цене обьектов 	
// (без ключа)
// console.log(arr);

let resultat = []

function sortName (el, result) {
    result = el.map(elem => elem.name)
    return result.sort()
}
let arrName = sortName(arr);
console.log(arrName);

function sortPrice (num, result) {
    result = num.map(elem => elem.price)
    
    return result.sort((a,b) => a - b)
}
let arrNum = sortPrice(arr);
console.log(arrNum);

function out (arr1,arr2) {
    let obj = {name:2}
    // for (let i = 0; i < arr1.length; i++) {
    //     resultat.push({name: arr1[i], price: arr2[i]})   
    // }
    // return resultat
    
    for (const el in obj) {
        if (!obj[el].name) {
            console.log(obj[el].name);
        }
    }
}
console.log(out(arrName ,arrNum));


    