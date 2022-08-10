const result =  Math.pow(3, 3);
// console.log(result);

// ===================================

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);

if(gap < 5){
    // console.log('you guys can be friends');
}
else{
    // console.log('you guys stay apart');
}

// =========================================
// parent and Math.round 

const number  = 2.5198;
const integerNumber = parseInt(number);
const integerNumberMath = Math.round(number); 
console.log(integerNumber);
console.log(integerNumberMath);


//MathCeil and Math.floor
const number2 = 2.0001;
const integerMathCeil = Math.ceil(number2);
const integerMathFloor = Math.floor(number2);
// console.log(integerMathCeil);
// console.log(integerMathFloor);

// ============================================
// Random

// console.log(Math.random());
const random = Math.random()*100;
const randomRound = Math.round(Math.random()*6);
// console.log(random);
// console.log(randomRound);

for(let i = 0; i < 20; i++){
    const randomLoop = Math.round(Math.random()*6);
    // console.log(randomLoop);
}

// ============================
// Math.max.apply();

/* const numbers = [167, 190, 120, 400, 300, 265];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);

const minNumber = Math.min.apply(null, numbers);
console.log(minNumber); */

var myArray =['20','120','111','215','54','78'];
var secondLargest = myArray.sort(function(a,b){return a - b})[myArray.length-2];
console.log(secondLargest);







