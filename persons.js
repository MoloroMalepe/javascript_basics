//lets create a constructor function
function Person(name, age) {   

    this.name = name;
    this.age = age;
}

//then we create two persons objects

//let john = new Person("John", 23);
let jane = new Person("Jane",24);


let john = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    }
console.log(john.firstName+" "+jane.name);//displaying their names for both john and jane
console.log(jane.age+" "+john.age);//displaying their age for both jane and john


//another example

function Students(name, age, course) {   

    this.name = name;
    this.age = age;
    this.course = course;
}
//assigning the values for the students

//let lory = new Students("Moloro",24,"Full-stack");
//console.log("Name:"+lory.name+" Age:"+lory.age+" Course:"+lory.course);//displaying their