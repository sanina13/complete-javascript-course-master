'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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
//Page Navigation with EVENT DELEGATION

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

//Tabbed component

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  //MATCHING STRATEGY
  //GUARD CLAUSE
  if (!clicked) return;

  //Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  //Active content area
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// }); // We need a function because add event listener expects a function and then we put a function(e) with the event and call the outside function, we only do this because the outside function needs param!

//PASSINF "ARGUMENT" INTO HANDLER
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// //Sticky Navigation SCROLL EVENT IS PRETTY BAD FOR PREFORMANCE
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Sticky navigation: Intersection Observer API
// entries are the tresholds!! can be an array of tresholds
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; // GET THE SIZE OF THE NAV ELEM
const obsCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
};
const obsOptions = {
  root: null,
  treshold: 0,
  rootMargin: `-${navHeight}px`, // to make a margin and the navigation appears when is the size to him appears
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

//Revel sections
const allSection = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // after observe this will not trigger more the observer
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, //viweport
  treshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy loading Images Great for preformance

const imgTargets = document.querySelectorAll('.features__img');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    //remove blur after loading
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  treshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//Slider Component
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.overflow = 'visible';

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(curSlide);

//Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);

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

//DOM TRAVERSING
// const h1 = document.querySelector('h1');

// //Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log((h1.firstElementChild.style.color = 'white')); // ONLY THE FIRST ELEM
// console.log((h1.lastElementChild.style.color = 'orangered')); // ONLY THE Last ELEM

// //Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // THIS IS IMPORTANT, THIS FIND THE CLOSEST PARENT WITH THE CLASS HEADER
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// // CLOSEST IS THE CONTRARY OF QUERY SELECTOR, QUERY SELECTOR FIND CHILDERNS OF THE ELEM AND CLOSEST FIND PARENTS

// // Going sideways: siblings we can just acess the direct siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //all siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
