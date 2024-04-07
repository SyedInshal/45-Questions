// Question No.30

let users: string [] =["syed", "inshal", "abbas", "zaidi", "admin"];

for(let user of users){
    if(user === "admin"){
    console.log("Hello admin, would you like to see a status report?")
    }

else{
    console.log(`Hello ${user}, thank you for logging in again.`)
}
}