//callBack & eventListener.
// in settimeout there is fn call which is callback fn which is called after 5 seconds.
// setTimeout(() => {
//     console.log('Operatin is finished');
// }, 5000);

// console.log('a');


// AddEventListener

// here outer fn is globally declare and when event listener is happen it push in to callstack and so here random is inside the outer fn so it have access of the variable let because it present in lexical enviroment of its parent so it change the value of variable when button click. 

function outer(){
    let counter=0;
    document.getElementById('clickMe').addEventListener('click',function random(){
        counter++
        console.log(`Button Cliked ${counter}`);
    })
}

outer();

// NOTE:
// eventListener are so heavy so it increase a memory space and because of closure whatever variable which are use furthur in our code are also not store in garbage collection. so it's important to removeEventListener and also closure will remove and memory is also decreased.