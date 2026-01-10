import { getWeatherIcon } from "./icons.js";
import { renderLottie } from "./lottie.js";

const API_KEY = "28cce13f0350715b79e723f7b741c0bd";

export async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Erreur météo");
  }

  const data = await res.json();

  document.getElementById("city").textContent = data.name.toUpperCase();
  document.getElementById("temp").textContent =
    Math.round(data.main.temp) + "°";

  const iconPath = getWeatherIcon(
    data.weather[0].main,
    data.weather[0].icon
  );

  await renderLottie(iconPath); // 🔥 attendre l’icône
}
