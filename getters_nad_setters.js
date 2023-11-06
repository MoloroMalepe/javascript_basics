const student = {
    //data property
    firstName: 'Moloro',
    surname: 'Malepe',
    //accessor property
    get getName() {
        return this.firstName;
    },
    //mutator property

get getSurname(){
    return this.surname;
},
//setting property
set changeName(newName) {
    this.firstName = newName;
    return this.newName;
}
};

console.log("Name: "+student.getName);
console.log("Surname: "+student.surname);

//assign a new name to first name
student.changeName= "Stephanie";

console.log("New name: "+student.firstName)

