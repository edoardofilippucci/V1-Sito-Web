const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const enteredCode = [];
let konamiActivated = false;

function checkKonamiCode(event) {
  enteredCode.push(event.key);

  if (
    enteredCode.join("").toLowerCase() === konamiCode.join("").toLowerCase()
  ) {
    if (konamiActivated) {
      konamiActivated = false;
      localStorage.setItem("konamiActivated", "false");
      document.getElementById("site-css").href = "./../css/style.css";
    } else {
      konamiActivated = true;
      localStorage.setItem("konamiActivated", "true");
      document.getElementById("konami-css").href = "./../css/retro.css";
    }
    enteredCode.length = 0;
  } else if (enteredCode.length >= 4) {
    const stopSequence = enteredCode.slice(-4).join("").toLowerCase();
    if (stopSequence === "stop") {
      konamiActivated = false;
      localStorage.setItem("konamiActivated", "false");
      document.getElementById("site-css").href = "./../css/style.css";
      enteredCode.length = 0;
    }
  }
}

const storedKonamiActivation = localStorage.getItem("konamiActivated");

// Controlla se il Konami Code è stato attivato precedentemente o se la scheda è nuova
if (storedKonamiActivation === "true" || storedKonamiActivation === null) {
  konamiActivated = true;
  localStorage.setItem("konamiActivated", "true");
  document.getElementById("konami-css").href = "./../css/retro.css";
} else {
  konamiActivated = false;
  localStorage.setItem("konamiActivated", "false");
  document.getElementById("site-css").href = "./../css/style.css";
}

window.addEventListener("beforeunload", function () {
  // Quando la scheda viene chiusa, reimposta il file CSS
  konamiActivated = false;
  localStorage.setItem("konamiActivated", "false");
  document.getElementById("site-css").href = "./../css/style.css";
});

document.addEventListener("keydown", checkKonamiCode);
