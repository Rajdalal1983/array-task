let myArray = [];

myArray.push("apple","ananas","charry")



console.log(myArray)
console.log(myArray[0])
console.log(myArray[2])


myArray.unshift("mango");

console.log(myArray)

let numbers = [5, 10, 15, 20, 25];

// Use splice to remove the element at index 2 (which is 15)
numbers.splice(2, 1);

// Now, the array will be updated, and element 15 is removed
console.log(numbers); // Output: [5, 10, 20, 25]


function getArrayLength(arr) {
    return arr.length;
}
let MyArray = [1, 2, 3, 4, 5];
let length = getArrayLength(myArray);
console.log("The length of the array is:", length); 


const temperatures = [72, 68, 74, 80, 76];
temperatures.sort();

const Numbers = [5, 10, 15, 20, 25];

// Use slice to create a new array without the element at index 2
const newArray = numbers.slice(0, 2).concat(numbers.slice(3));

// Now, the newArray will not contain the element at index 2
console.log(newArray); // Output: [5, 10, 20, 25]



function getArrayLength(arr) {
    return arr.length;
  }
  
  // Example usage:
   MyArray = [1, 2, 3, 4, 5];
   length = getArrayLength(myArray);
  console.log("The length of the array is:", length); // Output: The length of the array is: 5
  
