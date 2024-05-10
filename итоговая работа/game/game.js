let item = ['rocs', 'scissors', 'paper']
let randomItems = item[Math.floor(Math.random()*3)]
console.log(randomItems);

 let x = document.querySelectorAll('button')
 console.log(x)

 let info = document.querySelector('.info_game') 
 let test = document.querySelector('.test')
 let esc = document.querySelector('.knopka')
console.log(esc);
 info.addEventListener('click', () => {
    test.style.display = 'block'
 })

 esc.addEventListener('click', () => {
   test.style.display = 'none'
 })