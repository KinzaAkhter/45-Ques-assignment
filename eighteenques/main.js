"use strict";
//18 
let countries = ["Pakistan", "China", "India", "England", "US"];
let originalOrder = countries.slice();
console.log(`Original order : [${countries}]`);
console.log(`Alphabetical order: [${countries.sort()}]`);
console.log(`Original order: ${originalOrder}`);
console.log(`Reverse alphabetical order [${countries.reverse()}]`);
console.log(`original Order: [${originalOrder}] `);
console.log(`Reverse alphabetical order [${countries.reverse().reverse()}]`);
console.log(`Reverse alphabetical order [${countries.reverse()}]`);
console.log(`Reverse alphabetical order [${countries.reverse().sort()}]`);
