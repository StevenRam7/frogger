const hitStart = document.querySelector('#start-button');
const hitPause = document.querySelector('#pause-button');
const wholeGrid = document.querySelectorAll('.grid div');
let currentBox = 76;
const gridWidth = 9;
const gridHeight = 9;

function move(event) {
    wholeGrid[currentBox].classList.remove('frog')
    
    switch(event.key) {
        case "ArrowLeft" :
            if (currentBox % gridWidth !== 0) currentBox -= 1
            break
        case "ArrowRight" :
            if (currentBox % gridWidth < gridWidth - 1) currentBox += 1
            break
        case "ArrowUp" :
            if (currentBox - gridHeight >= 0) currentBox -= gridHeight
            break
        case "ArrowDown" :
            if (currentBox + gridHeight < gridWidth * gridHeight) currentBox += gridHeight
            break
    }

    wholeGrid[currentBox].classList.add('frog')
}

document.addEventListener('keyup', move)