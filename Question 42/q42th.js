"use strict";
// Question No.42
Object.defineProperty(exports, "__esModule", { value: true });
function real_magicians(magacians) {
    for (const magician of magacians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//Task 42
function add_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ["syed", "inshal", "abbas"];
add_great(magicians2);
real_magicians(magicians2);
