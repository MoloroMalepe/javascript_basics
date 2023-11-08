const Student  = {
    name :'Stephanie',
    age : 18,
    course :'IT',
     module :'fullstack',
};

const fs =  require('fs');

function writeData(obj) {   

    fs.writeFile('student.json', JSON.stringify(obj), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success');
        }
    });
}

function readData() { 
    fs.readFile('./student.json','utf-8', (err,jsonString) => {
        if(err) {
            console.log(err);
        }
         else {
             try {
                const data = JSON.parse(jsonString);
                console.log(data);
                console.log('Success');
             } catch (error) {
                console.log('Error: ' + err);
             }
            }
        });
    }
    writerData(Student);
    readData();