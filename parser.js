const myInfo = `{
    "name": "Moloro",
    "email": "Moloro@gmail.com",
    "age": 23,
    "hobbies": [
        "Cooking",
        "Reading"
    ]
}`

const Data = JSON.parse(myInfo);
console.log(Data);

const results = JSON.stringify(Data);

//displaying the results in uppercase
console.log(results.toUpperCase());