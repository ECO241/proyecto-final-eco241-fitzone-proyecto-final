const QRCode = require('qrcode');

const url = 'http://localhost:3000/pages/login/login.html';

QRCode.toFile('qr-code.png', url, {
    color: {
        dark: '#000000',  // Color de los puntos
        light: '#ffffff'  // Color de fondo
    }
}, function (err) {
    if (err) throw err;
    console.log('El código QR se ha guardado en "qr-code.png"');
});
