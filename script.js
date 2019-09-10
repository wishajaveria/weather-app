function weatherApp(){
    $(".search-weather").keyup(function(event){
        if(event.keycode === 13){
            $("#span").click();
        }
    })
}
function getWeather(){
    document.querySelector("#weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
}
$.ajax({
    url:
   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fb7296206e736a3c4c5c1e8718503389&units=metric`,
   success: function(data){
    console.log(data);
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".degree>span").innerHTML = Math.round(data.main.degree);
    document.querySelector(".weather-description").innerHTML = data.weather[0].main;
    document.querySelector(".min").innerHTML = Math.round(data.main.degree_min);
    document.querySelector(".max").innerHTML = Math.round(data.main.degree_max);
    document.querySelector("#weather-icons").innerHTML = "<img  class = 'bg-img' src='http://openweathermap.org/img/w/" + data.weather[0].weather-icons + ".png'>";
    let time = new Date();
    let sunrise = new Date(data.sys.sunrise * 1000);
    let sunset = new Date(data.sys.sunset * 1000);
    let iconName = data.weather[0].main;
    if (iconName === `Clouds`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="fas fa-cloud"></i>`;
      document.body.style.backgroundImage = "url('image\cloud.jpg')";
    }
     else if (iconName === `Rain`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="fas fa-cloud-showers-heavy"></i>`;
        document.body.style.backgroundImage = "url('image\rain.jpg')";
      }
      else if (iconName === `smoke`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="fas fa-smog"></i>`;
        document.body.style.backgroundImage = "url('image\smokey.jpg')";
      }
      else if (iconName === `mist`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="fas fa-cloud"></i>`;
        document.body.style.backgroundImage = "url('image\mist.jpg')";
      }
      else if (iconName === `fog`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="wi wi-fog"></i>`;
        document.body.style.backgroundImage = "url('image\fog.jpg')";
      }
      else if (iconName === `Snow`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="fas fa-snowman"></i>`;
        document.body.style.backgroundImage = "url('image\snow.jpg')";
        document.body.style.color="white";
      } 
      else if (iconName === `Sunny`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="fas fa-sun"></i>`;
        document.body.style.backgroundImage = "url('image\sunny.jpg')";
      }
      else if (iconName === `Haze`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="wi wi-day-haze"></i>`;
        document.body.style.backgroundImage = "url('image\haze.jpg')";
  
      }
      else if (iconName === `Clear`) {
        document.querySelector("#weather-icons").innerHTML = `<i class="wi wi-night-clear"></i>`;
        document.body.style.backgroundImage = "url('image\clear.jpg')";
  
      }
      else {
        document.querySelector("#weather-icons").innerHTML = `Loading icon.....`;
      }
    },
      error: function (error) {
        console.log(error);
      }

})

