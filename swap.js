let first =5;
let second =8;
// console.log(first, second);

// first = second;
// second = first;


//Frist Aproach: (Use temporary variable)
/* const temp = first;
first = second;
second = temp;
console.log(first, second); */

//Second Approach (Destructuring Method):
[first, second] = [second, first]
console.log(first, second);


