import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMins = document.querySelector('span[data-minutes]');
const timerSecs = document.querySelector('span[data-seconds]');
let targetDate = 0;
//let intervalId = 0;
startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', () => { timer.start() });

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < options.defaultDate) {
            Notiflix.Notify.failure("Please choose a date in the future");
            return;
        };

        targetDate = selectedDates[0];
        startBtn.removeAttribute('disabled');
    },
}

flatpickr("#datetime-picker", options);

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const deltaTime = targetDate - Date.now();
            const time = convertMs(deltaTime);
            updateClockface(deltaTime)
            console.log(time);
            if (deltaTime < 1000) {
            clearInterval(this.intervalId);   
            }
        }, 1000)
        
    }
};

function updateClockface(deltaTime) {
    timerDays.textContent = convertMs(deltaTime).days;
    timerHours.textContent = convertMs(deltaTime).hours;
    timerMins.textContent = convertMs(deltaTime).minutes;
    timerSecs.textContent = convertMs(deltaTime).seconds;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}