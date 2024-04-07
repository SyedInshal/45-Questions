"use strict";
// Question No.38
Object.defineProperty(exports, "__esModule", { value: true });
function city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
city('Karachi');
city('Toronto', 'Canada');
city('Lahore', 'Punjab');
