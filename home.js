const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const mainCard = document.querySelector(".main");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCard = document.querySelector(".weather");
const startBtn = document.querySelector(".start");

async function checkweather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  }
  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});

startBtn.addEventListener("click", () => {
  mainCard.style.display = "none";
  weatherCard.style.display = "flex";
});
