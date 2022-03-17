const hitStart = document.querySelector('#start-button');
const hitPause = document.querySelector('#pause-button');
const wholeGrid = document.querySelectorAll('.grid div');
const leftLogs = document.querySelectorAll('.log-left');
const rightLogs = document.querySelectorAll('.log-right');
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

function autoMoveLogs() {
    leftLogs.forEach((log) => moveLogLeft(log))
    rightLogs.forEach((log) => moveLogRight(log))
}

function moveLogLeft(log) {
    switch(true) {
        case log.classList.contains("L1") :
            log.classList.remove("L1")
            log.classList.add("L2")
            break
        case log.classList.contains("L2") :
            log.classList.remove("L2")
            log.classList.add("L3")
            break
        case log.classList.contains("L3") :
            log.classList.remove("L3")
            log.classList.add("L4")
            break
        case log.classList.contains("L4") :
            log.classList.remove("L4")
            log.classList.add("L5")
            break
        case log.classList.contains("L5") :
            log.classList.remove("L5")
            log.classList.add("L1")
            break
    }
}

function moveLogRight(log) {
    switch(true) {
        case log.classList.contains("L1") :
            log.classList.remove("L1")
            log.classList.add("L5")
            break
        case log.classList.contains("L5") :
            log.classList.remove("L5")
            log.classList.add("L4")
            break
        case log.classList.contains("L4") :
            log.classList.remove("L4")
            log.classList.add("L3")
            break
        case log.classList.contains("L3") :
            log.classList.remove("L3")
            log.classList.add("L2")
            break
        case log.classList.contains("L2") :
            log.classList.remove("L2")
            log.classList.add("L1")
            break
    }
}

setInterval(autoMoveLogs, 1000)

document.addEventListener('keyup', move)