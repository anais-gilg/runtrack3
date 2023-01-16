let année = 2016

function bisextile(année){
    if((année % 4 === 0 && année % 100 > 0) || (année % 400 === 0)){
        alert(année + "est bisextile");
        return true;
    }else {
        alert(année + "n'est pas bisextile");
        return false;
    }
}

console.log(bisextile(2016));