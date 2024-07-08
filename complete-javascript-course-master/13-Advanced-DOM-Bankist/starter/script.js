'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

//Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // get the postion of the section 1
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // we get scroll position with that

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //OLD SCHOLL WAY
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //New way more easly
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href'); // to get the href to do a smoth scroll

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event listener to common parent element
//2. Determin what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // THIS IS TO KNOW WHERE THE EVENT ORIGINATED
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// // SELECTING, CREATING AND DELETING ELEMENTS

// console.log(document.documentElement); // documentElement applies to all the page
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection); //return a node list

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button'); // returns a HTML Collection, is always updated when we remove in this example a button, this collection updates immediatly
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); // return a HTML collection too

// // Creating and inserting elements
// // .insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message); //first child of the header
// // header.append(message); //last child of the header
// header.append(message); //last child of the header
// // header.append(message.cloneNode(true)); //clone the message and append twice the same message

// // header.before(message); //before the header
// // header.after(message); //after the header

// //Deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove(); // new way to remove

//     message.parentElement.removeChild(message); //old way to remove
//   });

// // STYLES
// //inline styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// //get the styles of a elem

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// // with the line we have below we can change all the style of a page with a simple line, in this case we go for root, elem, style, set proprety with the var of css and set all the color to orangered
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributtes ex: p, a, div all of the elem of html
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// console.log(logo.className);

// // alt and src and className are standart and this works because of this, but "se criarmos uma propriedade nova que não seja standart não irá retornar undefined!"

// logo.alt = 'Beautiful minimalist logo'; // this CHANGE!

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer')); // Conseguimos assim obter o mesmo que nos standard, e dar return ao que está dentro da propriedade
// logo.setAttribute('company', 'Bankist'); // Cria o atributo company dentro de logo com o valor de bankist

// console.log(logo.src); // returns the absolute URL if we want just de src we need the get attribute
// console.log(logo.getAttribute('src')); // Desta forma RELATIVE FORM

// //É igual as img os links, o primeiro irá retornar o absoluto e o segundo relativo, pode ser util muitas vezes o relativo tambem
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //DATA attributes
// console.log(logo.dataset.versionNumber); // we use camel case because is version_number = versionNumber

// //Classes
// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //DONT USE THIS THIS WILL OVERWRITE ALL OF THE CLASSES!
// logo.className = 'jonas'

//Types of eventes and Handlers

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   // h1.removeEventListener('mouseenter', alertH1); // we need to export the function from inside the add eventlistener and then we remove the event
// };

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

//EVENT PROPAGATION

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget); // return where event handler was attached
//   console.log(e.currentTarget === this); // IMPORTANT!

//   //Stop Propagation
//   e.stopPropagation(); //NOT A GOOD IDEA STOP PROPAGATION
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   }
// true
// ); // SETTING TO TRUE MAKES THIS STOP BUBLE PHASE AND GOES FOR CAPTURE PHASE, what will make it happen first because the capture phase is first and then is the bubble phase  BUT IS A OLD THING TO DO, DONT USE THE CAPTURE PHASE WITH TRUE
