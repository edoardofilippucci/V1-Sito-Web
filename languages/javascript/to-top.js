// Ottieni il pulsante e il corpo del documento
var scrollToTopButton = document.getElementById("scrollToTopButton");
var body = document.body;

// Aggiungi un gestore di eventi al pulsante
scrollToTopButton.addEventListener("click", function () {
  body.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Aggiungi un gestore di eventi per controllare quando mostrare/nascondere il pulsante
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    // Mostra il pulsante quando la pagina è stata scrollata di almeno 200px
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
