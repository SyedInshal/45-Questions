// Question No.43


function real_magicians(magacians: string []): void {
    for (const magician of magacians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    
    }
}

const magician: string[] = ["syed", "inshal", "abbas"];
real_magicians(magician);

// Task 43


function add_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    
    }
    return greatMagicians;
}

const magicians3 : string[] = ["syed", "inshal", "abbas"];


const greatMagicians2: string[] = add_great2(magicians3)
real_magicians(magicians3);
real_magicians(greatMagicians2);
