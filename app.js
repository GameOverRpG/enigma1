function startTimer(duration) {
    let timerDisplay = document.getElementById("timer");
    let timer = duration, hours, minutes, seconds;
    let intervalId;
  
    function updateDisplay() {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    }
  
    function saveTimerToLocalStorage() {
      localStorage.setItem("savedTimer", timer);
    }
  
    function loadTimerFromLocalStorage() {
      let savedTimer = localStorage.getItem("savedTimer");
      if (savedTimer) {
        timer = parseInt(savedTimer);
        updateDisplay();
        startInterval();
      }
    }
  
    function startInterval() {
      intervalId = setInterval(function () {
        updateDisplay();
  
        if (--timer < 0) {
          clearInterval(intervalId);
          localStorage.removeItem("savedTimer");
          timer = duration;
          saveTimerToLocalStorage();
          startInterval();
        } else {
          saveTimerToLocalStorage();
        }
      }, 1000);
    }
  
    function handleBeforeUnload() {
      saveTimerToLocalStorage();
    }
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    loadTimerFromLocalStorage();
  }
  
  // Define o tempo total em segundos (24 horas = 86400 segundos)
  const totalSeconds = 86400;
  startTimer(totalSeconds);
  