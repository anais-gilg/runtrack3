document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("button"); // On crée une variable pour invoquer l'id ce situant dans le fichier html

    function addone(){
        let p = document.getElementById("compteur");
        p.innerHTML++; // On incrémente la balise p du ficher html
    }
    
    button.addEventListener("click", () => { // Quand l'utilisateur appuie sur le boutton, lance la fonction 
        addone();
      });    
    

});
