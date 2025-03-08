const container = document.querySelector("#container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");


function generateQrCode() {
  let qrCodeInputValue = qrCodeInput.value  ;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando QR Code...";


  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {

    qrCodeImg.parentElement.classList.remove("opacity-0");
    qrCodeImg.parentElement.classList.add("opacity-100");

    container.classList.add("h-[500px]");
    qrCodeBtn.innerText = "QR Code criado!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});


qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value.trim()) {
    qrCodeImg.parentElement.classList.remove("opacity-100");
    qrCodeImg.parentElement.classList.add("opacity-0");

    container.classList.remove("h-[500px]");
    container.classList.add("h-[300px]");
    
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
