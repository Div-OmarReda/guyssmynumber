'use strict';

const invaild = new Audio('invaild.mp3');
const fail = new Audio('fail.mp3');
const sure = new Audio('record.mp3');
const fart = new Audio('fart.mp3');
const sound20 = new Audio('win.mp3');

const soundTrack = function (sound) {
  sound.play();
};

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
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
    displayMessage(`❌ invaild Number`);
    soundTrack(invaild).play();
  } else if (guess === secretNumber) {
    displayMessage(`🏆 Corrent Answer`);
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
    soundTrack(sound20).play();
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.message`).textContent =
      guess > secretNumber ? '📈 Too High  ' : '📉 Too low  ';
  }
  // } else if (guess > secretNumber) {
  //   document.querySelector(`.message`).textContent = '📈 Too High  ';
  //   score--;
  //   document.querySelector(`.score`).textContent = score;
  // } else if (guess < secretNumber) {
  //   document.querySelector(`.message`).textContent = '📉 Too low  ';
  //   score--;
  //   document.querySelector(`.score`).textContent = score;
  // }

  if (score === 0 || score < 0) {
    displayMessage(`💔 You lost at the Game`);

    document.querySelector(`body`).style.backgroundColor = `#631a15`;
    document.querySelector(`.score`).textContent = 0;
    soundTrack(fail).play();
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
  displayMessage(`Guess My Number!`);
  soundTrack(fart).play();
});
const body = document.querySelector(`.bl`);
document.querySelector(`.yes`).addEventListener(`click`, function () {
  document.querySelector(`.hidden`).classList.remove(`overlay`);
  const guess = Number(document.querySelector(`.guess`).value);

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
  displayMessage(`Guess My Number!`);

  soundTrack(fart).play();
});
const headerEl = document.querySelector(`.aru-boxs`);
document.querySelector(`.reset`).addEventListener(`click`, function () {
  headerEl.classList.toggle('aru-display');
  document.querySelector(`.hidden`).classList.add(`overlay`);

  soundTrack(sure).play();
});

document.querySelector(`.no`).addEventListener(`click`, function () {
  headerEl.classList.toggle('aru-display');

  document.querySelector(`.hidden`).classList.remove(`overlay`);
  soundTrack(fart).play();
});

const overlay = document.querySelector(`.hidden`);

overlay.addEventListener(`click`, function () {
  headerEl.classList.toggle('aru-display');
  document.querySelector(`.hidden`).classList.remove(`overlay`);
});
