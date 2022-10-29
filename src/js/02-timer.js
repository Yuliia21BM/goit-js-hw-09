import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('input');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.setAttribute("disabled", false);
startBtn.addEventListener('click', onStartBtnClick)

let selectedTime = 0;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    if (new Date() <= selectedDates[0]) {
        startBtn.removeAttribute("disabled");
        selectedTime = selectedDates[0];
    } else {
        Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(inputEl, options);

function onStartBtnClick(e) {
    const timeDifference = selectedTime - new Date();
    const dividedTimeDifference = convertMs(timeDifference);
    days.textContent = dividedTimeDifference.days;
    hours.textContent = dividedTimeDifference.hours;
    minutes.textContent = dividedTimeDifference.minutes;
    seconds.textContent = dividedTimeDifference.seconds;
}

// padStart(2, '0')

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}