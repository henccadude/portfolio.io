document.querySelector(".button1").addEventListener("click", function() {

    // random generaattorit
    var number1 = Math.floor(Math.random() * 6) + 1;
    var number2 = Math.floor(Math.random() * 6) + 1;

    // otetaan haluttu kuva tiedosto ylös
    var randomImage1 = "pictures/dice-" + number1 + ".png";
    var randomImage2 = "pictures/dice-" + number2 + ".png";

    // asetetaan muuttujan kuvien paikat
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    // asetetaan kuvat bokseihin
    image1.setAttribute("src", randomImage1);
    image2.setAttribute("src", randomImage2);

    // tehdään teksteihin muutoksi
    if (number1 > number2) {
        document.querySelector("h1").innerHTML = "🥵 Player 1 wins!";
    } else if (number1 < number2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🥵";
    } else {
        document.querySelector("h1").innerHTML = "🐓 It's a tie 🐓";

    }
});