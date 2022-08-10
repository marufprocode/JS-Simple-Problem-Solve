// Find who will win the top marks, will get delicious cake
// Write a function that will take numbers will return the max number
//Write a function that will take three parameters and will return the min number.
//First do it usinf if-else,
//Second do it using Math.min or Math.max

let JimMarks = 69;
let DelaMarks = 97;
let ChinkuMarks = 99;

/* function FindWiner (x, y, z){
    if (x>y && x>z){
        return 'Jim'
    }
    else if (y>x && y>z){
        return 'Dela'
    }
    else{
        return 'Chinku'
    }
}

const deliciousCakeWiner = FindWiner(JimMarks, DelaMarks, ChinkuMarks);
console.log(deliciousCakeWiner); */

// ==========================================

/* function findWiner (x, y, z){
    let winer = Math.max(x, y, z);
    let topWiner = winer === x ? 'Jim' : winer === y ? 'Dela' : 'Chinku';
    return topWiner
}

const deliciousCakeWiner = findWiner(JimMarks, DelaMarks, ChinkuMarks);
console.log(deliciousCakeWiner); */


// =========================================

/* const topMarksGainer = Math.max(69, 97, 99);

// console.log(topMarksGainer); */

// =================================================
/* function findWiner (x, y, z){
    let winer = Math.min(x, y, z);
    let topWiner = winer === x ? 'Jim' : winer === y ? 'Dela' : 'Chinku';
    return topWiner
}

const deliciousCakeWiner = findWiner(JimMarks, DelaMarks, ChinkuMarks);
console.log(deliciousCakeWiner); */

// ====================================================

// Homework: Write a function to get the lowest number in an array

/* function lowestInArray(numbers){
    let lowestNum = numbers[0];
    for (let i=0; i<numbers.length; i++){
        if (lowestNum>numbers[i]){
            lowestNum = numbers[i];
        }
    }
    return lowestNum
}

const heights = [167, 190, 120, 165, 137, 265];
const lowestPerson = lowestInArray(heights);
console.log('lowest person is: ', lowestPerson); */



