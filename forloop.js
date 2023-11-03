let subjects = ['project management', 'system support', 'information security','database management'];

let i = 0; //initialization of counter

let len = subjects.length; //the length of the array;

let course =  " ";//to add space t the beginning

for(;i<len;){
    course+=subjects[i+'']+ "\n";
i++; //increment the counter
}

console.log(course);


