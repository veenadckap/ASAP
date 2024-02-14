let btn=document.querySelector("button")
btn.addEventListener("click",getWeather)
function getWeather() {


    const cityInput = document.getElementById('cityInput').value;
    const apiKey ="1ac41d822f470089588e62f6ac6cbdce";

    if(cityInput ==0){
        alert("please enter the location")
    }
    else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
         
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `${data.main.temp} °C`;
            document.getElementById('humidity').innerHTML = `<i class="fa-solid fa-wind"></i><br><br>Humidity<br><br>${data.main.humidity}%`;
            document.getElementById('windSpeed').innerHTML = `<i class="fa-solid fa-cloud-bolt icon"></i><br><br>Wind Speed<br><br> ${data.wind.speed} m/s`;


            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.classList.remove('hidden');
            let content =document.querySelector(".container")
          
          

            if (data.main.temp > 26) {
                content.style.backgroundImage = 'url("image-1.png")';
            } else if (data.main.temp >= 20 && data.main.temp <= 25) {
                content.style.backgroundImage = 'url("image-2.png")';
            } else {
                content.style.backgroundImage = 'url("image-3.png")';
            }
        })
    }
}
