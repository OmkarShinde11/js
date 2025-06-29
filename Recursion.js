// function random(n){
//     if(n===2){
//         return;
//     }
//     console.log(n);
//     random(n+1);
//     console.log(n);
// }
// random(0);

// below code is written for print numbers from N to 1

// function print(n){
//     if(n==0)return;
//     console.log(n);
//     print(n-1);
// };
// print(5);
// print(2);

// below code is written for print numbers from 1 to N

// function print(n){
//     if(n==0){
//         return;
//     }
//     print(n-1);
//     console.log(n);
// }
// print(4);
// print(5);


// function print(n,k){
//     if(n==0)return;
//     console.log(k);
//     print(n-1,k+1);
// }
// print(4,1);
// print(5,1);

// this is non-tail recursion soluction for factorial number
function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(4));

// this is tail recursion soluction for factorial number
function factTail(n,k){
    if(n==0 || n==1){
        return k;
    }
    return factTail(n-1,k*n);
}
console.log('factTail',factTail(4,1));

// this is non-tail recursion soluction
function log(n){
    if(n==1) return 0;
    return 1+log(n/2)
}
console.log(log(16));

// this is tail recursion soluction
function logTail(n,k){
    if(n==1) return k;
    return logTail(n/2,n/2+k)
}
console.log('logTail',logTail(4,1));

let series=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
function nthNumber(arr,n){
    return arr[n];
}
console.log(nthNumber(series,4));

// recursive function for find out fibbonachi number.

function findNth(n){
    if(n<=1)return n;
    return findNth(n-1) + findNth(n-2);
}
console.log('fibbonachi number',findNth(2));

// this is tail recursion for sum of n natural number.
function sum(n,k){
    if(n==0)return k;
    return sum(n-1,n+k);
}
console.log(sum(5,0));
console.log(sum(4,0));
console.log(sum(2,0));

// this is non-tail recursion for sum of natural numbers
function sumNonTail(n){
    if(n==0)return 0;
    return n+sumNonTail(n-1);
}
console.log(sumNonTail(5));

// palidrome recursive 
let str='aassaa';
function ispalidrome(str,start,end){
    if(start>=end)return true;
    if(str[start]===str[end]){
       return ispalidrome(str,start+1,end-1);
    }else{
        return false;
    }

}
console.log(ispalidrome(str,0,str.length-1));

// this is tail recursion
function sumOfDigit(num,k){
    if(num==0)return k;
    return sumOfDigit(Math.floor(num / 10),k+num%10)
}
// this is non tail recursion
function sumOfDigitNonTail(num){
    if(num==0)return 0;
    return sumOfDigitNonTail(Math.floor(num/10)) + num %10;
}
console.log(sumOfDigit(234,0));
console.log('non-Tail;',sumOfDigitNonTail(234));

function cutRope(n,a,b,c){
    if(n==0)return 0;
    if(n<0) return -1;
    let res=Math.max(cutRope(n-a,a,b,c),cutRope(n-b,a,b,c),cutRope(n-c,a,b,c));
    if(res==-1){
        return -1;
    }
    return res+1;
}

console.log(cutRope(23,11,9,12));

function addWord(n,word="a"){
    if(word.length >=n) return word[n-1];
    word=modified(word);
    return addWord(n,word);
}
function modified(word){
    let str=word;
    for(let i=0;i<word.length;i++){
        let char=word.charCodeAt(i)+1;
        char=char===122 ? 97:char;
        str+=String.fromCharCode(char);
    };
    return str;

}
console.log(addWord(5));
console.log(addWord(10));


const sampleData = [
    { key: "sample1", value: "Data1" },
    { key: "sample1", value: "Data2" },
    { key: "sample2", value: "Data3" },
    { key: "sample3", value: "Data4" },
    { key: "sample2", value: "Data5" },
    { key: "sample4", value: "Data6" },
    { key: "sample1", value: "Data7" },
];
function random(data){
    let arr=[];
    data.forEach(element => {
        if(!arr.includes(element.key)) arr.push(element.key);
    });
    console.log(arr);
    let obj={};
    arr.forEach((item,index)=>{
        obj[item]=sampleData.filter((ele)=>ele.key===item);
    })
    console.log(obj);
}
random(sampleData)

function unique(arr){
    let set=new Set();
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            for(let k=0;k<arr.length;k++){
                if(i!=j && j!=k && k!=i){
                    if(arr[i]!==0 && arr[k]%2==0){
                        set.add(100 * arr[i] + 10 * arr[j] + arr[k]);
                    }
                }
            }
        }
    }
    console.log(set);
    return set;
}
unique([1,2,3,4]);


function generateSubsets(input) {
    const result = [];
  
    function backtrack(current, index) {
      if (index === input.length) {
        result.push(current);
        return;
      }
  
      // Include current character
        backtrack(current + input[index], index + 1);
  
      // Exclude current character
      backtrack(current, index + 1);
    }
  
    backtrack("", 0);
    return result;
  }
console.log(generateSubsets('abc'));



// find a subset of given array.
function findSubset(arr){
    let result=[];
    backtrack(arr,0,[],result);
    return result
}
function backtrack(arr,index,curArr,result){
    if(index===arr.length){
        result.push([...curArr]);
        return;
    }
    curArr.push(arr[index]);
    backtrack(arr,index+1,curArr,result);
    curArr.pop();
    backtrack(arr,index+1,curArr,result);
}

console.log(findSubset([1,2,3]));