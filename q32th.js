"use strict";
// Question No.32
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["admin", "syed", "mesum", "mohib", "kashan"];
let new_users = ["admin", "moazzam", "shayan", "hassn", "moeed"];
let users_lower = users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_user}, is still available in list`);
    }
}
