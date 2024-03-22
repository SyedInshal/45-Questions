// Question No.17
var guestArray = ["Mesum", "Mohib", "Kashan"];
var canNotAttend = "Mesum";
// Invite New Guest
var newGuest = "Ali";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// Send Message
guestArray.unshift("Moazzam");
var middleGuest = "Rafay";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("Moeed");
console.log(guestArray);
// Message : Invite Only Two People On Dinner! 
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nsorry ".concat(removeguest, " we can't invite you for dinner!"));
}
guestArray.map(function (item) { return console.log("\n".concat(item, " you are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
