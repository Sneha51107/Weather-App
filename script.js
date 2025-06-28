document.getElementById("getBtn").addEventListener("click", function()
{
    const city = document.getElementById("cityInput").value.trim();
     if(!city)
     {
        alert("Please enter a city name");
        return;
     }
     const apiKey = "a3522873d22fd017cec56c512a4d6461";
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const name = data.name;
      const temp = Math.round(data.main.temp);
      const condition = data.weather[0].main;

      document.querySelector(".weather-row").innerHTML = `
        <p>📍 ${name}</p>
        <p>${temp}°C</p>
        <p>${condition}</p>
      `;
    })
    .catch((error) => {
      alert(error.message);
    });
});