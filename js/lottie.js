import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

let dotLottieInstance = null;

export function renderLottie(src) {
  const canvas = document.getElementById("dotlottie-canvas");

  if (dotLottieInstance) {
    dotLottieInstance.destroy();
  }

  dotLottieInstance = new DotLottie({
    autoplay: true,
    loop: true,
    canvas,
    src
  });

  // 🔥 on résout immédiatement
  return Promise.resolve();
}
