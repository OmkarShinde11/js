'use strict'
// this keyword works differently in strict mode and non strict mode.

// In global Scope
// so in strict mode this will print {} r undefined
// & in non-strict mode it print window object
console.log(this);  // it reffers to a window object  //Window object can be a different like in node.js it is global in browser it is Window 

// In Function Scope
function x(){
    console.log(this);  // so here in function scope this object reffers again window in non strict mode.
}



// So in strict mode this keyword value depend on how function is called.
x();  // if it is called in this way then value is undefind or null.
// window.x() // if its call in this way then value is Window.


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
var name='Sanket';
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

//  so here this keyword reffer to obj4 because here arrow function exclosing context is function so function have this keyword reffer to an obj4.

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


// let a = {
//     i: 1,
//     valueOf() {
//       return this.i++;
//     }
//   };
  
//   if (a == 1 && a == 2 && a == 3) {
//     console.log("True");
//   }

// Q1
// const obj1 = {
//     name: "Omkar",
//     getName: function () {
//       return this.name;
//     }
//   };
  
//   const fn = obj1.getName;
//   console.log(fn());

// Q2
const obj_2 = {
    name: "Omkar",
    getName: () => {
      return this.name;
    }
  };
 
console.log(obj_2.getName());

// Q3
// const obj_3 = {
//     name: "Omkar",
//     getName() {
//       function inner() {
//         console.log(this.name);
//       }
//       inner();
//     }
//   };
// obj_3.getName();

// Q4
const obj_3 = {
    name: "Omkar",
    getName() {
      const inner=() =>{
        console.log(this.name);
      }
      inner();
    }
  };
obj_3.getName();

// Q5
// const obj_5 = {
//     name: "Omkar",
//     greet() {
//       setTimeout(function () {
//         console.log(this.name);
//       }, 1000);
//     }
//   };
  
//   obj_5.greet();

// Q6
// const obj_6 = {
//     name: "Omkar",
//     greet() {
//       setTimeout(() =>{
//         console.log(this.name);
//       }, 1000);
//     }
//   };
// obj_6.greet();

// Q7 Bind Importance
const obj_7 = {
    name: "Virat",
    greet() {
      console.log(this.name);
    }
  };
  
  const fn = obj_7.greet.bind(obj_7);
  fn(); // Omkar