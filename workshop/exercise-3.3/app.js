// # The Events Workshop

// ## Exercise 3.3 - Buttons, Here, There, Everywhere!

// You can copy the `HTML` file over, but I strongly recommend redoing the JS from scratch without looking at your previous answer as mush as possible.

// Building on exercise 3.1 and 3.2, write a program that places 20 buttons in the page that toggle from red to green but this time they are located in random positions on the screen.

// HINT:

// - You can use `position: absolute`, `top`, and `left` to control where the buttons are located.
// - You can use inline styles (eg. `node.style.position = 'absolute'`)


const mainDiv = document.getElementById('main');

function toggleColor(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement('button');
  button.innerText = i;
  button.id = `btn-${i}`;
  button.style.top = `${Math.random() * 75}vh`;
  button.style.left = `${Math.random() * 75}vw`;
  mainDiv.appendChild(button);

  button.addEventListener('click', toggleColor);
}