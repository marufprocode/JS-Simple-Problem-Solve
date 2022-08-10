// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// const partial = friends.slice(2, 5);
// console.log(partial);
// console.log(friends);


//Splice
// Removes elements from an array 
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array

const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends);