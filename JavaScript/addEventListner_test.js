let btn = document.body.childNodes[3]
let text = document.querySelector('h1')
btn.addEventListener('click', (event) => {
    if (event) {
        text.innerHTML = '<strong><em>текст изменился!!!</em></strong>'
    }
})

// let test0 = document.getElementsByTagName('div').item(3)
let test0 = document.getElementsByTagName('div').namedItem('three1')
console.log(test0);


let testP = document.getElementById('o')
console.log(testP);

function message (el) {
    console.dir(el.textContent)    
}

//////////////////////////////////////
let divs = document.getElementsByClassName('bg')
let btn2 = document.getElementById('bgBtn')

btn2.onclick = function () {
    for(let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = divs[i].id
    }
}

for(let i = 0; i < divs.length; i++) {
    divs[i].innerText = divs[i].id
}
/////////////atrib news///////////////
let link = document.querySelector('a'); 

link.addEventListener('click', () => {
    link.setAttribute('class', 'active')
})

//////////10.8////////
let nameArr = ['Mike', 'Marina', 'Tanya', 'Sasha', 'Evgenya', 'Denis']
let elSite = document.querySelector('#mess')
function build() {
    let html = '<h1>My Friends Table</h1><table border="1px">'
    for (let i = 0; i < nameArr.length; i++) {
        html += `<tr style="cursor:pointer;" class="box" data-row="${i+1}" data-name="${nameArr[i]}" onclick="getData(this)"><td>${nameArr[i]}</td><td>${i}</td></tr>`
    }
    document.querySelector('#out').innerHTML = html    
}
build()

function getData (el) {
    let row = el.getAttribute('data-name')
    let col = el.getAttribute('data-row')
    elSite.innerHTML = `${row} ${col}`
}

window.onload = function () {
    document.querySelector('.square').addEventListener('click', changeColor)

    function changeColor () {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }
}

///////////////10.9/////////////////
let knop = document.querySelectorAll('.knop')

for (let i = 0; i < knop.length; i++) {
    function output () {
        console.log(this.textContent);
    }
    knop[i].addEventListener('click', output)
}

/////////////// new el ///////////////
let par = document.querySelector('.new')
let elem = document.createElement('h1')
elem.innerText = 'Eto prosto test'
par.appendChild(elem)

//10.10//
let data = document.getElementById('addItem')
// let valInput = data.this
// console.log(valInput);
let btn3 = document.getElementById('addNew')
let olList = document.getElementById('list')

btn3.addEventListener('click', dobavit)

function dobavit () {
    
    let valInput = data.value
    let elem = document.createElement('li')
    elem.innerText = valInput
    olList.appendChild(elem)
    data.value = ''

}