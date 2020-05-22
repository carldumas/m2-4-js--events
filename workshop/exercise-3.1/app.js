// # The Events Workshop
// ## Exercise 3.1 - Buttons!!

const mainDiv = document.getElementById('main');

// When the user clicks a button it should become green.
function turnGreen(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.add('green');
}

// Write an app that generates 20 red buttons.
for (let i = 1; i <= 20; i++) {
  const button = document.createElement('button');
  button.innerText = i;
  button.id = `btn-${i}`;
  mainDiv.appendChild(button);

  button.addEventListener('click', turnGreen);
}