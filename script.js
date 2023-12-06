document.addEventListener("DOMContentLoaded", function () {
  // Menunggu hingga dokumen HTML selesai dimuat sebelum menjalankan skrip

  const marqueeContent = document.querySelector(".marquee-content");

  if (marqueeContent) {
    // Memeriksa apakah elemen dengan kelas 'marquee-content' ditemukan

    const root = document.documentElement;
    const marqueeElementDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-element-displayed"));
    // Mendapatkan nilai dari properti CSS '--marquee-element-displayed' dan mengonversinya menjadi angka

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    // Mengatur properti CSS '--marquee-elements' dengan jumlah anak elemen di dalam 'marquee-content'

    for (let i = 0; i < marqueeElementDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      // Menduplikasi elemen-elemen di dalam 'marquee-content' dan menambahkannya sebagai anak elemen
    }
  } else {
    console.error("Elemen dengan selektor '.marquee-content' tidak ditemukan.");
    // Jika elemen tidak ditemukan, log pesan kesalahan ke konsol
  }
});

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
