"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let usernames = ["Ali", "Ayesha", "Admin", "Kinza", "Asim"];
//removing all the elements and checking 
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users");
}
else {
    usernames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thnakyou for logging in again`);
        }
        ;
    });
}
