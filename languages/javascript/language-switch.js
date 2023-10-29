// Oggetto delle traduzioni
var translations = {
  it: {
    home: "Home",
    services: "Servizi",
    contact: "Contattami",
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact Me",
  },
  fr: {
    home: "Accueil",
    services: "Services",
    contact: "Contactez-nous",
  },
};

// Funzione per impostare la lingua selezionata
function setLanguage() {
  var languageLinks = document.querySelectorAll(".language-list a");

  // Controlla se la lingua è già stata selezionata e la rende blu nella lista
  var selectedLang = localStorage.getItem("language");
  if (selectedLang) {
    for (var i = 0; i < languageLinks.length; i++) {
      if (languageLinks[i].getAttribute("data-lang") === selectedLang) {
        languageLinks[i].classList.add("selected");
      }
    }
  }

  // Applica le traduzioni in base alla lingua selezionata
  applyTranslations(selectedLang);
}

// Funzione per applicare le traduzioni in base alla lingua selezionata
function applyTranslations(lang) {
  var translationElements = document.querySelectorAll("[data-translate]");

  for (var i = 0; i < translationElements.length; i++) {
    var translationKey = translationElements[i].getAttribute("data-translate");
    translationElements[i].textContent = translations[lang][translationKey];
  }
}

// Funzione per cambiare la lingua
function changeLanguage(event) {
  event.preventDefault();
  var selectedLang = event.target.getAttribute("data-lang");

  // Rimuovi la classe "selected" da tutti i link della lingua
  var languageLinks = document.querySelectorAll(".language-list a");
  for (var i = 0; i < languageLinks.length; i++) {
    languageLinks[i].classList.remove("selected");
  }

  // Aggiungi la classe "selected" al link della lingua selezionata
  event.target.classList.add("selected");

  // Salva la lingua selezionata nel local storage
  localStorage.setItem("language", selectedLang);

  // Applica le traduzioni in base alla lingua selezionata
  applyTranslations(selectedLang);

  // Nascondi la lista delle lingue dopo la selezione
  var languageList = document.querySelector(".language-list");
  languageList.classList.remove("show");
}

// Funzione per mostrare/nascondere la lista delle lingue al click
function toggleLanguageList(event) {
  event.stopPropagation();
  var languageList = document.querySelector(".language-list");
  languageList.classList.toggle("show");
}

// Funzione per nascondere la lista delle lingue quando si fa clic al di fuori di essa
function hideLanguageList(event) {
  var languageList = document.querySelector(".language-list");
  if (!languageList.contains(event.target)) {
    languageList.classList.remove("show");
  }
}

// Aggiungi l'event listener per mostrare/nascondere la lista delle lingue al click
var languageDropdown = document.querySelector(".language-dropdown");
languageDropdown.addEventListener("click", toggleLanguageList);

// Aggiungi l'evento click a tutti i link della lingua
var languageLinks = document.querySelectorAll(".language-list a");
for (var i = 0; i < languageLinks.length; i++) {
  languageLinks[i].addEventListener("click", changeLanguage);
}

// Aggiungi l'event listener per nascondere la lista delle lingue quando si fa clic al di fuori di essa
document.addEventListener("click", hideLanguageList);

// Carica la lingua al caricamento della pagina
window.addEventListener("load", setLanguage);
