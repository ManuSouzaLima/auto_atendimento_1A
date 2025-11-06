const botao = document.getElementById("gerar_qr");
const qrcodeContainer = document.getElementById("qrcode");

botao.addEventListener("click", (Event) => {
  Event.preventDefault();

  qrcodeContainer.innerHTML = "";

  const textoQR = "https://www.cnnbrasil.com.br/";

  new QRCode(qrcodeContainer, {
    text: textoQR,
    width: 200,
    height: 200,
  });
});
