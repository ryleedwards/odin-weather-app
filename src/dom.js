import { format } from 'date-fns';

const currentTemperature = document.querySelector('p.current-temperature');
const city = document.querySelector('p.city');
const forecastContainer = document.querySelector('div.container-forecast');

function displayCurrentWeather(jsonWeather, units) {
  console.log(jsonWeather);
  //temperature
  if (units == 'imperial')
    currentTemperature.textContent = `${jsonWeather.current.temp_f}°F`;
  if (units == 'metric')
    currentTemperature.textContent = `${jsonWeather.current.temp_c}°C`;
  //city
  city.textContent = jsonWeather.location.name;
}

function displayForecast(jsonForecast, units) {
  console.log(jsonForecast);
  jsonForecast.forecast.forecastday.forEach((forecastDay) => {
    renderForecastDay(forecastDay, units);
  });
}

function renderForecastDay(forecastDay, units) {
  // create elements
  // forecast-day container
  const divForecastDay = document.createElement('div');
  divForecastDay.classList.add('forecast-day');
  // day of week e.g. 'Mon' for Monday
  const pDayName = document.createElement('p');
  pDayName.classList.add('day-name');
  // temp container
  const divForecastTemps = document.createElement('div');
  divForecastTemps.classList.add('forecast-temps');
  // high temp
  const pHighTemp = document.createElement('p');
  pHighTemp.classList.add('high-temperature');
  // low temp
  const pLowTemp = document.createElement('p');
  pLowTemp.classList.add('low-temperature');

  // append elements to parent containers
  divForecastTemps.appendChild(pHighTemp);
  divForecastTemps.appendChild(pLowTemp);

  divForecastDay.appendChild(pDayName);
  divForecastDay.appendChild(divForecastTemps);
  // append forecast-day to its parent container-forecast
  forecastContainer.appendChild(divForecastDay);

  // assign day of week value
  const dayOfWeek = format(new Date(forecastDay.date), 'EEE');
  pDayName.textContent = dayOfWeek;
  // load temp as celsius value
  if (units == 'metric') {
    pHighTemp.textContent =
      Math.round(forecastDay.day.maxtemp_c).toString() + '°/';
    pLowTemp.textContent =
      Math.round(forecastDay.day.mintemp_c).toString() + '°';
  }
  if (units == 'imperial') {
    pHighTemp.textContent =
      Math.round(forecastDay.day.maxtemp_f).toString() + '° / ';
    pLowTemp.textContent =
      Math.round(forecastDay.day.mintemp_f).toString() + '°';
  }
}

export { displayCurrentWeather, displayForecast };
