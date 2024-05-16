// скролл лого дота 2 уменьшение
const logo = document.querySelector('.head_logo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
    logo.classList.add('head_logo_min');
    } else {
    logo.classList.remove('head_logo_min');
    }
});

//функция слайд блок капсул
let translate = 0

const slidLeft = document.querySelector('.swpae_left')
const slidRigth = document.querySelector('.swape_rigth')

const leftRomb = document.getElementById('left-rhombus')
const rigthRomb = document.getElementById('rigth-rhombus')

const blockSlide = document.getElementById('block-slide')

slidRigth.addEventListener('click', () => {
    translate = -1078
    blockSlide.style.transform = `translateX(${translate}px)`
    
    rigthRomb.style.transform = 'scale(1.5,1.5)'
    rigthRomb.style.fill = 'aliceblue'
    leftRomb.style.transform = 'scale(1,1)'
    leftRomb.style.fill = 'none'
})
slidLeft.addEventListener('click', () => {
    if (translate == -1078) {
        translate = 0
    }
    blockSlide.style.transform = `translateX(${translate}px)`
    rigthRomb.style.transform = 'scale(1,1)'
    rigthRomb.style.fill = 'none'
    leftRomb.style.transform = 'scale(1.5,1.5)'
    leftRomb.style.fill = 'aliceblue'
})

// scroll=208

// func при скроле блок поочередно выезжает из левого края и правого
// let img = document.querySelector('.logo_description')
// let r = document.querySelectorAll('.description_game p')
// console.log(r);
// console.log(img);
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 210) {
//         img.classList.add('logo_description_script')
//         for (let i = 0; i < r.length; i++) {
//             r[i].classList.add('logo_description_script')
//         }
//     } else {
//         img.classList.remove('logo_description_script')
//         for (let i = 0; i < r.length; i++) {
//             r[i].classList.remove('logo_description_script')
//         }
//     }
// })

/////////////////описание дота 2/////////////////////
const listLi = document.querySelectorAll('.listUl>li')
const listInfo = document.querySelectorAll('.list_info_game>div')
console.log(listLi);

for (let i = 0; i < listLi.length; i++) {
    listLi[i].addEventListener('click', (event) => {
        const curentLi = event.target.dataset.id 
        for (let i = 0; i < listInfo.length; i++) {
            listLi[i].classList.remove('activeListGame')           
        }
        listLi[curentLi - 1].classList.add('activeListGame')
    
        for (let i = 0; i < listLi.length; i++) {
            listInfo[i].classList.remove('activeListGame')        
        }
        listInfo[curentLi - 1].classList.add('activeListGame')
    })
}


// let a = document.querySelector('')
// let b = a.textContent
// console.log(b);

let textEl = document.getElementById('dots_link') 
let originalText = textEl.innerHTML 
let count = 0
let dots = 5 

function updateText() {
    if (count < dots) {
        textEl.innerHTML += '.' 
        count++
    } else {
        textEl.innerHTML = originalText 
        count = 0
    }
}
setInterval(updateText, 500);