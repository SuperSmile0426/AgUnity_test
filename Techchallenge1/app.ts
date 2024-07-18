document.getElementById('getWeather')?.addEventListener('click', async () => {
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const apiKey = '2a892ce39813a6cc6fd73e39782f072a';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();
    displayWeather(data);
});

function displayWeather(data: any) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (weatherDisplay) {
        weatherDisplay.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    }
}
