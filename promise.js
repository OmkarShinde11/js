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

// function order(){
//     console.log('Your Shoe order is Confirmed.pls proceed for payment');
//     function ProcessPayment(){
//         console.log('Payment Successfully done. See the orderHistory');
//         function ShownHistory(){
//             console.log('OrderHistory Shown,Check Wallet');
//             function CheckUpdateWallet(){
//                 console.log('Wallet Updated');
//                 return;
//             }
//             CheckUpdateWallet();
//         }
//         ShownHistory();
//     }
//     ProcessPayment();
// }
// order();

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

// when there is an chain of promise then in each chain return should be there.
orderApiPromise().then(()=>{
    return paymentProcessPromise();
}).then(()=>{
    return orderhistoryPromise();
}).then((res)=>{
    console.log(res)
})
