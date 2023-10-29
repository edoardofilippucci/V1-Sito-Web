// Carica EmailJS con il tuo User ID
emailjs.init("243oEnGgapN7766cT");

// Ascolta l'invio del modulo di contatto
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ottieni i dati dal modulo
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Compila il modello di email
    const templateParams = {
      to_name: "Nome del destinatario",
      from_name: name,
      from_email: email,
      message: message,
    };

    // Invia l'email
    emailjs.send("service_42ulwyx", "template_mkd08lm", templateParams).then(
      function (response) {
        console.log("Email inviata con successo!", response);
      },
      function (error) {
        console.log("Errore nell'invio dell'email:", error);
      }
    );
  });
