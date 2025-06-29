'use strict'
// this keyword works differently in strict mode and non strict mode.

// In global Scope
console.log(this);  // it reffers to a window object  //Window object can be a different like in node.js it is global in browser it is Window 

// In Function Scope
function x(){
    console.log(this);  // so here in function scope this object reffers again window but in strict mode it is undefined.
}
// so in function scope if the value of this keyword is undefined or null so in that case this will be replace by the window object. and this happens in non strict mode only.

// So in strict mode this keyword value depend on how function is called.
x();  // if it is called in this way then value is undefind or null.
window.x() // i/f its call in this way then value is Window.


// In Object 
const obj={
    name:'Rahul',
    x:function(){
        console.log(this.name);
    }
}
// So in Object scenario this value is reffer to that object. this which is present inside a method which reffer to that object.

// To set a value or modify a value of this there are 3 methods for that is call,apply,bind.
const obj2={
    name:'Omkar',
}
// here i want to use a method x on obj2 but it's not define in that so how you do so here call, apply, bind methods are use.
obj.x.call(obj2);  // so here we change the value of this keyword so now this keyword reffers to obj2.
obj.x();

// this inside Arrow Function
// arrow function don't have thier own binding of this keyword (it retains a value of it's enclosing lexical context)

let obj3={
    name:'Omkar',
    x:()=>{
        console.log('arrow',this);
    }
};
obj3.x();
// here this is reffer to winow or global object because arrow function don't have thier this keyword so it retains it's enclosing context so here enclosing context is obj and obj is present in gloabl so it reffer to global

// this keyword inside nested arrow function.
let obj_4={
    name:'Sid',
    x:function(){
        const y=()=>{
            console.log("nested function then arrow",this.name);
        }
        y();
    }
}
console.log(obj_4.x());

// another e.g.
var name='Random_01';  
let obj4={
    name:'Sid',
    x:()=>{
        const y=()=>{
            console.log("arrow nested",this.name);
        }
        y();
    }
}
obj4.x();
//  so here this keyword reffer to obj4 because here arrow function exclosing context is function so function have this keyword reffer to an obj4.

// this keyword in Dom
// in Dom this keyword reffer to HTMLElement.
// if we add this on button then this reffer to that button.


// this code have different output in node and in javascript.
var name='Random';  
let obj5={
    name:'Sid',
    x:()=>{
        const y=()=>{
            console.log("arrow nested",this.name);
        }
        y();
    }
}
obj5.x();

//  Declaring var name = 'Random'; in a Node.js script does not attach name to global. It creates a local variable within the file (module scope).  The arrow function x inherits this from the module context, where this is an empty object ({}), not global. so we get undefined.

// In Javascript name is reffer to global object which is window so we get name='Random'
