class Vehicle{
    constructor(make, name, engine){
        this.make = make;
        this.name = name;
        this.engine = engine;
    }

    get getName(){
        return (`The name of this vehicle is ${this.name}`);
    }
}

let bike = new Vehicle("Kawasaki","suzuki","1240c");
let car = new Vehicle("yaris","Toyota","VVT1");
let truck = new Vehicle("A1","Audi","134e");

console.log(bike.getName);
console.log(`${car.name} is available for sale, its make
    is ${car.make}.`);
    
console.log(`${truck.name} is available for sale, its make 
      is ${truck.make}.`);

