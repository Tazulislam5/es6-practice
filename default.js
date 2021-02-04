function add(num1, num2 = 20){    //es6 method
    //ager method 1
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    //ager method 2
    // num2 = num2 || 20;
    return num1 + num2;
}

const total = add(32, 23);
console.log(total);