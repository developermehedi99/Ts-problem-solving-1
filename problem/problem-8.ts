{
    // Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

    class Car {
        brand:string;
        model:string;
        year:number;

        constructor(brand:string, model:string, year:number){
            this.brand=brand,
            this.model=model,
            this.year=year
        }
        
        displayInfo(){
            return `this car is ${this.brand} and its model is ${this.model} publish ${this.year} year.`
        }
    }
    const disPlayCar = new Car("Mountain", "23vt",2022);
    console.log(disPlayCar.displayInfo())

}