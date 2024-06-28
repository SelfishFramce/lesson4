const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";

const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

const delaySeconds = 1;

let intervalId;
let remainigTime;

let hours;
let minutes;
let seconds;

setTimeout(() => {
    console.log("lol")
}, 5000);

function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainigTime = hours * 3600 + minutes * 60 + seconds;
    intervalId = setInterval(updateTimer, delaySeconds * 1000);

    document.documentElement.requestFullscreen();

    hideElement(startButton);
    showElement(stopButton);
}

function updateTimer() {
    if (remainigTime > 0) {
        remainigTime = remainigTime - 1;
        hours = Math.floor(remainigTime / 3600);
        minutes = Math.floor(remainigTime % 3600 / 60);
        seconds = remainigTime % 60;

        hoursInput.value = hours.toString().padStart(2, "0");
        minutesInput.value = minutes.toString().padStart(2, "0");
        secondsInput.value = seconds.toString().padStart(2, "0");
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
    hideElement(startButton);

    setTimeout(() => {
        document.exitFullscreen();
        showElement(startButton)
    }, 1000);

    showElement(startButton);
    hideElement(stopButton);
}

function hideElement(element) {
    element.classList.add("hide");
}

function showElement(element) {
    element.classList.remove("hide");
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);