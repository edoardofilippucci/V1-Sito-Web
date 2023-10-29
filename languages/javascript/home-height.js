// Calcoliamo l'altezza dell'header e impostiamo l'altezza della sezione correttamente
const header = document.querySelector("header");
const section = document.querySelector(".home");
const headerHeight = header.getBoundingClientRect().height;
section.style.height = `calc(100vh - ${headerHeight}px)`;
