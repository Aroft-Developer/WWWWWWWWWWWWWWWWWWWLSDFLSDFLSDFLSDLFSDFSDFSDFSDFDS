export function getWeatherIcon(main, iconCode) {
  const isNight = iconCode.endsWith("n");

  if (isNight) {
    switch (main) {
      case "Clear":
        return "/animations/moon.json";
      case "Clouds":
        return "/animations/moon-cloud.json";
      case "Rain":
      case "Drizzle":
        return "/animations/moon-rain.json";
      case "Thunderstorm":
        return "/animations/storm.json";
      case "Snow":
        return "/animations/snow.json";
      case "Mist":
      case "Fog":
      case "Haze":
        return "/animations/fog.json";
      default:
        return "/animations/moon.json";
    }
  } else {
    switch (main) {
      case "Clear":
        return "/animations/sun.json";
      case "Clouds":
        return "/animations/clouds.json";
      case "Rain":
      case "Drizzle":
        return "/animations/rain-cloud.json";
      case "Thunderstorm":
        return "/animations/storm.json";
      case "Snow":
        return "/animations/snow.json";
      case "Mist":
      case "Fog":
      case "Haze":
        return "/animations/fog.json";
      default:
        return "/animations/clouds.json";
    }
  }
}
