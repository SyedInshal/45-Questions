"use strict";
// Question No.17
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["Mesum", "Mohib", "Kashan"];
let canNotAttend = "Mesum";
// Invite New Guest
let newGuest = "Ali";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// Send Message
guestArray.unshift("Moazzam");
let middleGuest = "Rafay";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("Moeed");
console.log(guestArray);
// Message : Invite Only Two People On Dinner! 
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nsorry ${removeguest} we can't invite you for dinner!`);
}
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
