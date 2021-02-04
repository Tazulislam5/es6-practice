class student {
    constructor(id, name){
         this.id = id;
         this.name = name; 
         this.schoolName = "adamjee cantonment college";                                                                                                                      
    }
}

const student1 = new student(12, "abir");
const student2 = new student(34, "babul");
const student3 = new student(18, "abid");

console.log(student1.name, student2, student3);