// function digitalRoot(n) {
//     n = String(n).split('').map(el => el = Number(el))

//     if (n.length == 1) {
//         return parseInt(n.join(''))
//     } else {
//         return digitalRoot(n.reduce((x,el) => {
//             return x += el
//         },0))
//     } 
//   }

//   console.log(digitalRoot(493193));

// class Rentagle {
//     #width = null
//     #heigth = null

//     constructor(width,heigth) {
//         this.#width = width
//         this.#heigth = heigth
//     }

//     get width() {
//         return this.#width
//     }

//     set width(width) {
//         this.#width = width
//     }
//     get heigth(){
        
//         return this.#heigth
//     } 
//     set heigth(heigth) {
//         this.#heigth = heigth
//     }
// }

// let ren = new Rentagle(10,20)
// ren.heigth = 10
// ren.width = 20
// console.log(ren.width);

// class Test1 {
//     constructor(q,w) {
//         this.q = q
//         this.w = w
//     }

//     test() {
//         return this.q + ' ' + 'no dota...'
//     }
// } 

// const t1 = new Test1('sasha','sukach')
// console.log(t1);
// console.log(t1.test())


// class Test2 extends Test1 {
//     test() {
//         super.test()
//         return this.q + ' ' + 'igral w dota'
//     }
// }
// let t2 = new Test2('dima', 'zaxar')
// console.log(t2);
// console.log(t2.test())

// class Test3 extends Test2 {
//     test() {
//         super.test()
//         return this.q + ' ' + '=' + ' ' + null
//     }
// }

// let t3 = new Test3('olya', 'gav')
// console.log(t3);
// console.log(t3.test());

// class Person2 {
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     greet() {
//         console.log('Hi There!');
//     }
// }
// let per = new Person2('sasha', 'sukach')
// Person2.prototype.myFunc = function() {
//     console.log('hallo world and' + ' ' + this.firstName);
//     return null
// }

// console.log(per.myFunc());

// let p = new Object ({
//     name: 'sasha',
//     age: '27',
// })
// Object.prototype.mu = function() {
//     return 'hz'
// }
// console.log(p);



// class N {
//     constructor(a,b) {
//         this.a = a
//         this.b = b
//     }
// }

// let n = new N('adin','dwa')
// console.log(n);
// N.prototype.tri = 'tri'
// console.log(n);

// let arr = []
// class Company{
//     constructor(firstName,lastName,countAge){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.countAge = countAge
//     }

// }
// let alex = new Company('Alex','Sukach', 5)
// let boris = new Company('Boris', 'Shmargun', 6)
// arr = [alex,boris]

// Company.prototype.out = function() {
//     return this.firstName + ' ' + this.lastName + ' ' +'has been with the company ' + ' ' + this.countAge
// }

// arr.forEach(person => {
//     console.log(person.out());
// })

// let arr = []
// let arr2 = []
// function Push(arr) {
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.floor(Math.random() * 20) + 1 )
//         // arr2.push(Math.floor(Math.random() * 100000) + 1 )
//     }
//     return arr
// }
// Push(arr);



// QuickSort
// function sor(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let pivot = arr[Math.floor(arr.length / 2)]
//     let minL = []
//     let maxR = []
//     // console.log(minL, pivot, maxR);
//     for (let i = 1; i < arr.length; i++) {
//         arr[i] < pivot ? minL.push(arr[i]) : maxR.push(arr[i])
//     }

//     return [...sor(minL), pivot, ...sor(maxR)]
// }
// console.log(sor(arr));







// function expandedForm(num) {
//   let str = String(num)
//   let out = ''
//   let index = str.length - 1
  
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != 0) {
//       out += str[i] * (10 ** (index - i)) + ' + '
//     }
//   }
//   return out.trim()
// }

// console.log(expandedForm(num));


// function sortV(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i 
//         for (let k = i + 1; k < arr.length; k++) {
//             if (arr[k] < arr[minIndex]) {
//                 minIndex = k
//             }
//         }    
//         console.log(arr);
//         let numSwap = arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = numSwap    
//     }
//     return arr
// }

// console.log(sortV(arr));

// let arr = asf
// function findOutlier(arr){
    // let num = arr.reduce((b,el) => b += el)
    // console.log(num);
    // return num % 2 == 1 ? arr.find(el => el % 2 == 1) : arr.find(el => el % 2 == 0)
//     let countTrue = 0
//     let countFalse = 0
//     let x
//     arr.forEach(el => {
//         if (el % 2 == 1 || el % 2 == -1) {
//             countTrue++
//         } else {
//             countFalse++
//         }
//     });
//     return countTrue < countFalse ? arr.find(el => (el % 2 == 1 || el % 2 == -1)) : arr.find(el => el % 2 == 0)
// }
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// console.log(findOutlier([-79252841,-95199772,106442442,27344040,-58125064,-15521206,7181962,151701408,-177768784,-102006970]));
// function order(words){
//     if(words == '') {
//       return words
//     }
//     let resultStr = ''
//     let strArr = words.split(' ')
    
//   }
//   console.log(order("is2 Thi1s T4est 3a"));

//   function num (arr) {
//     let minIndex = 
//   }
//   console.log(num([125,6,125,1,23,33]));

//////////////////////////////////////////////////////////////////////////
// stars click
// let stars = document.querySelector('.stars')

// let star = document.querySelectorAll('.star')
// let out = document.querySelector('.output')


// star.forEach((el,i,arr) => {
//   el.starValue = i + 1
//   el.addEventListener('click', (event) => {
//     out.innerHTML = `You Rated this ${event.target.starValue} stars`
    
//     star.forEach((el,i) => {
//       if (i < event.target.starValue) {
//         el.classList.add('orange')
//       } else {
//         el.classList.remove('orange')
//       }
//     })

//   })
  
// })
/////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
// click box 
// let out = document.querySelector('.output')
// let mes = document.querySelector('.message')

// const game = {
//   timer: 0,
//   start: null
// };
// // console.log(game);

// let div = document.createElement('div')
// out.appendChild(div)
// div.classList.add('box')

// let instruction = document.createElement('p')
// mes.textContent = 'Press to Start'
// mes.appendChild(instruction)

// function randomNum (n) {
//   return Math.floor(Math.random() * n) + 1
// }

// div.addEventListener('click', () => {
//   div.style.display = 'none'
//   setTimeout(function() {
//       addBox()
//   },randomNum(3000))
//   if (!game.start) {
//     mes.textContent = 'Loading....'
//   } else {
//     let date = new Date().getTime()
//     let startTime = (date - game.start) / 1000
//     mes.textContent = `ваше время состовляет ${startTime} sec`
//   }
// })

// function addBox () {
//   mes.textContent = 'Click it...'
//   game.start = new Date().getTime()
//   div.style.display = 'block'
//   div.style.top =  randomNum(450) + 'px'
//   div.style.left =  randomNum(450) + 'px'

// }
///////////////////////////////////////////////////////////////////////

// function leaderB(user, user_score, your_score){
//     let beta = 3
//     let kuy8 = 1
//     let res = Math.abs(user_score - your_score) + 1
//     let betaCount = ((Math.floor(Math.random() * res + 2)) * beta)
//     let kuy8Count = ((Math.floor(Math.random() * res + 2)) * kuy8)
//     let check = true
//     let testBeta
//     let testKuy8 
//      console.log(res);
//      console.log(betaCount);
//      console.log(kuy8Count);
//      while (check) {
//         if ((betaCount * beta) + (kuy8Count * kuy8) == res) {
//             console.log([betaCount,kuy8Count]);
//             check = false
//         }
//      }
// }
// leaderB('g964', 19990, 20000)

// ЗАДАЧА +1 МАССИВ 
// let arr = [0,0,1,4,7,9,0,6]

// function num (arr) {
//     let res = []

//     if (arr.length == 0 || Math.min(...arr) < 0 || Math.max(...arr) > 9) {
//         return null
//     }

//     let x = arr[0]
//     arr.forEach((el,i) => {
//         if(x == 0) {
//             res.push(el)
//             x = arr[i+1]
//         }
//     })

//     let str = ''
//     arr.forEach(el => {
//         str += el
//     });

//     let test = String(BigInt(str) + 1n)
//     res.push(test)

//     return res.join('').split('').map(el => {
//         return parseInt(el)
//     })
    
    
// }
// console.log(num(arr));

///////////////////////////////////////////////////////////////////////////////////////



