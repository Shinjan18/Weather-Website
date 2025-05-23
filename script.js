const apiKey = "4a39def16771fd4832ec382c0e6d4c63";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//for searching the city
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

//accessing the weather images
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  //now to display the data in the elements
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  //changing the image of weather based upon the conditions
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Humidity"){
    weatherIcon.src = "images/humidity.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
  }
  //for displaying the ui when we click search 
  document.querySelector('.weather').style.display = "block";
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})