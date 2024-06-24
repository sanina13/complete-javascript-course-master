'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openMod = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeMod = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openMod);

btnCloseModal.addEventListener('click', closeMod);
overlay.addEventListener('click', closeMod);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeMod();
  }
});
