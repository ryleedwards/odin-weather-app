const currentTemperature = document.querySelector('p.current-temperature');
const city = document.querySelector('p.city');

function displayCurrentWeather(jsonWeather, units) {
  if (units == 'imperial')
    currentTemperature.textContent = `${jsonWeather.current.temp_f}°F`;
  if (units == 'metric')
    currentTemperature.textContent = `${jsonWeather.current.temp_c}°C`;
  city.textContent = jsonWeather.location.name;
}

export { displayCurrentWeather };
