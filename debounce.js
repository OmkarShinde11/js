// User types: Each keystroke triggers the input event.
// Debounce function: The debounce function ensures that the actual performSearch logic is only executed after the user stops typing for the specified delay (e.g., 300ms).
// During typing: If the user keeps typing within the delay period, the previous timer is cleared, and a new timer starts. The function (performSearch) won't run until the user stops typing for at least 300ms.
// e.g.

function getApiCall(inp) {
    console.log('inp:', inp);
}

function debounceFunction(fn, delay) {
    let timer;
    return function () {
        // Retrieve the current input value here
        const inputValue = document.getElementById('input').value;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(inputValue); // Pass the updated value
        }, delay);
    };
}

// Create a debounced function

let debounce = debounceFunction(getApiCall, 300);



// Currying
let sum=function(x){
    return function(y){
        if(y){
            return sum(x+y);
        }
        return x;
    }
}
console.log(sum(1)(2)(3)(4)(5)(6)());

// strp by step execute;
// initial call sum(1) which return the inner function which is
// return function(y){
//     if(y){
//         return sum(x+y);
//     }
//     return x;
// }
// now inner function call with 2 and according to code in an inner function if y is true then we call sum(x+y) which is 3 so again sum(3) is called. which again give an inner function wich is
//  return function(y){
//     if(y){
//         return sum(x+y);
//     }
//     return x;
// }
// now inner function call with 3 and according to code in an inner function if y is true then we call sum(x+y) which is 6 so again sum(3) is called. which again give an inner function  and process continue until we ge as a() arrgument 

// in blank arrgument the condition is not true and we give a all over addition result.


