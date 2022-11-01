import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit)

let firstDelay = 0;
let dalayStep = 0;
let amount = 0;
const promiseCounter = counterOfPromises();
const dilayCounter = counterOfDilay();

const counter = [];



function onFormInput(e) {
  if (e.target.name === "delay") {
    firstDelay = Number(e.target.value);
  } else if (e.target.name === "step") {
    dalayStep = Number(e.target.value);
  } else if (e.target.name === "amount") {
    amount = Number(e.target.value);
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  for (let i = 1; i <= amount; i += 1) {
    counter.push(i);
  }
  
  setTimeout(() => {
    counter.map(() => { createPromise(promiseCounter(), (dilayCounter() + firstDelay)).then(result => Notify.success(result)).catch(error => Notify.failure(error)) });
  }, firstDelay);
}

function counterOfPromises() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  }
}

function counterOfDilay() {
  let count = firstDelay + dalayStep;
  return function () {
    count += dalayStep;
    return count;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  }
  )
  return promise;
}

