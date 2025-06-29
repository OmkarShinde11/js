// 1st e.g.
// console.log('begins');
// setTimeout(() => {
//     console.log(2)
// },0);
// Promise.resolve().then(()=>{console.log(3)}).then(()=>{console.log(4)});

//2nd e.g.
// console.log('begins');
// setTimeout(() => {   // callback
//     console.log('setTimeout 1');
//     Promise.resolve().then(()=>{  // microtask
//         console.log('Promise 1')
//     })
// },0);
// new Promise((resolve,reject)=>{
//     console.log('Promise 2');
//     setTimeout(()=>{
//         console.log('settimeout2');// callback
//         resolve("resolve 1")
//     },0)
// }).then((res)=>{
//     console.log('dot then 1'); // microtask
//     setTimeout(() => {
//         console.log(res);// callback
//     }, 0);
// })
// Explaining Output:
// here first begins and promise 2 are print because they placed directly in callstack
// and when memory execution phase rest of code place in callback so settimeout occur first will print settimeout1 and then one promise resolve which place in micotask and it excute & print promise 1
//the below settimeout execute print settimeout 2 and then one promise is resolve so it place in micotask and dot then 1 & resolve1 called.
// OUTPUT
// begins
// Promise 2
// settimeout1
// Promise 1
// settimeout 2
// dot then 1
// resolve1

// 3rd E.g.
// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");// microtask.
//   }
  
//   async function async2() {
//     console.log("async2");
//   }
  
//   console.log("script start");
  
//   setTimeout(function () {
//     console.log("setTimeout");  // callback
//   }, 0);
  
//   async1(); // fn call
  
//   new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
//   }).then(function () { // microtask
//     console.log("promise2");
//   });
  
//   console.log("script end");
// output explanation: in code execution first it print script start
//  then there is one fn call async1 so it print async 1 start
// then in async1 async2 call with await so in async2 it print async 2
// then after await all code goes in micortask 
// so remember til now our call stack (main thread is run) then it print promise 1
// then there is promise resolve so it goes in microtask and then at last script end
// call stack execution over so event loop check micro and callback so in micro first it print async 1 end then promise 2
// and in callback there is one settimeout which is print 
// OUTPUT
// script start.
// async 1 start
// async 2
// promise 1
// script end
// async 1 end
// Promise 2
// settimeout.


//3red e.g.

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });

// OUTPUT
//1
//3
//4
//2

// there is one scenario 
// e.g. if there is code where each function create an new promise and so on 
// so in that case microtask is full so whatever code which in in callback quene is not run so this scenari is called starvation.


async function async1() {
  console.log("async1 start");
  const data=await async2();
  console.log(data);
  console.log("async1 end");// microtask.
}

async function async2() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('async2');
    },5000);
  })
}

// async function async2(){
//   return 'Name';
// }

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");  // callback
}, 0);

async1(); // fn call

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () { // microtask
  console.log("promise2");
});

console.log("script end");
// Output:
// script start
// async 1 start , promise1,script end, async2, async 1 end promise 2 settimeout



// async function abc(){
//   return 'Name'
// }
// // console.log(abc());

// async function xyz(){
//   const result=await abc();
//   console.log(result);
// }
// console.log(xyz());

let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log(1);
      resolve()
  },2000)
});
console.log(2);
let p2=new Promise((resolve,reject)=>{
  setTimeout(() => {
      console.log(3);
      resolve();
  }, 1000);
});
// see when we call promise.all([p1,p2]) then as per settimeout promise are reslved so console print as promise resolved but when you console.log(Promise.all([p1,p2])) then it give output in order of promise which you mention inside promise.all

// In below code .then in that no return stratement so in that case promise resolve immediately and console.log(5) print and then console.log(4) but if there is return statment then 4 and then 5 is print.
var p3=Promise.all([p1,p2]).then(()=>{
  new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log(4);
          resolve();
      },3000);
  })
});

p3.then(()=>{
  console.log(5);
})


