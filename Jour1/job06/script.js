function fizzbuzz(){
    for(let i=0; i<=151; i++){
        if (i%3 == 0 && i%5 == 0){ // Si i est un multiple de 3 et de 5 remplace le nombre par FizzBuzz
            console.log('FizzBuzz');  
        }
        else if (i%3 == 0){ // Sinon Si i est un multiple de 3 remplace le nombre par Fizz
            console.log('Fizz');
        }
        else if (i%5 == 0){  // Sinon Si i est un multiple de 5 remplace le nombre par Buzz
            console.log('Buzz'); 
        }
        else{
            console.log(i); // Et sinon, si ce n'est ni un multiple de 3 ou de 5 et bien tu affiche le nombre
        }
    }
}

fizzbuzz();