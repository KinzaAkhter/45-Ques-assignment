"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
let magician_names = ["HAIDER", "KINZA", "AIMAN"];
show_magicians(magician_names);
