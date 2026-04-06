  let timeLeft = 0;
  let timerInterval = null;
  let isRunning = false;
  let defaultTime = 0;

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function updateDisplay() {
    document.getElementById("time").textContent = formatTime(timeLeft);
  }

  function setTime() {
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;

    const total = h * 3600 + m * 60 + s;

    if (total <= 0) {
      alert("시간을 1초 이상 설정하세요.");
      return;
    }

    clearInterval(timerInterval);
    isRunning = false;

    timeLeft = total;
    defaultTime = total;

    updateDisplay();
  }

  function startTimer() {
    if (isRunning) return;

    isRunning = true;

    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        alert("⏰ Time's up!");
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 0;
    defaultTime = 0;
    isRunning = false;

    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";

    updateDisplay();
  }

  updateDisplay();