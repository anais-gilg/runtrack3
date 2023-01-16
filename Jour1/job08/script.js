function isPrime(nbr) 
{
    // Si le nbr est inférieur à 2 alors ce n'est pas un nombre premier
    if (nbr < 2){
        return false;
    }

    for (let i = 2; i < nbr; i++){
        // Si i est un diviseur de nbr, nbr n'est pas premier.
        if (nbr % i == 0){
             return false;
        }
    }

    return true;
}

function sommenombrespremiers(nbr1, nbr2){
    if(isPrime(nbr1) && isPrime(nbr2)){
        console.log(nbr1 + nbr2);
    }
    else {
        console.log("Il faut que ce soit des nombres prmiers");
    }
}
    
sommenombrespremiers(7, 7);
