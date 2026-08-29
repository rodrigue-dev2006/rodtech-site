function direBonjour() {
    alert("Bonjour ! Bienvenue sur mon site 
    RODTECH 🚀");
}
function additionner() {
    let a = Number(document.getElementById("nombre1").value);
    let b = Number(document.getElementById("nombre2").value);

    document.getElementById("resultat").textContent =
        "Résultat : " + (a + b);
}

function soustraire() {
    let a = Number(document.getElementById("nombre1").value);
    let b = Number(document.getElementById("nombre2").value);

    document.getElementById("resultat").textContent =
        "Résultat : " + (a - b);
}

function multiplier() {
    let a = Number(document.getElementById("nombre1").value);
    let b = Number(document.getElementById("nombre2").value);

    document.getElementById("resultat").textContent =
        "Résultat : " + (a * b);
}

function diviser() {
    let a = Number(document.getElementById("nombre1").value);
    let b = Number(document.getElementById("nombre2").value);

    if (b === 0) {
        document.getElementById("resultat").textContent =
            "Impossible de diviser par zéro";
        return;
    }

    document.getElementById("resultat").textContent =
        "Résultat : " + (a / b);
}