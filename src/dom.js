const currentTemperature = document.querySelector('p.current-temperature');
const city = document.querySelector('p.city');

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

export { displayCurrentWeather };
