// const spanClick = document.querySelector('span')
// const ulList = document.querySelector('.list')

// spanClick.addEventListener('click', () => {
//     ulList.classList.toggle('listNone')
//     if (ulList.classList.contains('listNone')) {
//         spanClick.innerHTML = 'свернуть'
//     } else {
//         spanClick.innerHTML = 'развернуть'
//     }
// ///блок равен теперь этоому значению
//     ulList.innerHTML = '<li> Test </li>'
// })


// /////////////////////2 zadaniy/////////////////
// const cat = document.getElementById('cate')
// cat.innerHTML = `<strong>Кошка</strong> или домашняя кошка <em>(лат. Felis silvestris catus)</em> , 
//  — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.`


 ////////3 zadacha ///////////////

//  const btn = document.querySelector('button')

// const newNum = document.querySelector('.num')

// let number = () => {
//     let count = parseInt(document.body.children[1].lastElementChild.textContent)
//     let p = document.createElement('p')
//     p.textContent = `${count + 1}`
//     newNum.appendChild(p)
// }
////лучше запихнуть в массив а потом длину +1 //////

//////////////////4 sadacha/////////////

// const shopList = {
//     '09360374': {
//       name: 'Cardigan',
//       price: 49.90,
//       count: 0,
//     },
//     '02929990': {
//       name: 'Coat',
//       price: 99.90,
//       count: 12,
//     },
//     '01827744': {
//       name: 'Dressing gown',
//       price: 55.00,
//       count: 0,
//     },
//     '18288828': {
//       name: 'Dress',
//       price: 70.90,
//       count: 3734,
//     },
//     '08093063': {
//       name: 'Jacket',
//       price: 86.70,
//       count: 0,
//     },
//     '09282888': {
//       name: 'Leggings',
//       price: 55.00,
//       count: 7,
//     }
//   }

//   let tabl = document.querySelector('table')
// //Добавляем строку  с каждой интерацией/////
//   for (const key in shopList) {
//     let cou // если ищещь в обьектах что то и выовдишь другое значение лучше создавать перемуню дополнительную
//     if (shopList[key].count == 0) {
//         cou = 'out of stock'
//     } else {
//         cou = shopList[key].count
//     }
//     let row = document.createElement('tr')
//     row.innerHTML = `<td>${key}</td> <td>${shopList[key].name}</td> <td>${shopList[key].price}</td> <td>${cou}</td>`
//     tabl.appendChild(row)
//   }

// задача с инпутом и добовлением
let inp = document.querySelector('input')
inp.addEventListener('keypress', (event) => {
   if(event.key == 'Enter') {
    const li = document.createElement('li')
    li.innerHTML = inp.value
    document.querySelector('ol').appendChild(li)
    inp.value = ''
   }
})
