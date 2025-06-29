// closure

// var n=80;
// function x(){
//     var n=70;
//     return function y(){
//         console.log(n);
//     }
// }
// var z=x();
// console.log(z);
// z();  // output:70

// another e.g.
function x(){
    var a=90
    function y(){
        console.log(a);
    }
    a=80
    return y;
}
var z=x()(); //output:80

// let a=80;
// function x(){
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x()();  // output:80

// same output with arrow function.
// let a=80;
// let z=()=>{
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// z()() 

// closure interview questions. data hiding and garbage collection.

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log('Hello');
// }
// x();
//output : 5,5,5,5,5

// so how we overwrite that problem.

// function random(){
//     for (var i=0;i<=5;i++){
//         function y(num){
//             setTimeout(()=>{
//                 console.log(num);
//             },i*1000);
//         }
//         y(i);
//     };
// }
// random();

// Data Hiding:e.g.

// here var count is accessible from any function and its value is changed. so how we stop this behaviour so we use closure.function

// function count(){
//     var count=0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }

// count()(); // here function increment form a closure with count so here count is also not change without calling count function.

// alterntive way for above one is constructor function.

function Counter(){
    var count=0;
    this.increment=function(){
        count++;
        console.log(count);
    }
    this.decrement=function(){
        count--;
        console.log(count);
    }
}

var counter1=new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();


var counter2= new Counter();
counter2.increment();
counter2.decrement();

//garbage collection: the variables are not furthur used in code or that are unused thooose are stored in garbage collection.
// because of closure the memory space is increased.
//e.g.

function random(){
    var a=0;
    console.log(a);
    return a;
}
random();
// so after random execution var a  is garbage collected so it not increase an memory space.

function a(){
    var n=4;
    return function b(){
        console.log(n)
    }
}
a()(); // here when a() is called then it return b() so execution is gone but the memory is not deleted where b forms a closure with variable n and function a so a()() is called it use the refference of the var so var is not in garbage collection so in this way it increase a memory space.

// in above code first var result=a() so it return function b untile we not call that function result() till that time it is placed in memory its not store in garbage collection.