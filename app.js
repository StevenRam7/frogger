const hitStart = document.querySelector('#start-button');
const hitPause = document.querySelector('#pause-button');
const wholeGrid = document.querySelectorAll('.grid div');
let currentBox = 76;
const gridWidth = 9;

function move(event) {
    //console.log(event)
    wholeGrid[currentBox].classList.remove('frog')
    switch(event.key) {
        case "ArrowLeft" :
            currentBox -= 1
            break
        case "ArrowRight" :
            currentBox += 1
            break
        case "ArrowUp" :
            currentBox -= gridWidth
            break
        case "ArrowDown" :
            currentBox += gridWidth
            break
    }

    wholeGrid[currentBox].classList.add('frog')
}

document.addEventListener('keyup', move)