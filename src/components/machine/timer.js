export function setupTimer() {
    // Any initial setup if needed
}

export function startStopTimer(time, countdownElement, buttonElement) {
    let remainingTime = time;
    const timer = setInterval(() => {
        remainingTime--;
        countdownElement.textContent = formatTime(remainingTime);
        if (remainingTime <= 0) {
            clearInterval(timer);
            buttonElement.textContent = 'START';
        }
    }, 1000);
    return timer;
}

export function adjustTime(currentTime, adjustment) {
    const newTime = currentTime + adjustment * 60;
    return newTime >= 0 ? newTime : 0;
}

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}
