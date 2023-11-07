class Citizen{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    addAddress(add){// set method to add address
        this.add = add;
    }
    getDetails(){
        console.log(`Name of this resident is ${this.name}, with id ${this.id}
                      residing at ${this.add}`);
    }
    
}
module.exports = {Citizen}
