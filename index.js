"use strict";
//Question 94
let fruits = ["Banana", "Apple", "Pear", "Mango", "Orange", "Peach"];
let lengthoffruits = fruits.map((fruit) => fruit.length);
console.log(fruits);
console.log(lengthoffruits);
// Question 95
let num = [45, 5, 6, 33, 44, 7, 8, 9, 32, 55];
let GreaterThanTen = num.filter((no) => no > 10);
console.log(num);
console.log(`Array greater than ten is ${GreaterThanTen}`);
// Question 96
let sum = num.reduce((num1, num2) => num1 + num2, 0);
console.log(`Sum of this array ${num} is ${sum}`);
