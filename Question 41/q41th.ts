// Question No.41

function real_magicians(magacians: string []): void {
    for (const magician of magacians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    
    }
}

const magician: string[] = ["syed", "inshal", "abbas"];
real_magicians(magician);
