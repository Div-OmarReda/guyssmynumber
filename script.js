'use strict';

const invaild = function () {
  const invaild1 = new Audio('invaild.mp3');
  invaild1.play();
};

const fail = function () {
  const fail1 = new Audio('fail.mp3');
  fail1.play();
};

const fart = function () {
  const fart1 = new Audio('fart.mp3');
  fart1.play();
};
const getHour = new Date().getDate();
document.querySelector(
  `.pick`
).textContent = `Last update ${new Date().getMonth()}/${getHour}/${new Date().getFullYear()}`;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector('.message').textContent = `❌ invaild Number`;
    invaild().play();
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🏆 Corrent Answer`;
    playSound();
    document.querySelector(`.attempt`).textContent = `After the ${
      20 - score
    }th attempt`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    document.querySelector(`.attempt`).style.opacity = `1`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  } else if (guess > secretNumber) {
    document.querySelector(`.message`).textContent = `📈 Too High  `;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `📉 Too low  `;
    score--;
    document.querySelector(`.score`).textContent = score;
  }

  if (score === 0 || score < 0) {
    document.querySelector(`.message`).textContent = `💔 You lost at the Game`;

    document.querySelector(`body`).style.backgroundColor = `#631a15`;
    document.querySelector(`.score`).textContent = 0;
    fail().play();
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ` `;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.attempt`).style.opacity = `0`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Guess My Number!`;
  fart().play();
});
const body = document.querySelector(`.bl`);
document.querySelector(`.yes`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  body.classList.toggle('black');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = `0`;
  highscore = 0;
  if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.attempt`).style.opacity = `0`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  headerEl.classList.toggle('aru-display');
  document.querySelector(`.message`).textContent = `Guess My Number!`;
});
const headerEl = document.querySelector(`.aru-boxs`);
document.querySelector(`.reset`).addEventListener(`click`, function () {
  headerEl.classList.toggle('aru-display');

  body.classList.toggle('black');
  fart().play();
});

document.querySelector(`.no`).addEventListener(`click`, function () {
  headerEl.classList.toggle('aru-display');

  body.classList.toggle('black');
  fart().play();
});

const playSound = function () {
  const sound20 = new Audio('win.mp3');
  sound20.play();
};
