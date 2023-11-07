let school = {
    name: 'Leoma',
    age: 20,
    location: '123 Main St',
    established: 'San Francisco',
    20:1000,

    displayInfo: function(){
        console.log(`Welcome to ${school.name} located at ${school.location}
        which was established in ${school.established} having rating of ${school[20]}`)//for numbers or integers [] are used
    }
}
school.displayInfo();
console.log([school.name]);
console.log(school.name);