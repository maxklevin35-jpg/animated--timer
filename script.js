let totalTime = 60;
let timeLeft = totalTime;
let timer = null;
let running = false;

// 🎵 Music setup
const music = new Audio("music.mp3");
music.loop = true;
music.volume = 0.4;

const timeDisplay = document.getElementById("time");
const progress = document.getElementById("progress");

const radius = 90;
const circumference = 2 * Math.PI * radius;
progress.style.strokeDasharray = circumference;

// ⏱ Update UI
function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timeDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  let offset = circumference - (timeLeft / totalTime) * circumference;
  progress.style.strokeDashoffset = offset;
}

// 🔥 Set time
function setTime(seconds) {
  clearInterval(timer);
  totalTime = seconds;
  timeLeft = seconds;
  running = false;

  updateDisplay();
}

// ▶ Start
function startTimer() {
  clearInterval(timer);

  music.play(); // 🎵 start music

  running = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      running = false;

      music.pause();
      music.currentTime = 0;

      alert("Time's up!");
    }
  }, 1000);
}

// ⏸ Pause
function pauseTimer() {
  clearInterval(timer);
  running = false;

  music.pause();
}

// 🔄 Reset
function resetTimer() {
  clearInterval(timer);
  timeLeft = totalTime;
  running = false;
  updateDisplay();

  music.pause();
  music.currentTime = 0;
}

// 🔘 Toggle music
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Init
updateDisplay();
