let courses = ["React", "Angular", "Bootstrap", "Javascript", "HTML"];//predefined array


let learners = new Array(3);//Undefined array

learners[0] = 1;
learners[1] = 2;
learners[2] = 3;
let i=0;
console.log("number of learners: "+learners);


let space = " "; //add space between courses
for(; i < courses.length; i++){
  space[i] = courses[i] + ' ';
  console.log(courses[i]);

}
