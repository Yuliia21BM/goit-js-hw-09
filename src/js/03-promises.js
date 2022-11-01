import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

let intervalCounter = 0;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  intervalCounter = 0;

  const formData = new FormData(e.target);
  const { delay, step, amount } = Object.fromEntries(formData);

  let countertDeley = +delay;
  let counterPosition = 0;

    const intervalId = setInterval(() => {
      intervalCounter += 1;
      if (intervalCounter === +amount) {
        clearInterval(intervalId);
      };
      if (intervalCounter === 1) {
        counterPosition += 1;
        createPromise(counterPosition, countertDeley).then(result => result).catch(result => result);
        return
      } else {
        counterPosition += 1;
        countertDeley += +step;
        return createPromise(counterPosition, countertDeley).then(result => result).catch(result => result);
      }
    }, 0);
}

function createPromise(position, delay) {
  const promis = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay)
  })
  return promis;
}