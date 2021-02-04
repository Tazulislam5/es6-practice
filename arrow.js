// const doubleIt = function(num){
//     return num*2;
// }
// old method
// function doubleIt(num){
//     return num*2;
      
// }
//es6 

const doubleIt = num => num * 2;

const add = (x, y) => x + y;

const add5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(6);
const result2 = add(50, 50);
const result3 = add5();
const result4 = doMath(4, 2);
console.log(result4);