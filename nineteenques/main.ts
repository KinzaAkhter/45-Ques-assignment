//19 take any of the program from 14 to 18 and print a message indicating the no of people uou are inviting

const guestList: string[]=["Ali","fatima","Kinza","yusha"];
guestList.map((i)=>{
    console.log(`${i} You are invited for dinner on Sunday`);
})
console.log(`total number of guests: ${guestList.length}`);