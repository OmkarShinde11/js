// var n=4;
// var random=function getName(){
//     console.log('Hello');
// }

// var random=()=>{
//     console.log('Hello');
// }

// function random(){
//     console.log('Hello')
// }
// console.log(n);
// console.log(random);

// random();


// function execution

// var x=4;
// one();
// two();
// console.log(x);
// function one(){
//     var x=12;
//     console.log(x);
// }
// function two(){
//     var x=100;
//     console.log(x);
// }


// lexical enviroment and scope chain.

// var x=4;
// function a(){
//     b();
//     function b(){
//         c();
//         function c(){
//             console.log('inside functions',x);
//         }
//     }
// };
// console.log('Outside Functions',x)
// a();

// let and const with hoisting and type of errors.


// console.log(b);
// console.log(n);// here Refference error occured where variable are not user before initalize.
// console.log(m)//here Refference error occured where javascript is not found that variable in gloabl scope.(global execution context.)
// var b=10;
// let n=20;
// const y; // here syntax error occured where not execute one line of code.
// const y=20;

// if we assign to let then it give Syntax error.
// let b=70;

//if we reassign to const then it give TypoError
// y=40;


// Block scope and shadowing.

// let b=40
// {
//     var a=20;
//     let b=10;
//     const c=30;
//     console.log(b);
// }

// console.log(b);





// function n(){
//     b=90;
// }
// n();
// b=80;
// console.log(b); 

// var n=10;
// function a(){
//     n=8;
//     console.log(n)
// }
// a();
// console.log(n);


// let n=10;
// function a(){
//      n=8;
//     console.log(n)
// }
// a();
// console.log(n);


// function a(){
//     return function (){
//         console.log('1');
//     }
// };
// a()();

// callback function.
// function a(call){
//     console.log('a');
//     call();
// }
// function y(){
//     console.log('y');
// }
// a(y);






