let numbers = [7, 21, 14, 12, 10, 1, 3, 15, 6]

function tri(numbers, ordre){
    if(ordre === "asc"){
        console.log(numbers.sort((a, b) => a - b));
    }
    else if (ordre === "desc"){
        console.log(numbers.sort((a, b) => b - a));
    }
}

tri(numbers, "desc");