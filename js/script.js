new WOW().init();

function generateQRCode() {
    this.QRimage.style.display = 'none';
    this.QRimage.src = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=300x300&chl="
        + encodeURIComponent(QRcode.value.trim());
    this.QRimage.style.display = 'inline';
}