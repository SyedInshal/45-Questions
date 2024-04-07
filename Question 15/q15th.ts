// Question No.15 

let guestArray:string[] =["Mesum", "Mohib","Kashan"];

let canNotAttend:string = "Mesum";

console.log(`${canNotAttend} can not make it , for dinner`);

// Invite New Guest

let newGuest:string = "Ali";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;
console.log(guestArray);

// Send Message

guestArray.map((items)=> console.log(`Hello, ${items} You Are Invited To Dinner`));