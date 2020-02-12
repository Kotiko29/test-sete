/*jshint esversion: 6 */

function hello() {
  console.log('hello');
}

let btn = document.querySelector('#btn');
console.log(btn.clientWidth);
btn.onclick = hello;

let sowModal = document.querySelector('#modal-show');

function show() {
  let modal = document.querySelector('.modal');
  // modal.hidden = true;
  modal.style.display = "block";
}

sowModal.onclick = show;
