// Attendiamo il completamento del caricamento della pagina
window.addEventListener("load", function () {
  // Troviamo l'elemento del loader
  var loader = document.querySelector(".loader-wrapper");

  // Aggiungiamo una classe "fadeOut" per animare il fade-out del loader
  loader.classList.add("fadeOut");

  // Dopo un certo periodo di tempo (ad esempio 1 secondo), rimuoviamo completamente il loader dal DOM
  setTimeout(function () {
    loader.style.display = "none";

    // Ripristiniamo lo scrolling e mostreremo la scrollbar
    document.body.classList.remove("loading");
  }, 1000);
});

// Blocca lo scrolling quando il loader è attivo
document.body.classList.add("loading");
