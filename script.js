let progressBars = document.querySelectorAll(".circular-progress");

const progressEndValues = [90, 75, 50, 25]; // Different end values for each progress bar
const progressColors = ["#7d2ae8", "#ff6b6b", "#4caf50", "#3498db"]; // Different colors for each progress bar

progressBars.forEach((progressBar, index) => {
    let progressValue = progressBar.querySelector(".progress-value");

    let progressStartValue = 0,
        progressEndValue = progressEndValues[index],
        speed = 100 * (index + 1),
        progressColor = progressColors[index];

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        progressBar.style.background = `conic-gradient(${progressColor} ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        progressValue.style.color = progressColor; // Set text color equal to the progress bar color

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
});