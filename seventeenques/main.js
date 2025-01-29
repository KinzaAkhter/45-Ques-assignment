"use strict";
//17 Shrinking guestlist 
const guestList3 = ["Ali", "fatima", "Kinza", "yusha"];
//console.log(`Good news! now we have a bigger dinner table so we invite 3 more guests \n Thankyou!`);
guestList3.unshift("Ahmer"); //1st index pai kch add krna ho to
guestList3.splice(3, 0, "Alice");
guestList3.push("Farah");
for (let i = 0; i < guestList3.length; i++) {
    console.log(`${guestList3[i]} You are invited for dinner on Sunday.`);
}
console.log("Sorry we have to shrink guest list as we don't have enough space.\n Only two of you are invited");
while (guestList3.length > 2) {
    let remove_guest = guestList3.pop(); //pop ka method array k last se elements ko eliminate krega aur in elements ko apne andr store krlega
    console.log(`Sorry ${remove_guest} you guys are not invited for dinner`);
}
for (let i = 0; i < guestList3.length; i++) {
    console.log(`${guestList3[i]} You are still invited for dinner on Sunday.`);
}
guestList3.splice(0, 2); // array check krni h to 2 elements bacge the unhe del krdia ab array empty h so  
console.log(guestList3); //print lrwakr check krli
