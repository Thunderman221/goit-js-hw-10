import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const datetimePicker = document.querySelector('#datetime-picker');
  const startButton = document.querySelector('#start-button');
  let userSelectedDate = null;
  let countdownInterval = null;

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];

      if (userSelectedDate < new Date()) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    },
  };

  flatpickr(datetimePicker, options);

  startButton.addEventListener('click', () => {
    console.log('Timer started');
    startButton.disabled = true;
    datetimePicker.disabled = true;

    countdownInterval = setInterval(() => {
      const now = new Date();
      const timeLeft = userSelectedDate - now;
      console.log('Time left:', timeLeft);

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.querySelector('[data-days]').textContent = '00';
        document.querySelector('[data-hours]').textContent = '00';
        document.querySelector('[data-minutes]').textContent = '00';
        document.querySelector('[data-seconds]').textContent = '00';
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      console.log({ days, hours, minutes, seconds });
      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent =
        addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent =
        addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent =
        addLeadingZero(seconds);
    }, 1000);
  });

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
      days: Math.floor(ms / day),
      hours: Math.floor((ms % day) / hour),
      minutes: Math.floor(((ms % day) % hour) / minute),
      seconds: Math.floor((((ms % day) % hour) % minute) / second),
    };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
});
