const element = document.getElementById("yourElementId");

element.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "c") {
    event.preventDefault(); // Prevent the default copy action
    // You can add custom logic here if needed
  }
});
