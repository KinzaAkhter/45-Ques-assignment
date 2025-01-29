"use strict";
//16 proceede the above program ina addition add 1 guest iinstart of list in middle of list and in end of list
const guestList2 = ["Ali", "fatima", "Kinza", "yusha"];
console.log(`Due to some reason ${guestList2[1]} won't come`);
guestList2[1] = "Hashim";
//for (let i = 0; i < guestList2.length; i++) {
//console.log(`${guestList1[i]} You are invited for dinner on Sunday`);
//}
console.log(`Good news! now we have a bigger dinner table so we invite 3 more guests \n Thankyou!`);
guestList2.unshift("Ahmer"); //1st index pai kch add krna ho to
guestList2.splice(3, 0, "Alice");
guestList2.push("Farah");
for (let i = 0; i < guestList2.length; i++) {
    console.log(`${guestList2[i]} You are invited for dinner on Sunday.`);
}
