// Question No.24

let car: string = 'porshe';
let age: number = 17;
let numbers: number[] = [1, 2, 3, 4];

// *String test*

// Test 1: Equality (True)
console.log("Is Car === 'porshe'? I predict True. ");
console.log(car === 'porshe'); // True (Case insensitive)

// Test 2: Strict Equality (Fasle)
console.log("Is Car === 'Porshe'? I predict Fasle.");
console.log(car === 'Porshe') // False (case Sensitive)

// Test 3: Inequality (True)
console.log("Is Car != 'Civic'? I predict True.");
console.log(car != 'Civic'); // True

// Test 4: Inequality (False)
console.log("Is Car !== 'porshe'? I predict False.");
console.log(car !== 'porshe'); // False (case sensitive)

// *LowerCase Function Tests*

// Test 5: LowerCase Conversion (True)
console.log("Is car.toLowercase() == 'porshe'? I predict True.");
console.log(car.toLowerCase() =='porshe'); // True (Converted to lowercase)

// Test 6: lowerCase conversion (False)
console.log("Is car === car.tolowercase()? I predict False.");
console.log(car > car.toLowerCase()); // False (original value remains in uppercase)

// *Numerical Test*

// Test 7: Equality (True)
console.log("Is age == 17? I predict True.");
console.log(age == 17); // True

// Test 8: Inequality (False)
console.log("Is age == 25? I predict False.");
console.log(age == 25); // False

// Test 9: Greater Than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

// Test 10: Less Than Or Equal (True)
console.log("Is age <= 17? I predict True.");
console.log(age <= 17); // False

// *Logical Operators Or logic Gates*

// Test 11: AND (True)
console.log("Is age > 10 && age < 20? I predict True.");
console.log(age > 10 && age < 20); // True

// Test 12: OR (False)
console.log("Is age > 30 || age < 10? I predict False.");
console.log(age > 30 || age < 10); // False

// *Array Test*

// Test 13: In Array (True)
console.log("Is 3 in numbers? I predict True");
console.log(3 in numbers);

// Test 14: Not In Array (False)
console.log("Is 5 not in numbers? I predict False");
console.log(5 in numbers); // False
