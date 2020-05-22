// 1. contains 3 sections (one for each of the following)

// ================================================================================================================
// 2. displays the current time

const displayCurrentTime = document.getElementById('time');

function currentTime(i) {
  if (i < 10 ) {
    i = '0' + i;
  }
  return i;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = currentTime(m);
  s = currentTime(s);

  displayCurrentTime.innerText = `${h}:${m}:${s}`;

  setTimeout(function() {
    startTime()
  }, 1);
}
startTime();

// ================================================================================================================
// 3. contains a start/stop button with a stopwatch which starts at 00:00 and continues until the user clicks "stop"

let stopwatch = document.getElementById('stopwatch');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let clear = document.getElementById('reset');
let seconds = 0;
let minutes = 0;
let time;

function add() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  
  stopwatch.textContent = 
  (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
}

function timer() {
  time = setTimeout(add, 1000);
}

start.onclick = timer;

stop.onclick = function() {
  clearTimeout(time);
}


clear.onclick = function() {
  stopwatch.textContent = "00:00";
  seconds = 0; minutes = 0;
}

// ================================================================================================================
// 4. contains a timer where the user can enter a number of seconds, click start and the timer counts down to 0. 
// There should be a sound announcingthe end as well.

const startButton = document.getElementById('start-countdown');
const countdownTimer = document.getElementById('countdownTimer');

function submitUserTime(event){
  event.preventDefault();
  document.submitForm.reset();
}

function startCountdown() {
  // start countdownTimer
  let COUNTDOWN_TIME = document.getElementById('countdown-second').value * 1000;
  countdownTimer.innerText = COUNTDOWN_TIME / 1000;
  let seconds = COUNTDOWN_TIME - 1000;
  const countdown = setInterval(function () {
    if (seconds < 1) {
      clearInterval(countdown);
    }
    countdownTimer.innerText = seconds / 1000;
    seconds -= 1000;
  }, 1000);
}
