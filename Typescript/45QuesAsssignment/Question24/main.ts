console.log("Test of Equaltiy and Inequality od strings")
let vegetable = "Potato";
console.log(vegetable === "Potato"); //true due to equality of strings
console.log(vegetable === "Onion");  //false due to Inequality of strings

console.log("Test using the lower case function");
let veg = "Potato";
console.log("Potato".toLowerCase() == "potato"); //true
console.log("Potato".toLowerCase() == "Potato"); //false

console.log("Numerical Tests");
let num1 = 23;
let num2 = 20;
let isEqual = (num1 == num2); //False
let notEqualto = (num1 != num2); //True
let greaterThan = (num1 > num2); //True
let lessThan = (num1 < num2); //False
console.log(isEqual);
console.log(notEqualto);
console.log(greaterThan);
console.log(lessThan);

console.log("Test using 'and' & 'or' operators");
let and = (num1 > 21) && (num2 > 21); //False
let or  = (num1 > 21) || (num2 > 21); //True
console.log(and);
console.log(or);


console.log("To whether an item is in array");
let fruits = ["apple", "mango", "strawberry"];
console.log("Is 'mango' is in fruits?")
console.log(fruits.includes("mango"));

console.log("To whether an item is not in array");
console.log("Is 'banana' is in fruits?")
console.log(fruits.includes("banana"));