let student = {
    firstName  : "Juliana",
    lastName   : "Carpe",
    myFunction : function() {
      return this;
    }
  };
  console.log(student.myFunction());//displays everything including the variable names and function names
  console.log(student.firstName, student.lastName);//displays the data only