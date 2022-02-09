"use strict";

//let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
//console.log(letters[4]);
//let newarr = letters;
//newarr[4] = "*";
//console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];
let result;
//adds element to array
result = people.push("Draco");

//removes element from the end and returns it
result = people.pop();

result = people.push("Neville");
result = people.push("Luna");

//returns a shallow copy of a portion of an array into a new array
result = people.slice(0, 3);

//changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
result = people.splice(1, 0, "Cho");

people[1] = "Ginny";

result = people.push("Fred", "George");

//returns the first index at which a given element can be found in the array, or -1 if it is not present.
result = people.indexOf("Fred");

result = people.splice(result, 1);
console.log(people);
console.log(result);

//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

//from string to array

//const str = "abcdefghijklmn";
//laver string til array
//const arr1 = Array.from(str);

//laver string til et objekt i et array
//const arr1 = str.split();
//laver string til array hvor efter hvert mellemrum bliver der lavet et item i arrayet
//const arr1 = str.split(" ");
//laver string til array hvor hver karakter bliver et item i arrayet
//const arr1 = str.split("");

//from array to string
const str = "abcdefghijklmn";
const arr1 = Array.from(str);
console.log(arr1);

console.log(str.toString());
