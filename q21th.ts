// Question No.21

interface item {
    Name: string
    Price: number
}

// create two objects

const book: item ={
    Name: 'Rich Dad Poor Dad',
    Price:79
    
}

const bike: item ={
    Name: 'Ninja H2R',
    Price:400

}
console.log(`Book Name: ${book.Name}, Price $${book.Price}`);
console.log(`Bike Name ${bike.Name}, Price $${bike.Price}K`);