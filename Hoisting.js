// Hoisting in javascript with variable and function.

var n=4;
function a(){
    console.log('a');
}
console.log(n);
console.log(a);
a();

// here we get a output becaue in memory phase memory is assign and then we call the function and variables.


console.log(m);
console.log(b);
b();
var m=4;
function b(){
    console.log('a');
}

//here we get output in function  if we just print a fn then whole body print and and on fn call whatever return or console it print. In variable case in memory execution we store a undefined.so in that scenario if we try to access before the inoitialization we get a undefined.



// difference between not defined and undefined.
// undefined:A special value in JavaScript.
// Means: “a variable exists, but it has no value assigned yet.”
// Type: "undefined".

// not defined:
// Means the variable has never been declared in the current scope.
// Accessing it throws a ReferenceError.