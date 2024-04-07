// Question No.24

let car: string = 'civic';

// test 1: Equality comparison (True)
console.log("Is car == 'civic'? I predict True.");
console.log(car == car); // True

// test 2: Strict equality comparison (True)
console.log("is car === 'subaru'? I predict True.");
console.log(car === 'civic'); //True

// test 3: Inequality comparison (False)
console.log("Is car != 'civic'? I predict False.");
console.log(car != 'civic'); // False

// test 4: Strict Inequality comparison
console.log("Is car !== 'civic'? i predict False.");
console.log(car !== 'civic'); // False

// test 5: Less Than comparison (False)
console.log("Is car < 'civic'? i predict Fasle.");
console.log(car < 'civic'); // Fasle (lexicographic comparsion)

// test 6: greater Than comparison (False)
console.log("Is Car > 'civic'? i predict False.");
console.log(car > 'civic'); // Fasle (lexicographic comparsion)

// test 7:  Less Than Or Equal comparison (True)
console.log("Is Car <= 'civic'? i predict True.");
console.log(car <= 'civic'); // True

// test 8: Greater Than Or Equal comparison (True)
console.log("Is Car >= 'civic'? i predict True.");
console.log(car >= 'civic'); // True

// test 9: Cheaking Truthiness (True)
console.log("Is car? i predict True.");
console.log(car <= 'civic'); // True (non-empty string is truthy)

// test 10:  Cheaking Falsiness (False)
console.log("Is !car? i predict False.");
console.log(!car); // False (negation of a truthy value)
