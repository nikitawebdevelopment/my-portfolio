const apiKey = "ce1275b0e22b5b9041a33f1a32bd0bb6";

const getWeather = async() => {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        document.getElementById("result").innerHTML = "❌ City not found!";
        return;
    }

    document.getElementById("result").innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>🌤 Weather: ${data.weather[0].description}</p>
    <p>🌡 Temperature: ${data.main.temp} °C</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
  `;
};