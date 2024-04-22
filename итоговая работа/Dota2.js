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
let img = document.querySelector('.logo_description')
let r = document.querySelectorAll('.description_game p')
console.log(r);
console.log(img);
window.addEventListener('scroll', () => {
    if (window.scrollY > 210) {
        img.classList.add('logo_description_script')
        for (let i = 0; i < r.length; i++) {
            r[i].classList.add('logo_description_script')
        }
    } else {
        img.classList.remove('logo_description_script')
        for (let i = 0; i < r.length; i++) {
            r[i].classList.remove('logo_description_script')
        }
    }
})