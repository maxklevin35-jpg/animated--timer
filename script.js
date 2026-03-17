let totalTime = 60;
let timeLeft = totalTime;
let timer;
let running = false;

const timeDisplay = document.getElementById("time");
const progress = document.getElementById("progress");

const circumference = 2 * Math.PI * 90;
progress.style.strokeDasharray = circumference;

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timeDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  let offset = circumference - (timeLeft / totalTime) * circumference;
  progress.style.strokeDashoffset = offset;
}

function startTimer() {
  if (running) return;
  running = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      running = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = totalTime;
  running = false;
  updateDisplay();
}

updateDisplay();
