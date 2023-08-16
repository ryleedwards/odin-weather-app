import { displayCurrentWeather, displayForecast } from './dom';
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
  getWeather(location, 3);
});

async function getWeather(location, forecastDays) {
  if (forecastDays > 3) {
    throw new Error('Requested forecast days exceeds API limits');
  }
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=${forecastDays}&aqi=no&alerts=no`;
  const response = await fetch(url, { mode: 'cors' });
  if (response.status === 200) {
    let data = await response.json();
    displayCurrentWeather(data, units);
    displayForecast(data, units);
  }
  if (response.status === 400) {
    throw new Error('Invalid Location');
  }
}
