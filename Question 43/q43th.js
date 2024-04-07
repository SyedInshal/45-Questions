"use strict";
// Question No.43
Object.defineProperty(exports, "__esModule", { value: true });
function real_magicians(magacians) {
    for (const magician of magacians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["syed", "inshal", "abbas"];
real_magicians(magician);
// Task 43
function add_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
const magicians3 = ["syed", "inshal", "abbas"];
const greatMagicians2 = add_great2(magicians3);
real_magicians(magicians3);
real_magicians(greatMagicians2);
