// Question No.15 
var guestArray = ["Mesum", "Mohib", "Kashan"];
var canNotAttend = "Mesum";
console.log("".concat(canNotAttend, " can not make it , for dinner"));
var newGuest = "Ali";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("Hello, ".concat(items, " You Are Invited To Dinner")); });
