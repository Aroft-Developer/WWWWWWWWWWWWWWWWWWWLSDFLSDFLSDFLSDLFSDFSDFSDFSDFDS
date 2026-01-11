import { fetchWeather } from "./weather.js";

let coords = null;
let uiShown = false;

document.addEventListener("DOMContentLoaded", () => {
  if (!navigator.geolocation) {
    showError("Location not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      coords = pos.coords;

      // 🔥 Première récupération
      await fetchWeather(coords.latitude, coords.longitude);

      // 🔥 Afficher l’UI UNE SEULE FOIS
      if (!uiShown) {
        showUI();
        uiShown = true;
      }

      // 🔁 Actualisation invisible toutes les 60s
      setInterval(() => {
        fetchWeather(coords.latitude, coords.longitude);
      }, 60000);
    },
    () => {
      showError("Allow your location to see the weather");
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
  document.getElementById("loader").style.display = "none";
  document.getElementById("city").textContent = message;
}
