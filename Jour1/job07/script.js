function jourtravaille(param1, param2, param3){

    let date = new Date(param1, param2, param3) ;

    let jourDate = date.getDate(); // retourne le jour du mois pour la date spécifiée d'après l'heure locale.
    let mois = date.getMonth(); // retourne le mois de la date renseignée d'après l'heure locale. (0 correspond au premier mois de l'année)
    let annee = date.getFullYear(); // renvoie l'année de la date renseignée d'après l'heure locale.
    let jour = date.getDay(); // renvoie le jour de la semaine pour la date spécifiée selon l'heure locale (0 correspondant à dimanche)
    
    // on crée un tableau avec toute les dates des jours fériés de 2020
    let ferie = [
        '1/1/2020',
        '13/4/2020',
        '1/5/2020',
        '8/5/2020',
        '25/5/2020',
        '1/6/2020',
        '14/7/2020',
        '15/8/2020',
        '1/11/2020',
        '11/11/2020',
        '25/12/2020',
    ]
    
    let dateEntrée = jourDate + mois + annee; 

    if(ferie.includes(dateEntrée)){
        console.log("le " + jourDate + " / " + mois + " / " + annee + " " + "est un jour férié");
    }else if(jour == 0 || jour == 6){
        console.log("Non, le " + jourDate + " / " + mois + " / " + annee + " " + "est un week-end");
    }else{
        console.log("Oui, le " + jourDate + " / " + mois + " / " + annee + " " + "est un jour travaillé");
    }


}

jourtravaille(2020, 01, 15); // Samedi 15 février 2020
         // Année, mois, jour