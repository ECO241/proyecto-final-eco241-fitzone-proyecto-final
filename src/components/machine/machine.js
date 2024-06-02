import { setupTimer, startStopTimer, adjustTime } from './timer.js';

document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.getElementById('decrease-time');
    const increaseButton = document.getElementById('increase-time');
    const startStopButton = document.getElementById('start-stop');
    const timeSetter = document.getElementById('time-setter');
    const countdown = document.getElementById('countdown');

    let time = 0;
    let timer = null;

    decreaseButton.addEventListener('click', () => {
        time = adjustTime(time, -1);
        timeSetter.textContent = formatTime(time);
        resetCountdown();
    });

    increaseButton.addEventListener('click', () => {
        time = adjustTime(time, 1);
        timeSetter.textContent = formatTime(time);
        resetCountdown();
    });

    startStopButton.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
            startStopButton.textContent = 'START';
        } else {
            timer = startStopTimer(time, countdown, startStopButton);
            startStopButton.textContent = 'STOP';
        }
    });

    function resetCountdown() {
        clearInterval(timer);
        timer = null;
        countdown.textContent = '00:00:00';
        startStopButton.textContent = 'START';
    }

    function formatTime(seconds) {
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    }
});
