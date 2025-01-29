"use strict";
//12. Store the name of few of yourfriends in an array. print each person's name by accessing each element in list at a time
// and print a msg to each person, text of each person should be same nut msg should be personalized with person's name
let friendsArray = ["Amna", "Rameen", "Sumbul", "Sheeza"];
let text = "How about you?";
for (let i = 0; i < friendsArray.length; i++) {
    console.log(`${friendsArray[i]} ${text}`);
}
