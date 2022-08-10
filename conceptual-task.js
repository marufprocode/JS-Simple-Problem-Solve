// Calculate the average of all the numbers that is divisible by 3 from 1 - n;

//(1 + 2 + 3 + 4 + 5) / 5


// 3  + 6 + 9
function average(n){
    let count = 0, sum = 0;
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0){
        count = count + 1;
        sum = sum + i;
      } 
    }
  
    const avg = sum / count;
    return avg;
  }
  
  
  const result = average(10);
//   console.log(result)

// ========================================

/* Mular dam, For first 2 kg - 30 tk per kg
For more than 2 kg - 25 tk per kg
write a function to calculate total price based on given quantity. + handle errors */
//Solution:

function totalPriceOfMula(quantity){
    let firstPrice = 30;
    let secondPrice = 25;
    if(quantity<=2){
        const totalPrice = quantity*firstPrice;
        return totalPrice; 
    }
    else{
        const totalPrice = quantity*secondPrice;
        return totalPrice;
    }
}

const totaMulaPrice = totalPriceOfMula(2);
// console.log(totaMulaPrice);

// ===============================================

/* Calculate Electricity bill, For first 100 unit - 5 tk per unit
For more than 100 unit 6 tk for every unit more than 100
For more than 200 unit 7 tk for every unit more than 200 */
//Solution:

function electricityBill(unit){
    let bill;
    if(unit <= 100){
      bill = unit * 5;
    } else if(unit <= 200){
      // 130
      // 100 => 500
      // 30 * 6 = 180
      const first100 = 100*5;
      const remaining = unit - 100;
      const remainingCost = remaining * 6;
      bill = first100 + remainingCost;
    } else if(unit > 200){
      //unit 230
      const first100 = 100 * 5;
  
      const second100 = 100 * 6;
  
      const remaining = unit - 200;
  
      const remainingBill = remaining * 7;
  
      bill = first100 + second100 + remainingBill;
    }
  
    return bill;
  }
  
  
  const totalBill = electricityBill(250)
//   console.log(totalBill)

// ===============================================
// Remove duplicate from array

function removeDuplicate(arr){
    let unique = [];
  
    for(let i = 0; i < arr.length; i++){
      if(unique.includes(arr[i]) == false){
        unique.push(arr[i]);
      }
    }
    return unique;
  
  }
  
//   console.log(removeDuplicate([1,2,3,2, 4]))

// ==========================================================

let x = Math.pow(3, 3);
let y = 3e3;
console.log(x, y);

  

