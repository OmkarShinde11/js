const cart=['Shoes','Pants','Kurta'];


function orderCreate(){
    return new Promise((resolve,reject)=>{
        if(validateCart(cart)){
            resolve('JkLMN223545')
        }
        reject('Cart is Not Valid');
    })
}

function proceedToPayment(orderID){
    return new Promise((resolve,reject)=>{
        if(orderID){
            resolve('Payment is Done')
        }
        reject('There is no orderId');
    })
}
orderCreate()
.then((res)=>{
    return proceedToPayment(res);
})
.then(()=>{
    console.log('Paymemt is Done')
    return 'Payment is Done'
})
.catch((err)=>{
    console.log(err);
})


// here the catch block is above the .then so at point .catch block is declare the catch is handle the error for its top then block not to below .then block
// orderCreate()
// .then((res)=>{
//     return proceedToPayment();
// })
// .catch((err)=>{
//     console.log(err);
// })
// .then(()=>{
//     console.log('Paymemt is Done')
//     return 'Payment is Done'
// })



function validateCart(cart){
    return cart.length > 0 ? true:false;  
}
