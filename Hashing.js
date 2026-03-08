// given one array and one number you have to find how many time it appears.
function findOccurence(arr,t){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])||0)+1);
    };
    console.log(map.get(t));
    return map.get(t);
}

findOccurence([1,3,2,1,3,2],1);

// so in above code if there are multiple numbers to find a frequency so each time loop run store frequency
// So Instead of that we use hashing 
// Hashging means preComputes and store and when it required fetch it.

let arr=[1,2,3,4,1,3,2];
function findocc(max,number){
    let hash=new Array(max).fill(0);
    // So here we precompute 
    for(let i=0;i<arr.length;i++){
        hash[arr[i]]+=1;
    };
    console.log(hash);
    // If any query comes which not beyond 12 then we fetch value from hash.
    console.log(hash[number]);
    return hash[number];
};
findocc(12,3);

// character Hashing
// Suppopse you give a string with lowercase and you want to find given charachter apperach how many times.
let str='abfhgtiabfg'
function lowerChar(char){
    let hash=new Array(26).fill(0);
    let aCharCode='a'.charCodeAt(0);
    for(let i=0;i<str.length;i++){
        let diff=str.charCodeAt(i)-aCharCode;
        hash[diff]+=1;
    };
    console.log('strHash',hash);

    // fetch 
    console.log(hash[char.charCodeAt(0)-aCharCode]);
    return hash[char.charCodeAt(0)-aCharCode];
}
lowerChar('t');
lowerChar('g');
lowerChar('x');

// Same code for uppercase
// let aCharCode='a'.charCodeAt(0);
// replace 
// let aCharCode='A'.charCodeAt(0);

// if mixing then 
// create hash size 256 and while storing directly store str.charCodeAt(str[i]);
// While getting also do same.


// find Highest and Lowest
function highLow(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || 0)+1);
    }
    console.log(map);
    let min=Math.min(...map.values());
    let max=Math.max(...map.values());
    let maxKey;
    let minKey;
    // console.log(max,min);
    for(let [key,value] of map){
        if(value==max){
            maxKey=key;
        }
        else if(value==min){
            minKey=key;
        }
    };
    console.log(maxKey,minKey);
    return maxKey,minKey;
};
highLow([10,5,10,15,10,5]);
highLow([2,2,3,4,4,2]);