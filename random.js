// function orderApiPromise(){
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data){
//             resolve();
//         }
//         reject();
//     })
// }

// function paymentProcessPromise(){
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data){
//             resolve();
//         }
//         reject();
//     })
// }

// function orderhistoryPromise(){
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data){
//             resolve('history done');
//         }
//         reject();
//     })
// }

// orderApiPromise().then(()=>{
//     return paymentProcessPromise();
// }).then(()=>{
//     return orderhistoryPromise();
// }).then((res)=>{
//     console.log(res);
// })


// let a1=[
//     {id:0,Name:'Omkar',age:24},
//     {id:1,Name:'Sid',age:28},
//     {id:2,Name:'Raj',age:29},
//     {id:3,Name:'Rak',age:24},
// ];

// a1.map((el)=>{
//     el.state='Maharashatra'
// });

// console.log(a1.map((el)=>{
//     el.state='Mahashatra';
// }));
// console.log(a1);

// let output=a1.reduce((acc,curr)=>{
//     if(acc[curr.age])acc[curr.age]++;
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});
// console.log('ageOut',output);

// let output2=a1.reduce((acc,curr)=>{
//     if(curr.age<25) acc.push(curr.Name);
//     return acc;
// },[]);
// console.log(output2);

// let p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('First Promise')
//     },5000)
// })

// let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Second Promise')
//         },10000)
//     })


// let random_1=async()=>{
//     let data1=await p1;
//     console.log(data1);
//     console.log('p1 resolved');

//     let data2=await p2;
//     console.log(data2);
//     console.log('p2 resolved');
// };

// random_1();


// let obj_1={
//     name:'Omkar',
//     age:23
// };

// function printName(){
//     return `info details: ${this.name} have age ${this.age}`;
// };

// let result= printName.bind(obj_1);
// console.log(result());

// Function.prototype.myBind=function (...args){
//     let obj=this;
//     let options=args;
//     return function(){
//         obj.call(options);
//     }
// }

// let result_1= printName.bind(obj_1);
// console.log(result_1());


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(1);
        resolve()
    },2000)
});
console.log(2);
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(3);
        resolve();
    }, 1000);
});
// see when we call promise.all([p1,p2]) then as per settimeout promise are reslved so console print as promise resolved but when you console.log(Promise.all([p1,p2])) then it give output in order of promise which you mention inside promise.all

// In below code .then in that no return stratement so in that case promise resolve immediately and console.log(5) print and then console.log(4) but if there is return statment then 4 and then 5 is print.
var p3=Promise.all([p1,p2]).then(()=>{
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(4);
            resolve();
        },3000);
    })
});

p3.then(()=>{
    console.log(5);
})

// const p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve('Promise.all P1 Success')},3000)
// })
// const p5=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(' Promise.all P2 Success')},1000)
//     // setTimeout(()=>{reject('P2 Fail')},1000)
// })
// const p6=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(' Promise.all P3 Success')},2000)
// })

// Promise.all([p4,p5,p6]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })



// call apply bind with bind polyfill.

// let obj={
//     name:'Omkar',
//     age:23
// };

// function printInfo(){
//     return `${this.name} have age ${this.age}`;
// };

// const result=printInfo.call(obj);
// console.log('call ',result);

// console.log('apply ', printInfo.apply(obj));

// const output=printInfo.bind(obj);
// console.log('Bind ',output());

// Function.prototype.myBind=function(...args){
//     let obj=this;
//     let options=args.slice(1);  
//     return function (){
//         return obj.apply(args[0],options);
//     }
// };

// const bindOut=printInfo.myBind(obj);
// console.log(bindOut());


function findXSum(arr,k,t){
    let result=[];
    let sum=0;
    let map=new Map();
    for(let i=0;i<k;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    };
    sum=getSum(map,t);
    result.push(sum);

    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]==undefined)break;
        map.set(arr[i-1],map.get(arr[i-1])-1);  //here we have to keep a sliding window of k only 
        if(map.has(arr[i+k-1])){
            map.set(arr[i+k-1],map.get(arr[i+k-1])+1);
        }else{
            map.set(arr[i+k-1],1);
        }
        sum=getSum(map,t);
        result.push(sum);
    }
    console.log(result);
    return result

};
findXSum([1,1,2,2,3,4,2,3],6,2);

function getSum(map,x){
    let sum=0;
    let arr=Array.from(map.entries());
    arr=arr.sort((a,b)=>{
        if(a[1]===b[1]){
            return b[0]-a[0];
        }
        return b[1]-a[1];
    }).slice(0,x);
    // console.log(arr);
    const newMap=new Map(arr);
    // console.log(newMap);
    for(let [key,value] of newMap ){
        sum+=key*value;
    };
    // console.log(sum);
    return sum
    
}

function numOfSubarrays(arr,k,t){
    let sum=0;
    let count=0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    };
    if(sum/k>=t)count++;

    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]===undefined)break;
        sum-=arr[i-1];
        sum+=arr[i+k-1];
        if(sum/k>=t)count++;
    };
    console.log('count ',count );
    return count;

}

numOfSubarrays([2,2,2,2,5,5,5,8],3,4);
numOfSubarrays([11,13,17,23,29,31,7,5,2,3],3,5);
numOfSubarrays([1,1,1,1,1],1,0);

function subArrayWithGivenSum(arr,sum){
    let start=0;
    let end=0;
    let output=false;
    let currSum=0
    for(let i=end;i<arr.length;i++){
        currSum+=arr[i];
        while(currSum > sum){
            currSum-=arr[start];
            start++;
        };
        if(sum==currSum){
            output=true;
            console.log(output);
            return true;
        }
    };
    console.log(output);
    return false;
}


subArrayWithGivenSum([1,4,20,3,10,5],33);
subArrayWithGivenSum([1,4,0,0,3,10,5],7);
subArrayWithGivenSum([2,4],3);
subArrayWithGivenSum([1,1,1],2);
subArrayWithGivenSum([1,2,3],3);

// find maximum sum of subarray whoose size is k
function maxSumK(arr,k){
    let sum=0;
    let maxSum=-1;
    for(let i=0;i<k;i++){
        sum+=arr[i];
        maxSum=Math.max(maxSum,sum);
    };

    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]===undefined)break;
        sum-=arr[i-1];
        sum+=arr[i+k-1];
        maxSum=Math.max(maxSum,sum);
    };

    console.log('maxSum',maxSum);
    return maxSum;
}

maxSumK([1,8,30,-5,20,7],3);
maxSumK([5,-10,6,90,3],2);

// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
function lengthOfLongestSubstring(str){
    let set=new Set();
    let start=0;
    let end=0;
    let maxlength=-1
    for(let i=end;i<str.length;i++){
        while(set.has(str[i])){
            set.delete(str[i]);
            start++;
        };
        set.add(str[i]);
        maxlength=Math.max(maxlength,set.size);
    };
    console.log('maxlength of str ',maxlength);
    return maxlength;
}

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');


function minSubArrayLen(arr,t){
    let start=0;
    let end=0;
    let minLength=Infinity;
    let sum=0;
    for(let i=end;i<arr.length;i++){
        sum+=arr[i];
        while(sum >= t){
            minLength=Math.min(minLength,i-start+1);
            sum-=arr[start];
            start++;
        }
    };
    console.log('minLength ',minLength);
    return minLength
}

minSubArrayLen([2,3,1,2,4,3],7);

// 340. Longest Substring with At Most K Distinct Characters
// Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
function longestSubstring(str,k){
    let start=0;
    let end=0;
    let maxLength=0;
    let map=new Map();
    for(let i=end;i<str.length;i++){
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1);
        }else {
            map.set(str[i],1);
        };
        while(map.size > k){
            map.set(str[start],map.get(str[start])-1);
            if(map.get(str[start])==0)map.delete(str[start]);
            start++;
        }
        maxLength=Math.max(maxLength,i-start+1);
    }
    console.log('longestSubstring',maxLength);
}
longestSubstring('eceba',2);
longestSubstring('aa',1);
longestSubstring('a',0);
longestSubstring('aaabc',2);






