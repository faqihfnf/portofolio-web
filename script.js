function sendMessage() {
  const form = document.forms["contact-form"];
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const email = document.getElementById("email").value;
  const phoneNumber = "628996423135";

  const url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=Hallo Faqih,  Saya " + name + ", " + message;

  window.open(url);
  form.reset();
}
