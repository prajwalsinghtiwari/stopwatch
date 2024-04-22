let timer;
  let startTime;
  let elapsedTime = 0;
  let isRunning = false;

  function start() {
    if (!isRunning) {
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateTime, 100);
      isRunning = true;
      document.getElementById('startBtn').disabled = true;
      document.getElementById('pauseBtn').disabled = false;
      document.getElementById('resetBtn').disabled = false;
    }
  }

  function pause() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
  }

  function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
  }

  function updateTime() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }

  function updateDisplay() {
    const time = new Date(elapsedTime);
    const hours = time.getUTCHours();
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    const formattedTime = 
      (hours ? hours.toString().padStart(2, '0') + ':' : '') +
      (hours || minutes ? minutes.toString().padStart(2, '0') + ':' : '') +
      seconds.toString().padStart(2, '0');
    document.getElementById('time').innerText = formattedTime;
  }
 