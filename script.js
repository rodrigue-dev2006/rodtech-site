// Message de bienvenue dans la console
console.log("Bienvenue sur RodTech 🚀");

// Animation douce lors du clic sur les liens du menu
document.querySelectorAll("nav a").forEach(function(lien) {
    lien.addEventListener("click", function(e) {
        e.preventDefault();

        const destination = document.querySelector(
            this.getAttribute("href")
        );

        if (destination) {
            destination.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Petit effet sur les cartes de services
document.querySelectorAll(".carte").forEach(function(carte) {
    carte.addEventListener("click", function() {
        this.style.transform = "scale(1.03)";

        setTimeout(function() {
            carte.style.transform = "scale(1)";
        }, 200);
    });
});

// Affichage automatique de l'année dans le pied de page
const annee = new Date().getFullYear();
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = "© " + annee + " RodTech - Tous droits réservés.";
        }
function modeSombre() {
    document.body.classList.toggle("dark-mode");
}
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});
const message = document.getElementById("message-bienvenue");

if (message) {
    message.textContent = "Bienvenue sur RODTECH 🚀";
}
