let city = sessionStorage.getItem('city');

const getWeather = (city) => {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb5fc195bdc011c6a758f88bf3f3afe1&units=metric`, {
      method: "GET",
    }).then(response => response.json())
    .then(json => {
      let temperature = json.main.temp;
      let city = json.name;
      let feel = json.main.feels_like;

      document.querySelector('#ville').textContent = city;
      document.querySelector('#temperature_label').textContent = temperature;
      document.querySelector('#ressenti_label').textContent = feel;

    })
    .catch(err => console.log("Erreur :" + err));
}

getWeather(city);