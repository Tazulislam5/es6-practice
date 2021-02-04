class father{
    constructor(){
        this.fatherName = "md akbar hossain";
    }
}




class child extends father{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new child("saifa");
const baby2 = new child("nuhel");
console.log(baby.getFullName(),baby2);