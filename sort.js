const numbers = [50, 25, 15, 22, 23, 66, 70];
// console.log(numbers);

// ==========================================
// array sort in sequence (ascending):

const arrAscending = numbers.sort();
// console.log(arrAscending);

// ==============================================
// array sort reverse (descending):

const arrDescending = numbers.sort().reverse();
// console.log(arrDescending);

// ==========================================
//remove duplicates and set new array using sort
/* const dupArr = [40, 20, 50, 40, 50, 30, 50, 49];
const find2ndlrg = [...new Set(dupArr)].sort();
console.log(find2ndlrg); */

// ============================================
//Array find 2nd largest

const arrNum = [24, 58, 22, 89, 88, 90];

function find2ndLargestNum(array){
    let largestNum = array[0];
    let secondLargestNum = array[0];
    for (let i=0; i<array.length; i++){
        if(array[i]>largestNum){
            secondLargestNum = largestNum;
            largestNum = array[i];
        }
    }
    return secondLargestNum;
}

const secondLargestNum = find2ndLargestNum(arrNum);
// console.log(secondLargestNum);
// ---------------------------------------------------------
/* let arr = [4, 5, 8, 6, 9];
let lr = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > lr) {
    lr = arr[i];
  }
}
let sndlr = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i]<lr && arr[i]>sndlr){
    sndlr = arr[i];
  }
} */

// console.log(sndlr);

// =============================================

/* const numbersArr = [50, 25, 15, 22, 23, 66, 70];
const secondLrg = numbersArr.sort().reverse()[1]; //first way
console.log(secondLrg);

const sndLrg = numbersArr.sort()[numbersArr.length-2]; //second way
console.log(sndLrg); */

//==============================================
// Find second largest if the array has duplicates
/* const dupArr = [40, 20, 50, 40, 50, 30, 50, 49];
const find2ndlrg = [...new Set(dupArr)].sort().reverse()[1];
console.log(find2ndlrg); */

// Note: using this sort we can also find lowest and second lowest

// ==========================================

