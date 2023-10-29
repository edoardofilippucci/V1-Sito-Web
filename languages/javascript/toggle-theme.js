function setTheme() {
  var body = document.body;
  var themeToggle = document.querySelector(".theme-toggle");
  var currentIcon = themeToggle.querySelector("i");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    currentIcon.classList.add("fa-sun");
  } else {
    body.classList.remove("dark-theme");
    currentIcon.classList.add("fa-moon");
  }
}

function toggleTheme() {
  var body = document.body;
  var themeToggle = document.querySelector(".theme-toggle");
  var currentIcon = themeToggle.querySelector("i");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    currentIcon.classList.remove("fa-sun");
    currentIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-theme");
    currentIcon.classList.remove("fa-moon");
    currentIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

window.addEventListener("load", setTheme);
