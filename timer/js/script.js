'use strict';


const timerBox = document.querySelector('.timeBox'),
    startBtn = document.querySelector('.startBtn'),
    resetBtn = document.querySelector('.resetBtn'),
    stopBtn = document.querySelector('.stopBtn');

let time = 0,
    minutes,
    seconds,
    timeCounter;

function start() {
    timeShow(++time);
}
function reset() {
    time = 0;
    timeShow(time);
    clearInterval(timeCounter);
}
function stop() {
    clearInterval(timeCounter);
}
function timeShow(number){
    minutes = parseInt(number / 100);
    seconds = number % 100;
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    timerBox.textContent = `${minutes}:${seconds}`;
}
startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    timeCounter = setInterval(start, 10);
});
resetBtn.addEventListener('click', reset);
stopBtn.addEventListener('click', stop);