// here async is a keyword which is used before the function to run as a asynchronous function.
// so async if you used before the function so that function return a promise always.
// so if your function return itself as a promise for e.g.
async function promise(){
    return new Promise((resolve,reject)=>{
        resolve('Done');
    })
}

console.log(promise());

// if your function is not return a promise it return a value object or array so return that value as a promise.

async function random(){
    return 'Namaste'
}
console.log(random());
// Output: Promise {'Namaste'}

// and to get that value we use .then method to get that value. 
random().then((res)=>{
    console.log(res)
})

// async and await combo are use to handle a promise.

//await can only be use inside an async function.

async function random1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done') 
        },5000)
    })
};

// here random1 is handled by await it means promise handle by await.
// output:done,callled
// async function handlePromise(){
//     const data=await random1();
//     console.log(data);
//     console.log('called');
// }
// handlePromise();


// here random1 is handled by .then means promise is handled by .then and 
// output is called,Done
random1().then((data)=>{console.log(data)});
console.log('called');

// So the difference is when you handle promise by .then so it not wait to resolve the promise and it execute the below code & when you handle the promise by await so it wait to reolve the promise and then it execute below code.




let result=Promise.resolve('app');
console.log(result);


// tricky e.g. of async await
// here in below code p1 and p2 are store in memory phase when code execution phase settimeout place in apis and after complete time it place in callback 
// here one setitmeOut of p2 is done first because it have 5000 and p1 is done after 10000
// so when function execute it wait for 10s to complete p1 and console result and immediately next p2 result console it
// here in our code p1 is called first so it wait for 10 second till that time p2 also resolved.
// we use await so await not actually stop js code executionn till that mention time or required time it suspended that function call 
// once we get an data or timer is close it put again in callstack and run from last stage where it suspended.


let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('First Promise')
        },10000)
    })


let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Second Promise')
        },5000)
    })


let random_1=async()=>{
    let data1=await p1;
    console.log(data1);
    console.log('p1 resolved');

    let data2=await p2;
    console.log(data2);
    console.log('p2 resolved');
};

random_1();

// fetch  work first of all fetch return promise then we get Responce which need to convert in json so we do .json() it again return promise .
// use try catch for error handaling
async function githubApiCall(){
    try{
        let url='https://api.github.com/users/OmkarShinde11';
        let data=await fetch(url);
        let res=await data.json()
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

githubApiCall();