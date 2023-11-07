const student = {
    //data property
    firstName: 'Moloro',
    surname: 'Malepe',
    age: 24,
    course: 'Full-stack',
    //accessor property
    get getName() 
    {
        return this.firstName;
    },
    //mutator property

get getSurname(){
    return this.surname;
},
//returning multiple values 
get getDetails(){
    return [this.firstName, this.course, this.age,this.surname];
},
//setting property
set changeName(newName) {
    this.firstName = newName;
    return this.newName;
}
};

console.log("Details: "+student.getDetails);
console.log("Surname: "+student.surname);

//assign a new name to first name
student.changeName= "Stephanie";

console.log("New name: "+student.firstName)

