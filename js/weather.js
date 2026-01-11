import { getWeatherIcon } from "./icons.js";
import { renderLottie } from "./lottie.js";

const API_KEY = "28cce13f0350715b79e723f7b741c0bd";

let lastIconPath = null;

export async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Weather API error");
  }

  const data = await res.json();

  // 🌍 Ville
  document.getElementById("city").textContent =
    data.name.toUpperCase();

  // 🌡 Température
  document.getElementById("temp").textContent =
    Math.round(data.main.temp) + "°";

  // 💨 Vent (m/s → km/h)
  const windKmh = Math.round(data.wind.speed * 3.6);
  document.getElementById("wind-value").textContent = windKmh;

  // 🌤 Icône météo (seulement si elle change)
  const iconPath = getWeatherIcon(
    data.weather[0].main,
    data.weather[0].icon
  );

  if (iconPath !== lastIconPath) {
    await renderLottie(iconPath);
    lastIconPath = iconPath;
  }
}
