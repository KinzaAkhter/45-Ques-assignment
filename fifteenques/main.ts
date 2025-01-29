const guestList1:string[]=["Ali","fatima","Kinza","yusha"];
console.log(`Due to some reason ${guestList1[1]} won't come`);
guestList1[1]="Hashim";
for (let i=0;i<guestList1.length;i++){
    console.log(`${guestList1[i]} You are invited for dinner on Sunday`);
}