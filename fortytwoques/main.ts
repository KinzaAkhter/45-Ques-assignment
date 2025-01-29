//tsc Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

function show_magicians (magician: string []){
    magician.forEach(name=> console.log(name)
);

}
function make_great(magician: string[]){
    return magician.map(name=> `The great ${name}`)
}

let magician_names = ["HAIDER","KINZA","AIMAN"]
let great_magician = make_great(magician_names)

show_magicians(great_magician)

