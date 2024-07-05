'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SELECTING, CREATING AND DELETING ELEMENTS

console.log(document.documentElement); // documentElement applies to all the page
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection); //return a node list

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // returns a HTML Collection, is always updated when we remove in this example a button, this collection updates immediatly
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // return a HTML collection too

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); //first child of the header
// header.append(message); //last child of the header
header.append(message); //last child of the header
// header.append(message.cloneNode(true)); //clone the message and append twice the same message

// header.before(message); //before the header
// header.after(message); //after the header

//Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); // new way to remove

    message.parentElement.removeChild(message); //old way to remove
  });
