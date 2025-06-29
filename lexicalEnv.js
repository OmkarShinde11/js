// lexical Enviroment
var n=4;
function a(){
    b()
    function b(){
        console.log(n);
    }
}
a();

// here n is declare in outer scope and then a() fn invoction is call 
// in memory execution variable and function have thier own memory 
// during code execution when code reach to a() it create a function execution context and there is function b() which is assign in that memory and then b() function call and then seperate function execution is created for that b() and here the console.log(n) is there so first it search in local memory of b it it's not there it search in memory of a if it's not there then it's search in global memory and if it's there it print in console otherwise it give an error.

// so searchinga variable inside  of its parent lexical enviroment and its parent lexical enviroment then this chain is called a scope Chain

// Scope: Where you can acess a variable and function.

// lexical Enviroment: it is the local memory and it's parent lexical enviroment.