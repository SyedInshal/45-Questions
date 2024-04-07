"use strict";
// Question No.44
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy Your Sandwich Syed Inshal");
sandwich("tikka", "fatija", "creamy");
sandwich("chicken", "beef");
sandwich("garlic sauce", "mayo sauce");
