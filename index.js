const startButton = document.querySelector('#button-start');
const stopButton = document.querySelector('#button-stop');
const resetButton = document.querySelector('#button-reset');
const timer = document.querySelector('#timer');
const timerInitial = timer.innerHTML;

let timerLeft = parseInt(timer.innerHTML.split(':')[0] * 60 + parseInt(timer.innerHTML.split(':')[1]));

let intervalID;

function updateTimer () {
    let minutes = Math.floor(timerLeft / 60).toString().padStart(2, "0");
    let seconds = Math.floor(timerLeft % 60).toString().padStart(2, "0");
    timer.innerHTML = minutes + ":" + seconds;

    if (timerLeft <= 0) {
        clearInterval(intervalID);
        alert("Hora do descanso.")
    }
}

startButton.addEventListener("click", () => {
    intervalID = setInterval(() => {
        timerLeft -= 1;
        updateTimer();
    }, 1000)
})

stopButton.addEventListener("click", () => {
    clearInterval(intervalID);
})

resetButton.addEventListener("click", () => {
    clearInterval(intervalID);
    timer.innerHTML = timerInitial;
})

updateTimer();