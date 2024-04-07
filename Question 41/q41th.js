"use strict";
// Question No.41
Object.defineProperty(exports, "__esModule", { value: true });
function real_magicians(magacians) {
    for (const magician of magacians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["syed", "inshal", "abbas"];
real_magicians(magician);
