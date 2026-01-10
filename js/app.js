import { fetchWeather } from "./weather.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!navigator.geolocation) {
    showError("Géolocalisation non supportée");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      fetchWeather(pos.coords.latitude, pos.coords.longitude)
        .then(showUI); // 🔥 animation après météo
    },
    () => {
      showError("Autorisez la localisation");
    }
  );
});

function showUI() {
  document.getElementById("loader").style.display = "none";
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
  });
}

function showError(message) {
  document.getElementById("city").textContent = message;
}
