function formatDate() {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
hours = `0${hours}`;
  }
  let minutes = now.getMinutes ();
  if (minutes < 10) {

minutes = `0${hours}`;

  }
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${day}, ${date} ${hours}:${minutes} `;
}

formatDate();

function showTemperature (response)  {

  let temperature = Math.round(response.data.main.temp);
  document.getElementById("big-temperature").innerHTML = `${temperature}°`;
  let searchResult = document.querySelector("#where-to-next");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchResult.value}`;
let weatherDescription = response.data.weather[0].description;
  document.getElementById("weather-description").innerHTML = weatherDescription;
console.log(response.data);

}

function searchWeather (event) {
  event.preventDefault();
  
  // let temperature = Math.round(response.data.main.temp);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = document.querySelector("#where-to-next").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  // let message = `It is ${temperature} degrees in ${city}`;
 //  let h1 = document.querySelector("h1");
  //document.getElementById("big-temperature").innerHTML = message;
 
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchWeather);

