let globalVar = "global variables";


function fun(){
    let localVar = "Local varibles";

    console.log(localVar + "is useful inside funtions");
}

console.log(localVar + "is not "+ globalVar)