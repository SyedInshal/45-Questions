"use strict";
// Question No.16
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["Mesum", "Mohib", "Kashan"];
let canNotAttend = "Mesum";
// Invite New Guest
let newGuest = "Ali";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// Send Message
console.log("welcome all we found a bigger dinner table");
guestArray.unshift("Moazzam");
let middleGuest = "Rafay";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("Moeed");
guestArray.map((item) => console.log(`\nDear ${item} you are invited to dinner!`));
