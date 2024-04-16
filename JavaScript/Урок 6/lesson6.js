let test = document.querySelector('h3').textContent
console.log(test);
let test2 = document.querySelector('ol li p').textContent
console.log(test2);
let test3 = document.querySelectorAll('li:last-of-type')[3].textContent

let color = document.querySelectorAll('li')

for (const styleG of color) {
    styleG.style.color = 'green'
}


