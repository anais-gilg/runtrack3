document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("button"); // On crée une variable pour invoquer l'id ce situant dans le fichier html
    let article = document.getElementById("article");

    function showhide(){
        // getComputedStyle() donne la valeur calculée finale de toutes les propriétés CSS sur un élément.
            // Ce qui veut dire que le texte pourra disparaitre ou apparaitre
        if(getComputedStyle(article).display != "none"){
            article.style.display = "none"; // Fait le disparaitre 
        }
        else {
            article.style.display = "block"; // Fait le apparaitre
        }
    }

    button.addEventListener("click", () => { // Quand l'utilisateur appuie sur le boutton lance la fonction 
        showhide();
      });    
    

});
