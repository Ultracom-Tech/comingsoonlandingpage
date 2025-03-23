document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Set the date we're counting down to (adjust as needed)
    const launchDate = new Date('December 31, 2025 23:59:59').getTime();

    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.innerHTML = days < 10 ? '0' + days : days;
        hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
        minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // If the count down is finished
        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            document.querySelector('.countdown').innerHTML = 'LAUNCHED!';
        }
    }, 1000);
    
});