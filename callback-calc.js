function calculator (a,b,operation){
    return operation (a,b);
}

function add(a,b){
return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


console.log(calculator(10,5, add));
console.log(calculator(10,5, sub));
console.log(calculator(10,5, multiply));
console.log(calculator(10,5, divide));
//anonymous function
/*let result = calculator(10,5, function(a,b) {
    return a + b ;
});
console.log (result);*/ 