

let cityName = document.getElementById("cityName")

let temp = document.getElementById("temp")
let humidity = document.getElementById("humidity")

let lon = document.getElementById("lon")

let lat = document.getElementById("lat")





fetch('https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=56f59d26f82af4ee81cbc6068dc9100d')
  .then((response) => response.json())
  .then((data) => {
    
    cityName.innerText = data.name
    temp.innerText = data.main.temp
    humidity.innerText = data.main.humidity
    lon.innerText = data.coord.lon
    lat.innerText = data.coord.lat




  }

     
  
  
  );







let welcomeMessage = document.getElementById("welcomeMessage") 
welcomeMessage.innerText=localStorage.getItem("User");

