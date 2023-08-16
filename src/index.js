import { displayCurrentWeather } from './dom';
import './style.css';

const inputLocation = document.querySelector(
  'form.form-location>div>#location'
);
inputLocation.value = 'Austin, TX';
const locationWarning = document.querySelector('.location-validation-warning');

let units = 'metric';

const btnSubmitLocation = document.querySelector('.btn.submit-location');
btnSubmitLocation.addEventListener('click', (e) => {
  e.preventDefault();
  const location = inputLocation.value;
  getCurrentWeather(location);
});

async function getCurrentWeather(location) {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY} &q=${location}&aqi=no`;
    const response = await fetch(url, { mode: 'cors' });
    if (response.status === 200) {
      let data = await response.json();
      displayCurrentWeather(data, units);
    }
    if (response.status === 400) {
      throw new Error('Invalid Location');
    }
  } catch (err) {
    console.log(err);
  }
}
