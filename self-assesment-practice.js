/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */
//Solution:

function feetToInch(feet) {
  const myInches = feet * 12;
  return myInches;
}

const myfeetResult = feetToInch(2);
// console.log(myfeetResult);

// ============================================================
/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */
//Solution:
function centimeterToMeter(centimeter) {
  const meter = centimeter * 0.01;
  return meter;
}

const mycentToMeter = centimeterToMeter(80);
// console.log(mycentToMeter);

// ============================================================
/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */
//Solution:

function paperRequirements(book1Q, book2Q, book3Q) {
  const paperRqForBook1 = 100 * book1Q;
  const paperRqForBook2 = 200 * book2Q;
  const paperRqForBook3 = 300 * book3Q;
  const totalPaperRq = paperRqForBook1 + paperRqForBook2 + paperRqForBook3;
  return totalPaperRq;
}

let book1Qt = 2;
let book2Qt = 3;
let book3Qt = 1;
const myTotalPaperRequirements = paperRequirements(book1Qt, book2Qt, book3Qt);
// console.log(myTotalPaperRequirements);

// =================================================================
/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */
//Solution:

function bestFriend(inputArr){
    let lgName = inputArr[0];
    for (i=0; i<inputArr.length; i++){
        const element = inputArr[i];
        if(lgName.length<element.length){
            lgName = element;
        }
    }
    return lgName;
}

let friends = ['Anas', 'Malik', 'Selim', 'Kalam', 'Abdullah Hasan', 'Alam', 'Jahan']

const myLargestFriendName = bestFriend(friends);
// console.log(myLargestFriendName);

// ===================================================================
/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */
//Solution:

let numbers = [2, 5, 8, 4, 5, -5, 2, 4];

function findPositiveArr(numArr){
    let newArr = [];
    for (i=0; i<numArr.length; i++){
        if (numArr[i] >= 0){
            newArr.push(numArr[i]);
        }
        else{
            break
        }
    }
    
    return newArr
}
// console.log(findPositiveArr(numbers));

// =======================================================
// একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
//Solution:

const mobile = {
    name : 'Xiaomi',
    model : 'Note9s',
    camera : '64MP',
    storage : '128GB',
    price : 20000,
}

mobile.price = 24000;
console.log(mobile);



