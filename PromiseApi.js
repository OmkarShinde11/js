// Promise.all
// It's use case is when we have to call a api call parell. so it takes a array of promises and return a output in a array where all promise resolved value are there
//Promise.all wait for all promise to resolved. if all promise are resolved then it give a output //this is success case
// In failuar case Promise.all if any promise is rejected then it immediately throw an error of rejected promise it not wait for other promise to resolved.

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('Promise.all P1 Success')},3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(' Promise.all P2 Success')},1000)
    // setTimeout(()=>{reject('P2 Fail')},1000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(' Promise.all P3 Success')},2000)
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})


// Promise.allSettled
// It's usecase is when we have to call a api call parell. so it takes a array of promises and return a output in a array where all promise resolved value are there
//Promise.allsettled wait for all promise to resolved. if all promise are resolved then it give a output //this is success case
// In failuar case Promise.allSettled if any promise is failed or rejected it wait for other promise to settled so here output is always an array with thier respective value and error.


const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P1 Success')},3000)
})
const p5=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve('P2 Success')},1000)
    setTimeout(()=>{reject('P2 Fail')},1000)
})
const p6=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P3 Success')},2000)
})

Promise.allSettled([p4,p5,p6]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
// OUTPUT
// [
//   { status: 'fulfilled', value: 'P1 Success' },
//   { status: 'rejected', reason: 'P2 Fail' },
//   { status: 'fulfilled', value: 'P3 Success' }
// ]

// Promise.race
// Promise.race also take an array of promises but it return not all promises. it return a promise which wll resolved or rejected first it will return that only if resolved output is value of that promise if rejected then output is error.


const p7=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P1 Success race')},1000)
})
const p8=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P2 Success race')},1000)
    // setTimeout(()=>{reject('P2 Fail')},1000)
})
const p9=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P3 Success race')},1000)
})

Promise.race([p7,p8,p9]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// Promise.any
// Promise.any also take a array of promises but it return a promise which resolved first if you have multiple promise if any of them are fail then its wait for the promise which is resolved if one promise is resolved then it will give an output of that promise 
// If all promise are rejected then we give a aggregate error where output is array where error of all promises list down one by one in array.

const p10=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P1 Success')},3000)
})
const p11=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve('P2 Success')},1000)
    setTimeout(()=>{reject('P2 Fail')},1000)
})
const p12=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('P3 Success')},2000)
})

// const p10=new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject('P1 fail')},3000)
// })
// const p11=new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject('P2 Fail')},1000)
// })
// const p12=new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject('P3 Fail')},2000)
// })

Promise.any([p10,p11,p12]).then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err)
})