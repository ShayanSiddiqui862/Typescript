console.log("Test of Equaltiy and Inequality od strings");
var vegetable = "Potato";
console.log(vegetable === "Potato"); //true due to equality of strings
console.log(vegetable === "Onion"); //false due to Inequality of strings
console.log("Test using the lower case function");
var veg = "Potato";
console.log("Potato".toLowerCase() == "potato"); //true
console.log("Potato".toLowerCase() == "Potato"); //false
console.log("Numerical Tests");
var num1 = 23;
var num2 = 20;
var isEqual = (num1 == num2); //False
var notEqualto = (num1 != num2); //True
var greaterThan = (num1 > num2); //True
var lessThan = (num1 < num2); //False
console.log(isEqual);
console.log(notEqualto);
console.log(greaterThan);
console.log(lessThan);
console.log("Test using 'and' & 'or' operators");
var and = (num1 > 21) && (num2 > 21); //False
var or = (num1 > 21) || (num2 > 21); //True
console.log(and);
console.log(or);
console.log("To whether an item is in array");
var fruits = ["apple", "mango", "strawberry"];
console.log("Is 'mango' is in fruits?");
console.log(fruits.includes("mango"));
console.log("To whether an item is not in array");
console.log("Is 'banana' is in fruits?");
console.log(fruits.includes("banana"));
