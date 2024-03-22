// Question No.16
var guestArray = ["Mesum", "Mohib", "Kashan"];
var canNotAttend = "Mesum";
// Invite New Guest
var newGuest = "Ali";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// Send Message
// guestArray.map((items)=> console.log(`Hello, ${items} You Are Invited To Dinner`));
console.log("welcome all we found a bigger dinner table");
guestArray.unshift("Moazzam");
var middleGuest = "Rafay";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("Moeed");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
