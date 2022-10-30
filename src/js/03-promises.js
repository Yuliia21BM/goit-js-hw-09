import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
// const submitBtn = document.querySelector('button[type="submit"]');

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit)

let firstDelay = 0;
let dalayStep = 0;
let amount = 0;
let namberOfPromise = [];

function onFormInput(e) {
  if (e.target.name === "delay") {
    firstDelay = e.target.value;
  } else if (e.target.name === "step") {
    dalayStep = e.target.value;
  } else if (e.target.name === "amount") {
    amount = e.target.value;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(`${firstDelay}, ${dalayStep}, ${amount}`);

  setTimeout(() => {
    setInterval(() => {
    console.log('interval');
  }, dalayStep);
  }, firstDelay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
