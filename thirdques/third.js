"use strict";
//3.store a peron name in variable and then print in lowercase uppercase and titlecase
let person1 = " syed Haider";
console.log("Upercase: ", person1.toLowerCase());
console.log("Lowercase: ", person1.toUpperCase());
//for titlecase
let person2 = "javascript";
console.log("Titlecase: ", person2.replace(/\b\w/g, a => a.toUpperCase()));
