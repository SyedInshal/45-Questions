"use strict";
// Question No.28
Object.defineProperty(exports, "__esModule", { value: true });
let age = 17;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult.");
}
else {
    console.log("person is an elder.");
}
