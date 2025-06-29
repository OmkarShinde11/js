// Promise are object with key data which is initially undefined.
// whenever promise is resolved then the responce is come in that data key and promise is fullfilled.
// Promise have 3 state 'Pending','fullfield','rejected'.
//Promise is an object representing the eventual completion or failuar of async operation.

// Before Promise we use callback 
//Using callback we have two main issue 1:)Inversion of Control 2:)callback hell;

                                              // Inversion of Control.

// using Callback

// function orderApi(callback){
//     console.log('Order Create Successfully.');
//     callback();
// }
// function paymentProcess(){
//     console.log('Payement Done');
// }
// orderApi(paymentProcess)

// // Using Promise
// function orderApi(){
//     return new Promise((resolve,reject)=>{
//         let data=true
//         if(data){
//             resolve('Done')
//         }
//         reject('Error')
//     })
// }

// orderApi().then(()=>{
//     console.log('Promise is resolved');
// })

// orderApi().catch(()=>{
//     console.log('Promise is rejected');
// })

                                    // Callback Hell
// Using Callback

// function orderApi1(callback,callback2){
//     console.log('Order Create Successfully.');
//     callback(callback2);
// }
// function paymentProcess1(callback2){
//     console.log('Payement Done');
//     callback2();
// }
// function orderHistory(){
//     return 'Order history shown'
// }
// orderApi1(paymentProcess1,orderHistory);

// Using Promise

function orderApiPromise(){
    return new Promise((resolve,reject)=>{
        let data=true;
        if(data){
            resolve();
        }
        reject();
    })
}

function paymentProcessPromise(){
    return new Promise((resolve,reject)=>{
        let data=true;
        if(data){
            resolve();
        }
        reject();
    })
}

function orderhistoryPromise(){
    return new Promise((resolve,reject)=>{
        let data=true;
        if(data){
            resolve('History Shown');
        }
        reject();
    })
}

orderApiPromise().then(()=>{
    return paymentProcessPromise();
}).then(()=>{
    return orderhistoryPromise();
}).then((res)=>{
    console.log(res)
})
