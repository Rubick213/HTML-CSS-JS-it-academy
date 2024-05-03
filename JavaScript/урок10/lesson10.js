let links = document.querySelector('a')
// console.log(links);

function testLinks (text) {
    return text.textContent.startsWith('https:')
}
// console.log(testLinks(links));



function endLinks (text,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (text.textContent.endsWith(arr[i])) {
            return true
        }   
    }

    return false
}
// console.log(endLinks(links, ['.by', '.com', '.ru']));

let js = 'Java Script is a programming language'
let sub = js.slice(js.indexOf('language'))
// console.log(sub);


let mony = dol => dol.slice(1)
console.log(mony('$100'))

let upFirstLetter = str => {
    let stringSpace = str.trim()
   return stringSpace[0].toUpperCase() + stringSpace.slice(1)
}
// console.log(upFirstLetter('goodbye'));
// str[0].toUpperCase() + str.slice(1)

let strDelet = str => str.slice(0, str.indexOf('(') - 1) + str.slice(str.indexOf(')') + 1)   
console.log(strDelet('небо голубое трава зеленая (Не зеленая), а еще зима белая'));

let javaS = 'Java is awesome. Java is fun.'
let res = javaS.toLowerCase().replace('java', 'JavaScript')
res = javaS.toLowerCase().replaceAll('java', 'JavaScript')
console.log(res);

let devis = '1-2-3-4-5'
let tocka = devis.replace('-', '.')
console.log(tocka);

let mesyac = 'яна,февр,мар,апр,май,июн,июл,авг,сент,окт,нояб,дек'
let arrMes = mesyac.split(',')
console.log(arrMes);
