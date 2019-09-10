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





// if (localStorage.getItem('text_input')) {
//   text_input.value = localStorage.getItem('text_input')
// }

// text_input.addEventListener('keyup', (e) => {
//   localStorage.setItem('text_input', e.target.value);
// })


const text_input = document.querySelector('.form__text_input--js');
const save_button = document.querySelector('.form__button--save-js');
const load_button = document.querySelector('.form__button--load-js');
const clear_button = document.querySelector('.form__button--clear-js');


save_button.addEventListener('click', (e) => {
  //e.preventDefault();
  localStorage.setItem('text_input', text_input.value)
})

load_button.addEventListener('click', (e) => {
  e.preventDefault();
  text_input.innerHTML = localStorage.getItem('text_input', text_input.value)
})

clear_button.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
})


