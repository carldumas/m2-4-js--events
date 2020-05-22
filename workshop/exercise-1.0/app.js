// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>
// - By default, the <body> will be 0px tall. You can add a style in the
//   `<style>` tags to fill the viewport height.

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.querySelector('body');

body.addEventListener('click', function(){
  document.querySelector('body').innerHTML = '<h1>You finally clicked anywhere on the page - yay!!!!</h1>';
  const h1 = document.querySelector('h1');
  h1.style.color = 'red';
  body.removeEventListener('click', function(){
    return
  });
});