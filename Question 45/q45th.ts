// Question No.45

type car = {
    manufacture: string
    model: string
    [key: string]: any;

}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar: car = createCar("Porshe", "911", {color: "black" , year: "2020"})
console.log(myCar)