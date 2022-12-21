let lon;
let lat;
let temperatur = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
  

//Funktion som blir triggad när ett speciellt "event" händer.

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API url och API id som jag hämtade
      const api = "dc80e0c7ddf147a89f1e520ae4fb5aea";
      const information = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dc80e0c7ddf147a89f1e520ae4fb5aea`;
      
      //Tar emot API information och returnerar en json fil 
      fetch(information)
        .then((svar) => {
          return svar.json();
        })
        .then((info) => {
          console.log(info);
          temperatur.textContent = 
         //Avrundar ner. Vore ceil om uppåt
          Math.floor(info.main.temp - kelvin) + "°C";
          summary.textContent = info.weather[0].description;
          loc.textContent = info.name + "," + info.sys.country;
          //Här ändras PNG bilden beroende på vilket väder det är
          //Med hjälp av innerHTML
          let icon1 = info.weather[0].icon;
          icon.innerHTML = 
          `<img src="03d.png" style= 'height:10rem'/>`;
        });
    });
  }
});