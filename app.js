const hitStart = document.querySelector('#start-button');
const hitPause = document.querySelector('#pause-button');
const showResult = document.querySelector('#result');
const timerDisplay = document.querySelector('#timer');
const wholeGrid = document.querySelectorAll('.grid div');
const leftLogs = document.querySelectorAll('.log-left');
const rightLogs = document.querySelectorAll('.log-right');
const leftCars = document.querySelectorAll('.car-left');
const rightCars = document.querySelectorAll('.car-right');
const finish = document.querySelectorAll(".finish");
const findFrog = document.querySelector(".frog");

let currentBox = 76;
let currentTime = 20;
const gridWidth = 9;
const gridHeight = 9;
let timer;

function moveFrog(event) {
    wholeGrid[currentBox].classList.remove("frog");

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
    wholeGrid[currentBox].classList.add("frog");
};

function autoMoveUnits() {
    currentTime--;
    console.log(findFrog);
    timerDisplay.textContent = "Time Left: " + currentTime;
    leftLogs.forEach((log) => moveLogLeft(log));
    rightLogs.forEach((log) => moveLogRight(log));
    leftCars.forEach((car) => moveCarLeft(car));
    rightCars.forEach((car) => moveCarRight(car));
    loss();
    win();
};

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
};

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
};

function moveCarLeft(car) {
    switch(true) {
        case car.classList.contains("C1") :
            car.classList.remove("C1")
            car.classList.add("C2")
            break
        case car.classList.contains("C2") :
            car.classList.remove("C2")
            car.classList.add("C3")
            break
        case car.classList.contains("C3") :
            car.classList.remove("C3")
            car.classList.add("C1")
            break
    }
};

function moveCarRight(car) {
    switch(true) {
        case car.classList.contains("C1") :
            car.classList.remove("C1")
            car.classList.add("C3")
            break
        case car.classList.contains("C3") :
            car.classList.remove("C3")
            car.classList.add("C2")
            break
        case car.classList.contains("C2") :
            car.classList.remove("C2")
            car.classList.add("C1")
            break
    }
};

function loss() {
    if (currentTime === 0 || wholeGrid[currentBox].classList.contains("C1") || 
    wholeGrid[currentBox].classList.contains("L4") || wholeGrid[currentBox].classList.contains("L5")) {
        console.log("You lose!");
        showResult.textContent = "You lose!";
        clearInterval(timer);
        wholeGrid[currentBox].classList.remove("frog");
        document.removeEventListener("keyup", moveFrog);
    }
};

function win() {
    if (wholeGrid[currentBox].classList.contains("finish")) {
        console.log("You win!");
        showResult.textContent = "You win!";
        clearInterval(timer); 
        document.removeEventListener("keyup", moveFrog);        
    }
};

startButton.addEventListener("click", () => {
    if (paused.innerHTML == "Paused!") {
        paused.textContent = '';
    }
    if (showResult.textContent === "You win!" || showResult.textContent == "You lose!") {
        location.reload();
    } 
    else {
         wholeGrid[currentBox].classList.add("frog");
         timer = setInterval(autoMoveUnits, 1000)
         document.addEventListener("keyup", moveFrog);
    }
});

pauseButton.addEventListener("click", () => {
    if (showResult.textContent.length > 0) {
        return null;
    }
    paused.textContent = "Paused!";
    clearInterval(timer);  
    document.removeEventListener("keyup", moveFrog); 
});
