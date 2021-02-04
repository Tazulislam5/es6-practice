const age = [12, 23, 45, 76, 23];
const age2 = [34, 34, 35, 60, 90];
const age3 = [56, 76, 76, 98, 99];

const allAges = age.concat(age2).concat(age3);

const allAges2 = [...age, ...age2, ...age3];

const num = [12, 345, 667, 867, 88];
const largest = Math.max(...num)

console.log(allAges2);
console.log(largest);