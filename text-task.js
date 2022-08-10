// Write an program to find smallest number from an Array

//Solution:

/* let arr = [2, 8, 7, 6, 5];

let smNumber = 10;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smNumber) {
    smNumber = arr[i];
  }
}

console.log(smNumber); */

// ================================================
// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

//Solution:
/* let x = 50;
let y = 40;
let z = 45;

if(x<y && x<z){
    console.log(x + ' is the smallest number');
}

else if (y<x && y<z){
    console.log(y + ' is the smallest number');
    
}

else{
    console.log(z + ' is the smallest number');
    
} */

// ====================================
/* ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */

//Solution:

/* function averageOfArrayNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avgOfSum = sum / arr.length;
  return avgOfSum;
}

let numbers = [8, 6, 2, 4];
const averageOfArrayNumbers = averageOfArrayNumber(numbers);
console.log(averageOfArrayNumbers); */

// =====================================
/* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */

//Solution:

/* function findRectangleArea (width, height){
    let areaOfRectangle = width * height;
    return areaOfRectangle;
}

console.log(findRectangleArea(3, 6)); */

// =====================================================

/* ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */

//Solution:

let arr = [44, 45, 50];

let largestNum = arr[0];

for (i=0; i<arr.length; i++){
    if (largestNum<arr[i]){
        largestNum = arr[i];
    }
}
console.log(largestNum);
 
let sndLgNum = arr[0];
for (i=0; i<arr.length; i++){
    if (sndLgNum<arr[i] && arr[i]<largestNum){
        sndLgNum = arr[i];
    }
}
console.log(sndLgNum);







