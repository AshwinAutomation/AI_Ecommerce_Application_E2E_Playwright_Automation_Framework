let test = []; //empty array destructuring
let numbers= [1, 2, 3, 4, 5]; //array with numbers
let fruits = ["apple", "banana", "orange"]; //array with strings
let alphabet = ["a", "b", "c", "d", "e"]; //array with characters4

console.log("Empty array:", test);
console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
console.log("Alphabet array:", alphabet);

//1-Push: method adds one or more elements to the end of an array and returns the new length of the array.
numbers.push(6);
console.log("Numbers array after push:", numbers);
test.push("new element");
console.log("Test array after push:", test);

//2-Pop: method removes the last element from an array and returns that element.
let lastNumber = numbers.pop();
console.log("Last number removed:", lastNumber);
console.log("Numbers array after pop:", numbers);

//3-Shift: Removes the first element from an array and returns that removed element. This method changes the length of the array.
let animals = ["Simba", "Nala", "Mufasa"];
let firstAnimal = animals.shift();
console.log("First animal removed:", firstAnimal);
console.log("Animals array after shift:", animals);

//4-Unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
let colors = ["red", "green", "blue"];
let newLength = colors.unshift("yellow","orange");
console.log("New length of colors array after unshift:", newLength);
console.log("Colors array after unshift:", colors);

//5-Slice: method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent
//  the index of items in that array. The original array will not be modified.
let birds = ["sparrow", "eagle", "parrot", "pigeon", "crow"];
let slicedBirds = birds.slice(1,4);
console.log("Sliced birds array:", slicedBirds);
console.log("birds:", birds);