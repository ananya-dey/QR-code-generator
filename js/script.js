new WOW().init();

function generateQRCode() {
    this.QRimage.style.display = 'none';
    if(encodeURIComponent(QRcode.value.trim()) == ''){
        this.QRimage.style.display = 'none';
    }
    this.QRimage.src = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=300x300&chl="
        + encodeURIComponent(QRcode.value.trim());
    this.QRimage.style.display = 'inline';
}

/*$(document).ready(function() {
    $('.mdb-select').material_select();
  });*/