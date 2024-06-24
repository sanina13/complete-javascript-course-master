'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');
const rollDiceEl = document.querySelector('.btn--roll');
const holdDiceEl = document.querySelector('.btn--hold');
const newGameEl = document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//current score
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//reset
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//random dice
rollDiceEl.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `dice-${randomDice}.png`;
    diceEl.classList.remove('hidden');

    if (randomDice !== 1) {
      //add dice to current score
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

holdDiceEl.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      //player win
      playing = false;

      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

newGameEl.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  if (!playing) {
    playing = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
  }
  activePlayer = 0;
  diceEl.classList.add('hidden');
});
