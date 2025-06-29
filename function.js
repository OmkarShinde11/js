//NOTE: when function is declare with function keyword it treat as function and during memory phase it store a function body.but when we assign a function to a variable or then it treat as a variable and in memry execution it store undefined.


// in javascript function are fist class citizens.
// what is call first call functions in javascript.
// => a function can be passed as an arrgument to another function, it can be return by another function and also it assign to a variable.


//function statment
function v(){
    console.log('a')
}
v();

// function expression  // Assign to a variable.

var a=function x(){
    console.log('x');
}
a();

// Diff between fn statment and fn expression is hoisting we can't access fn expression before it's initialize because in memory space it have a memory initalize is undefined.

// function deceleration 
//function deceleration is also known as function statment

// Passing function as an arrgument.

function getMessage(){
    return 'Hello '
}

function showMessage(call,name){
    return call() + name;
}

console.log(showMessage(getMessage,'Omkar'));

//named function expression.

// so in global scope there is memory is allocated to b which is fn then fn invocation is called then function execution is created and here memory allocate to random and in that scope the you have the access of random in global scope there is no memory allocate to random
var b=function random(){
    console.log(random);
};

console.log(b());
// console.log(random());




