async function getCurrentWeather(location) {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getForecast(location, days) {
  if (days > 3) {
    return;
  }
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
