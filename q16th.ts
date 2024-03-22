// Question No.16

 
let guestArray:string[] =["Mesum", "Mohib","Kashan"];

let canNotAttend:string = "Mesum";

// Invite New Guest

let newGuest:string = "Ali";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

// Send Message

console.log("welcome all we found a bigger dinner table");

guestArray.unshift("Moazzam");

let middleGuest:string = "Rafay";

let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

guestArray.push("Moeed");

guestArray.map((item)=> console.log(`\nDear ${item} you are invited to dinner!`));