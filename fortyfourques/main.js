"use strict";
function make_sandwitch(...items) {
    console.log(`\n Making a sandwitch with the following items`);
    items.forEach(singleItem => console.log(singleItem));
    console.log("Now eating sandwitch");
}
make_sandwitch("Chicken", "Cheese");
make_sandwitch("spinach", "Oil", "Peas");
make_sandwitch("Bread", "Butter");
