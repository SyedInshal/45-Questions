"use strict";
// Question No.15 
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["Mesum", "Mohib", "Kashan"];
let canNotAttend = "Mesum";
console.log(`${canNotAttend} can not make it , for dinner`);
// Invite New Guest
let newGuest = "Ali";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
// Send Message
guestArray.map((items) => console.log(`Hello, ${items} You Are Invited To Dinner`));
