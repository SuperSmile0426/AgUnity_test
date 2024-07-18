"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById('getWeather')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const location = document.getElementById('location').value;
    const apiKey = '2a892ce39813a6cc6fd73e39782f072a';
    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = yield response.json();
    displayWeather(data);
}));
function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (weatherDisplay) {
        weatherDisplay.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    }
}
