// # The Events Workshop

// ## Exercise 3.2 - Red to Green to Red again.

// You can copy the `HTML` file over, but I strongly recommend redoing the JS from scratch without looking at your previous answer as mush as possible.

// Building on exercise 3.1, write a program that places 20 buttons in the page, but this time clicking on a green button should turn it back to red.

const mainDiv = document.getElementById('main');

function toggleColor(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement('button');
  button.innerText = i;
  button.id = `btn-${i}`;
  mainDiv.appendChild(button);

  button.addEventListener('click', toggleColor);
}