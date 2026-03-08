// Recursion
// A function calling itself again until the certain condition is met.
// Basic E.g.
var count=0;
function print(){
    if(count==3) return ;
    console.log(count);
    count++;
    print();
};

print();
// So here print function call it again and again until count==3
// So when it call again and agian so each call is store in memory and when last is return then one by one function are removed from memory.


// Print names n times

function printName(i,n){
    if(i==n)return;
    console.log('Omkar');
    printName(i+1,n);
};
printName(0,3);

// Print 1 to n linearly

function printNumbers(i,n){
    if(i>n)return;
    console.log(i);
    printNumbers(i+1,n);
}
printNumbers(1,3);

// Print n to 1 

function reversePrint(i,n){
    if(i<n) return;
    console.log('reverse',i);
    reversePrint(i-1,n);
};
reversePrint(3,1);


// Print 1 to n using backtracking
function printNumberBackTrack(i,n){
    if(i<n) return ;
    printNumberBackTrack(i-1,n);
    console.log('backTrack',i);
}
printNumberBackTrack(3,1);

// So over here we have to print 1 to n but in code we start witn n to 1 and after each function it console the value of i so here when base condition met one by one function return and print the below code.

// Print n to 1 using backtracking
function printNumber2BackTrack(i,n){
    if(i > n) return;
    printNumber2BackTrack(i+1,n);
    console.log('backTrack2',i);
};
printNumber2BackTrack(1,3);


// sum of n numbers
// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     console.log(sum);
//     return sum;
// };
// sum(3);

// Recrsive way
// Parameterized Way
function sum(n,result=0){
    if(n<1){
        console.log(result);
        return result
    }
    result+=n;
    sum(n-1,result);
};
sum(3);

// functional Way. 
function sum1(n){
    if(n<1){
        return 0;
    }
    return n + sum1(n-1);
};
console.log(sum1(3));

// factorial of n
// parameterized Way
function factorial1(n,result=1){
    if(n<1){
        console.log(result);
        return result;
    };
    result*=n;
    factorial1(n-1,result);
};
factorial1(4);
factorial1(3);

// functional Way
function factorial(n){
    if(n==1){
        return n;
    };
    return n * factorial(n-1);
};
console.log(factorial(4));
console.log(factorial(3));


function reverseArr(arr){
    let start=0;
    let end=arr.length-1;
    while(end > start){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    };
    console.log(arr);
    return arr;
}
reverseArr([5,8,3,0,6]);

function reverseArrRecursive(arr){
    let start=0;
    let end=arr.length-1;
    while(end > start){
        reverse(arr,end,start);
        start++;
        end--;
    };
    console.log('recursive',arr);
}
function reverse(arr,end,start){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
}
reverseArrRecursive([5,8,3,0,6]);

function validPalidrone(str,i=0){
    let n=str.length;
    if(i>=n/2) return true;
    if(str[i] !== str[n-i-1])return false;
    return validPalidrone(str,i+1);
}
console.log(validPalidrone('madam'));


function fibbonachi(n){
    if(n <=1)return n;
    let last=fibbonachi(n-1);
    let secondLast=fibbonachi(n-2);
    return last + secondLast;
}

console.log(fibbonachi(4));