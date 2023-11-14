const container = document.querySelector(".container-slider");
document.querySelector(".slider1").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);
});
