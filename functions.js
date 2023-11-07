
//pure functions
function greeting(name){
    console.log("Hello "+name);
    
    }
    let leina = prompt("Enter your name: ")
    greeting(leina)

//getters and setters

let courses=["javascript","css","angular","typescript","html"];

function func(elements) {

    console.log(elements);

}


courses.forEach(func)


//another function to calculate numbers with assigned values
function calc(num1, num2) {

     num1 = 16;
    num2 = num1 *3;

    return (num1 + num2);
}

console.log("the calculated outcome is: "+calc());

//assign a function to a variable and call the variable when you want to invoke the function:

function calcFunc (num1, num2){

    return num1 + num2;
}
let additionNum = calcFunc(13, 24);
console.log("The output is: "+additionNum);


/*this keyword in object methods


let person = {
    firstname: "Moloro",
    occupation: "Software Engineer",
 get getName() {
    return "My name is" + this.firstname 
    },
};

console.log(firstname.getName);*/

//this keyword used in an object methods




