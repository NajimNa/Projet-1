/*js
document.getElementById("messageButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Merci d'avoir visité ma page !";
}); 
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nabatrou COULIBALY</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <img src="Ma_photo.png" alt="Ma photo de profil" id="profile-pic">
        <h1>Bienvenue sur ma page personnelle !</h1>
    </header>

    <section id="about">
        <h2>À propos de moi</h2>
        <p>Je suis Nabatrou COULIBALY. Je suis diplomée d'un master en informatique option MIAGE <br>Je suis passionnée de nouvelle technologie, de bénévolat, de vie communautaire et de design. J’aspire devenir web designer et je 
            désire mettre tout en œuvre pour développer mes compétences. En combinant ma créativité, ma détermination et mon désir constant de repousser les limites, je m'efforce de contribuer à un avenir dynamique et empreint de progrès.</br></p>
    </section>

    <section id="passion">
        <h2>Ma passion</h2>
        <p>Je suis essentiellement passionnée par les métiers du numérique tels que le design, le developpement web, l'analyse de données, l'infographie et la phptographie. 
            <br>Outre ces métiers, je suis assez impliquée dans les actions communautaires et le bénévolat.</br></p>
    </section>

    <button id="messageButton">Terminez</button>
    <p id="message"></p>

    <script src="script.js"></script>

</body>
</html>
*/

document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.getElementById("messageButton");
    if (messageButton) {
        messageButton.addEventListener("click", function() {
            document.getElementById("message").textContent = "Merci d'avoir visité ma page !";
        });
    } else {
        console.log("Le bouton n'a pas été trouvé");
    }
});
