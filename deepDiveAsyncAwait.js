// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Done');
//     },10000)
// })


// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Done2');
//     },5000)
// })

// const handlePromise=async ()=>{
//     console.log('Execution Start');
//     let result1=await p1;
//     console.log('Promise P1 resolved');
//     console.log(result1);

//     let result2=await p2;
//     console.log('Promise P2 resolved');
//     console.log(result2);
// };

// handlePromise();

// ABOVE CODE WORKING BEHIND THE SCEENS
// so here in callstack the handlePromise is push and it execute the code
// so 1st it print execution start.
// then it goes to let result1=await p1; this line so from callstack the handlePromise is suspended until the promise is reoloved till that time the callstack is empty 
// once promsie is reolved then it again push in callstack and it start the execution where it left and then console and responce come from promise it printed.
// it goes to  let result2=await p2; but here you see that the promise is resolved first so function is not suspended and then console and responce come from promise2 is printted.


// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Done');
//     },5000)
// })


// const p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Done2');
//     },10000)
// })

// const handlePromiseReverse=async ()=>{
//     console.log('Execution Start');
//     let result1=await p3;
//     console.log('Promise P1 resolved');
//     console.log(result1);

//     let result2=await p4;
//     console.log('Promise P2 resolved');
//     console.log(result2);
// };

// handlePromiseReverse();

// ABOVE CODE WORKING BEHIND THE SCEENS
// so here in callstack the handlePromise is push and it execute the code
// so 1st it print execution start.
// then it goes to let result1=await p3; this line so from callstack the handlePromise is suspended until the promise is reoloved till that time the callstack is empty 
// once promsie is reolved then it again push in callstack and it start the execution where it left and then console and responce come from promise it printed.
// it goes to  let result2=await p4; here the function suspended again because the promise is not resolved and till that time callstack is empty
// once it resolved it again push into callstack and it execute below code.

//Real World E.g.
let ApiUrl='https://api.github.com/users/OmkarShinde11';

async function getUsers(){
    try{
        let userData=await fetch(ApiUrl);
        userData=await userData.json();
        console.log('userData',userData);
    }
    catch(err){
        console.log(err);
    }
}
getUsers();
console.log('1St');