"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);


const text_input = document.querySelector('.input__box--js');

// if (localStorage.getItem('text_input')) {
//   text_input.value = localStorage.getItem('text_input')
// }

// text_input.addEventListener('keyup', (e) => {
//   localStorage.setItem('text_input', e.target.value);
// })

const save_button = document.querySelector('.input__save--js');


function save_input() {
  console.log('Hello..?!');
}

save_input()

save_button.addEventListener('keyup', (e) => {
  localStorage.setItem('text_input', e.target.value);
});

