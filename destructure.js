const person = {name: "abir", age: 12, job: "facebooker", adress: "lalbag", phone:0123445, gfName: "fulkoli"};

// const gfName = person.gfName;
// const phone = person.phone;

const {phone, gfName} = person;

// console.log( phone, gfName);

// const friends = ['sakib khan','amir khan','sharukh khan','arman khan'];
// const [chotoFriend, nextFriends,...restFriends] = friends;
const complexObject = {
    name: 'nishad',
    info:{
        address: 'kolabagan',
        leader: 'tiger'
    }
}
const {leader} = complexObject.info
console.log(leader);