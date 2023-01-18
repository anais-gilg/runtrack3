document.addEventListener("DOMContentLoaded", () => {

    window.onload = () => { // Au chargement de la page

        window.addEventListener("scroll", () => { // Au moment du scroll
            let hauteur = document.documentElement.scrollHeight - window.innerHeight; // Calculer la hauteur du document
            let position = window.scrollY; // Réccupérer la position vertical
            let largeur = document.documentElement.clientWidth; // Réccupérer la position horizontal

            let footer = (position / hauteur) * largeur; // Calcul pour quand on scroll le footer se déplace

            // On appel l'élément footer pour pouvoir modifier son css
            // On ajoute des px à l'élément footer quand l'utilisateur scroll
            document.getElementById("footer").style.width = footer + "px"; 
        
        })

    }
    
});
