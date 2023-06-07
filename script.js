const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const localisation = document.querySelector(".localisation");
  
  function success(pos) {
    const crd = pos.coords;
  
    localisation.textContent = `Votre position acttuelle est de Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`;
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

let latitude = 0;
let longitude = 0;
const temperature = document.querySelector(".temperature");
const button = document.querySelector("#position");
button.addEventListener("click", () => {
navigator.geolocation.getCurrentPosition(success, error, options)
fetch(`https://weather.contrateumdev.com.br/api/weather?lat=${latitude}&lon=${longitude}`)
  .then((response) => {
    return response.json();
  })
.then((data) => temperature.textContent = data.main.temp + " °C");
}
);

