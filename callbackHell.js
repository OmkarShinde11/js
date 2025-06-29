
function order(paymentCallback, historyCallback,walletCallback){
    console.log('Your Shoe order is Confirmed.pls proceed for payment');
    paymentCallback(historyCallback,walletCallback)
}
function ProcessPayment(historyCallback,walletCallback){
    console.log('Payment Successfully done. See the orderHistory');
    historyCallback(walletCallback);
}
function ShownHistory(walletCallback){
    console.log('OrderHistory Shown,Check Wallet');
    walletCallback();
}
function CheckUpdateWallet(){
    console.log('Wallet Updated')
    return
}

order(ProcessPayment, ShownHistory,CheckUpdateWallet);

// above code is an callback code where we pass three function to order function as callback
// Here the order function is work like as an higher order function where we pass three functions as a arrgument to order function.


function order(){
    console.log('Your Shoe order is Confirmed.pls proceed for payment');
    function ProcessPayment(){
        console.log('Payment Successfully done. See the orderHistory');
        function ShownHistory(){
            console.log('OrderHistory Shown,Check Wallet');
            function CheckUpdateWallet(){
                console.log('Wallet Updated');
                return;
            }
            CheckUpdateWallet();
        }
        ShownHistory();
    }
    ProcessPayment();
}
order();
// here in above code we are implementing an callback hell where once order is call then order call rest of function so in this way we lost control of our code.
// so using callback we have 2 main problem Callback Hell & Inversion of Control