const hitStart = document.querySelector('#start-button');
const hitPause = document.querySelector('#pause-button');
const wholeGrid = document.querySelectorAll('.grid div');
let currentBox = 76;

function move() {
    console.log(wholeGrid)
    console.log(wholeGrid[currentBox])
    wholeGrid[currentBox].classList.add('frog')
}

document.addEventListener('keyup', move)