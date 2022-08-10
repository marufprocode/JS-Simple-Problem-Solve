// find Max and min using infinity

/* const numbers = [167, 190, 120, 400, 300, 265];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);
    
const minNumber = Math.min.apply(null, numbers);
console.log(minNumber); */



//Find MinMax
/* function findMinMax(numbers){
    let maximum = -Infinity; //
    let minimum = Infinity; // Infinity is not a value in JS. It;s Just for comparison If you compare any value to infinity, infinity will be higher than that value.
    for (let index of numbers){
        if (index > maximum){
            maximum = index
        }
        if (index < minimum){
            minimum = index
        }
    }
    return 'maximum: ' + maximum + ', Minimum '+ minimum;
}
console.log(findMinMax(numbers)); */

// =================================================

//Find Max
/* function findMax(numbers){
    let maximum = -Infinity;
    let minimum = Infinity;
    for (let index of numbers){
        if (index > maximum){
            maximum = index
        }
    }
    return maximum
}
console.log(findMax(numbers)); */

//Find Min
/* function findMin(numbers){
    let maximum = -Infinity;
    let minimum = Infinity;
    for (let index of numbers){
        if (index < minimum){
            minimum = index
        }
    }
    return minimum
}
console.log(findMin(numbers)); */

