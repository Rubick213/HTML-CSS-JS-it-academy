// document.querySelector('button').onclick() = function() {
//     // тут задаем функцию => какое ниюуть событие
//     document.body.classList.toggle('x')
//     document.body.classList.toggle('y')
// }

// document.querySelector('div').onclick = function() {
//     document.body.querySelector('div').classList.toggle('active')
// }
/////////////////////////////////////////////////////////////////////////



// const allBlocks = document.querySelectorAll('div');

// for (let i = 0; i < allBlocks.length; i++) {
//     allBlocks[i].addEventListener('click', activeBlock)
    
// }

// function activeBlock(event) {
//     // console.log(event.target.parentElement.dataset.id);

//     const currentBlock = event.target.parentElement.dataset.id
//     for (let i = 0; i < allBlocks.length; i++) {
//         allBlocks[i].classList.remove('active')
        
//     }
//     allBlocks[currentBlock-1].classList.add('active')
// }

// document.addEventListener('click', out)

// function out(event) {
//     for (let i = 0; i < allBlocks.length; i++) {
//         if (event.target === allBlocks[i] || allBlocks[i].contains(event.target) ) {
//            continue;
//         } else {
//             allBlocks[i].classList.remove('active')
//         }
//     }
// }

// let block = document.querySelectorAll('li')
// console.log(block);

// for (let i = 0; i < block.length; i++) {
//     block[i].addEventListener('click', activeBlock)    
// }

// function activeBlock (event) {
//     const currentBlock = event.target.dataset.id
//     for (let i = 0; i < block.length; i++) {
//         block[i].classList.remove('active')
//     }
//     block[currentBlock-1].classList.add('active')


//     const tabss = document.querySelectorAll('.tab')
//     for (let i = 0; i < tabss.length; i++) {
//         tabss[i].classList.remove('active')
//     }
//         tabss[currentBlock - 1].classList.add('active')
// }

