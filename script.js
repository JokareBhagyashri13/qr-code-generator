const input = document.getElementById("text");
const button = document.getElementById("btn");
const qrBox = document.getElementById("qr");

button.addEventListener("click", function () {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter some text or a link");
    return;
  }

  qrBox.innerHTML = "";
  new QRCode(qrBox, text);
});