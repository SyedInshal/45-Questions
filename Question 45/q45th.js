"use strict";
// Question No.45
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const myCar = createCar("Porshe", "911", { color: "black", year: "2020" });
console.log(myCar);
