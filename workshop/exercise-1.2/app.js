// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)


const body = document.querySelector('body');
const result = document.getElementById('result');
const timeToClick = document.getElementById('time');

let hasWon = false;
let timeleft = Math.floor(Math.random() * 3 + 2);;

function clickEvent() {
  hasWon = true;
  document.querySelector('p').hidden = true;
  result.innerText = 'You Win!';
  clearInterval(countdown);
  body.removeEventListener('click', clickEvent);
}

let countdown = setInterval(function(){
  timeleft--;

  if (timeleft <= 0) {
    clearInterval(countdown);
  } else {
    document.getElementById("time").innerHTML = timeleft;
  }

  console.log(timeleft);
}, 1000);

document.getElementById('time').innerText = timeleft;

setTimeout(function () {
  console.log('time up');

  if (!hasWon) {
    document.querySelector('p').hidden = true;
    result.innerText = 'You Lose!';
    body.removeEventListener('click', clickEvent);
  }

}, timeleft * 1000);

body.addEventListener('click', clickEvent);