const apiKey = "542a37733f18e1ddc2a0c46956f55cf7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
check("khulna");
searchBtn.addEventListener("click", ()=>{
    check(searchBox.value);
})

async function check(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "image/clouds.png";
    }
    else if(data.weather[0].main =="Clear")
    {
        weatherIcon.src = "image/sun.png";
    }
    else if(data.weather[0].main =="Rain")
    {
        weatherIcon.src = "image/heavy-rain.png";
    }
    else if(data.weather[0].main =="Drizzle")
    {
        weatherIcon.src = "image/drizzle.png";
    }
    else if(data.weather[0].main =="Mist")
    {
        weatherIcon.src = "image/haze.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}