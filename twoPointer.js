// Two Sum II - Input Array Is Sorted
function twoSum(arr,t){
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===t){
                result.push(i+1,j+1);
                console.log(result);
                return result;
            }
        }
    };
}
twoSum([2,7,11,15],9);
twoSum([2,3,4],6);
twoSum([-1,0],-1);

function twoSumOpt(arr,t){
    let sum=0;
    let left=0;
    let right=arr.length-1;
    for(let i=0;i<arr.length;i++){
        sum=arr[left]+arr[right];
        if(sum > t) right--;
        else if(sum < t) left++;
        else{
            console.log('OPT',[left+1,right+1]);
            return [left+1,right+1];
        }
    }
}
twoSumOpt([2,7,11,15],9);
twoSumOpt([2,3,4],6);
twoSumOpt([-1,0],-1);

// twoSum
// Unsorted array;

function twoSumUnsorted(arr,t){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        let diff=t-arr[i]
        if(map.has(diff)){
            console.log([map.get(diff),i]);
            return [map.get(diff),i];
        };
        map.set(arr[i],i);
    };
    return [];
}

twoSumUnsorted([8, -1, 2, -3, 7],4);


// Missing Number
// length= n*n+1/2 
// then length-sum
function missingNumber(arr){
    let n=arr.length;
    let length=n*(n+1)/2;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    };
    console.log('missing number',length-sum);
    return length-sum;
}
missingNumber([3,0,1]);
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

// Reverse String
function reverse(str){
    let start=0;
    let end=str.length-1;
    while(end>=start){
        let temp=str[start];
        str[start]=str[end];
        str[end]=temp;
        end--;
        start++;
    }
    console.log(str);
    return str;
};
reverse(["h","e","l","l","o"]);
reverse(["H","a","n","n","a","h"]);


// 88. Merge Sorted Array

function merge(arr1,arr2,m,n){
    arr1=arr1.slice(0,m);
    arr2=arr2.slice(0,n);
    let result=[...arr1,...arr2];
    result=result.sort((a,b)=>a-b);
    console.log('merge',result);
}

merge([1,2,3,0,0,0],[2,5,6],3,3);


// using two pointer
// IMP
// Use 3 pointer one is p =m+n-1 and two are m-1 and n-1;
function mergeOpt(arr,arr2,m,n){
    let left=m-1;
    let right=n-1;
    let p=m+n-1;

    while(right>=0){
        if(right >=0 && arr2[right] > arr[left]){
            arr[p]=arr2[right];
            right--
        }else {
            arr[p]=arr[left];
            left--
        }
        p--;
    };
    console.log('mergeArr OPT',arr);
    return arr;
}
mergeOpt([1,2,3,0,0,0],[2,5,6],3,3);


function isHappy(n) {
    let set=new Set();
    while(n !== 1 && !set.has(n)){
        set.add(n);
        n=giveSum(n.toString());
    };
    console.log(n===1);
    return n===1;
};

function giveSum(str){
    let sum=0;
    for(let i=0;i<str.length;i++){
        sum+=Number(str[i])*Number(str[i]);
    };
    return sum;
};

isHappy(19);
isHappy(2);

// Remove Duplicates from Sorted Array
function removeDuplicates(arr){
    let set=new Set();
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);
    };
    console.log(set.size);
    console.log(Array.from(set));
    return set.size;
};
removeDuplicates([1,1,2]);
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

//  use two pointer only to remove duplicate when arr is sorted.
// When array is not sorted then use extra hash or map.
function removeDuplicatesOpt(arr){
    let left=0;
    let right=1;
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[left]!==arr[right]){
            result.push(arr[left]);
        }
        left++;
        right++;
    };
    console.log('removeDupOpt',result);
}
removeDuplicatesOpt([1,5,5,8,8,10,10]);

// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeroes(arr){
    let zeroCount=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zeroCount++;
            arr.splice(i,1);
            i--;
        }
    };
    for(let i=0;i<zeroCount;i++){
        arr.push(0);
    };
    console.log(arr);
    return arr;
};
moveZeroes([0,1,0,3,12]);


function moveZeroesOpt(arr){
    let left=0;
    let right=0;
    for(let i=0;i<arr.length;i++){
        if(arr[right]===0){
            right++;
        }else{
            let temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            right++;
            left++;
        }
    };
    console.log('ZeroEnd',arr);
}
moveZeroesOpt([0,1,0,3,12]);
moveZeroesOpt([[8,5,0,10,0,20]]);


// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// NOTE: Here you have to find max area of water from two position

// IMP
function findWater(arr){
    let maxArea=-Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            // if(i<j){
                const height=Math.min(arr[i],arr[j]);
                const width=j-i;
                maxArea=Math.max(maxArea,width * height);
            // }
        }
    };
    console.log(maxArea);
    return maxArea;
};
findWater([1,8,6,2,5,4,8,3,7]);


function findWaterOpt(arr){
    let left=0;
    let right=arr.length-1;
    let maxArea=-Infinity;
    for(let i=0;i<arr.length;i++){
        let height=Math.min(arr[left],arr[right]);
        let width=right-left;
        maxArea=Math.max(maxArea,width * height);

        if(arr[left] < arr[right])left++;
        else{
            right--;
        }
    }
}
findWaterOpt([1,8,6,2,5,4,8,3,7]);


// function maximumTotalDamage(arr){
//     let max=-Infinity;
//     let set=new Set();
//     for(let i=0;i<arr.length;i++){
//         let sum=0;
//         sum+=arr[i];
//         set.add(i);
//         for(let j=0;j<arr.length;j++){
//             if(!set.has(j) && arr[j]!==arr[i]-2 && arr[j]!==arr[i]-1 && arr[j]!==arr[i]+2 && arr[j]!==arr[i]+1){
//                 sum+=arr[j]
//             }
//         }
//         max=Math.max(max,sum);
//     }
//     console.log('maxDamage',max``);
// }
// maximumTotalDamage([1,1,3,4]);
// maximumTotalDamage([7,1,6,6]);
// maximumTotalDamage([7,1,6,3])


// Valid Palindrome
function validPalidrone(str){
    if(str==""){
        console.log(true);
        return true;
    }
        let result='';
        for(let i=0;i<str.length;i++){
            let code=str.charCodeAt(i);
            if((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
                result+=str[i].toLocaleLowerCase();
            }
        };
        let start=0;
        let end=result.length-1;
        while(end > start){
            if(result[start]!==result[end]){
                console.log(false);
                return false;
            }
            start++;
            end--;
        };
        console.log(true);
        return true;
}

validPalidrone("A man, a plan, a canal: Panama");
validPalidrone("race a car");
validPalidrone("");
validPalidrone('0P');


// Remove Element
// here it returns number.
var removeElementk = function(arr, val) {
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=val)count++;
    }
    console.log(count);
    return count;
};
removeElementk([0,1,2,2,3,0,4,2],2);


// IMP
// 345. Reverse Vowels of a String
// here pointer initial position is 1 and last then check vowel of left check vowel right 
// if left is not vowel move
// if right is not vowel move .
// if both vowel move both
function reverseVowels(str){
    str=str.split('');
    let left=0;
    let right=str.length-1;
    while(right > left){
        if(isVowel(str[left])){
            if(isVowel(str[right])){
                let temp=str[left];
                str[left]=str[right];
                str[right]=temp;
                left++;
                right--;
            }
            else{
                right--;
            }
        }
        else{
            left++;
        }
    };
    console.log('reverse Vowelse string',str.join(''));
    return str.join('');
}
function isVowel(str){
    return 'aeiouAEIOU'.includes(str);
}

reverseVowels('IceCreAm');
reverseVowels('leetcode');


// 541. Reverse String II
function reverseStr(str,k){
    let arr = str.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, arr.length - 1);

    // reverse first k chars
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  console.log(arr.join(''));
  return arr.join('');
}

reverseStr('abcdefg',2);
reverseStr('abcd',2);
reverseStr('abcdefg',3);

// 821. Shortest Distance to a Character
function shortestToChar(str,c){
    str=str.split('');
    let p;
    let left=0;
    let right=0;
    let arr=[];
    
    for(let i=0;i<str.length;i++){
        let check=false;
        if(str[right]===c){
            check=true;
            while(left!==right){
                if(p!==undefined){
                    let value=Math.min(Math.abs(left-right), Math.abs(left-p));
                    arr.push(value);
                }else{
                    arr.push(Math.abs(left-right));
                };
                left++;
            }
        }
        if(check){
            p=right;
            left=right+1;
            arr.push(0);
        }
        if(right===str.length-1 && arr.length!==str.length) {
            while(left <=right){
                arr.push(Math.abs(p-left));
                left++;
            }
        }
        right++;
    };
    console.log(arr);
}

shortestToChar('loveleetcode','e');
shortestToChar('aaab','b');
shortestToChar('aaba','b');
shortestToChar('abaa','b');


// 925. Long Pressed Name
function isLongPressedName(str,typed){
    let loopCheck=str.length > typed.length ? str : typed
    let first=0
    let second=0;
    for(let i=second;i<loopCheck.length;i++){
        if(str[first]===typed[second]){
            first++;
            second++;
        }else if(typed[second]===str[first-1]){
            second++;
        }else{
            console.log('longPress',false)
            return false
        };
    };
    console.log('longPress',first === str.length);
    return first === str.length;
}
isLongPressedName('alex','aaleex');
isLongPressedName('saeed','ssaaedd');
isLongPressedName('xnhtq','xhhttqq');
isLongPressedName('leelee','lleeelee');
isLongPressedName('alexd','ale');
isLongPressedName('pyplrz','ppyypllr');


// 1089. Duplicate Zeros

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array *in place* and do not return anything.
function duplicateZeros(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            arr.splice(i+1,0,0);
            arr.pop();
            i++;
        };
    };
    console.log('occ of zero',arr);
    return arr;
}

duplicateZeros([1,0,2,3,0,4,5,0]);
duplicateZeros([1,2,3]);

// 680. Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
function validPalindrome2(str){
    if(validPalidroneStr(str)){
        console.log('palidrone2',true);
        return true;
    }
    str=str.split('');
    for(let i=0;i<str.length;i++){
        // let result=[...str];
        // result.splice(i,1);
        // if(validPalidroneStr(result)){
        //     console.log('palidrone2',true);
        //     return true;
        // }
        let index=(str.length-1)-i;
        if(str[i]!==str[index]) {
           let result=[...str];
           result.splice(i,1);
           if(validPalidroneStr(result)){
               console.log('palidrone2',true);
               return true
           }
        }
    };
    console.log('palidrone2',false);
    return false;
}

function validPalidroneStr(str,start=0,end=0){
    // start=0;
    // end=str.length-1;

    while(end > start){
        if(str[end]!==str[start]) return false;
        start++;
        end--;
    };
    return true;
}

function validPalindrome2Opt(str){
    let start=0;
    let end=str.length-1;
    while(end > start){
        if(str[start]!==str[end]){
            console.log(validPalidroneStr(str,start+1,end) || validPalidroneStr(str,start,end-1));
            return validPalidroneStr(str,start+1,end) || validPalidroneStr(str,start,end-1)
        }
        start++;
        end--;
    }
    console.log(true)
    return true
}

validPalindrome2('aba');
validPalindrome2('abca');
validPalindrome2('abc');
validPalindrome2("cbbcc");

validPalindrome2Opt('aba');
validPalindrome2Opt('abca');
validPalindrome2Opt('abc');
validPalindrome2Opt("cbbcc");



function threeSum(arr){
    let result=new Set();
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                let sum=arr[i]+arr[j]+arr[k];
                if(sum==0){
                    triplet=[arr[i],arr[j],arr[k]].sort((a,b)=>a-b).join(",");
                    if(!result.has(triplet)){
                        result.add(triplet);
                    }
                }
            }
        }
    };
    result=[...result].map(str=>str.split(',').map(Number));
    console.log(result);
    return result
};
threeSum([-1,0,1,2,-1,-4]);

function threeSumOpt(arr){
    // using two pointer
    arr.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < arr.length - 2; i++) {
    // 1) skip duplicate i (important)
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        // 2) save values and skip duplicates by value (safe)
        // so before incrementing left and decrement right store the value and when we increment left and decrement right then check with previous value if it same again increase till value not change.
        const leftVal = arr[left];
        const rightVal = arr[right];
        while (left < right && arr[left] === leftVal) left++;
        while (left < right && arr[right] === rightVal) right--;
    } 
    else if (sum < 0) {
        left++;
    } else {
        right--;
    }
    }
  }

  return result;


// using hashing and two loops
// let result=new Set();
// for(let i=0;i<arr.length;i++){
//     let tempSet=new Set();
//     for(let j=i+1;j<arr.length;j++){
//         let checked=-(arr[i]+arr[j]);
//         if(tempSet.has(checked)){
//             let tripplet=[arr[i],arr[j],checked].sort((a,b)=>a-b).join(',');
//             if(!result.has(tripplet))result.add(tripplet);
//         }
//         tempSet.add(arr[j]);
//     }
// };

// result=[...result].map(str=>str.split(',').map(Number));
// console.log(result);
// return result;
};


threeSumOpt([-1,0,1,2,-1,-4]);
threeSumOpt([0,0,0,0]);


// 209. Minimum Size Subarray Sum
// Two Pointer: Parell Patterns approch same as sliding window (variable window approch)
function minSubArrayLen(arr,t){
    let start=0;
    let sum=0;
    let minLength=Infinity;
    for(let end=0;end<arr.length;end++){
        sum+=arr[end];
        while(sum >= t){
            minLength=Math.min(minLength,end-start+1);
            sum-=arr[start];
            start++;
        }
    };
    if(minLength==Infinity)minLength=0
    console.log(minLength);
    return minLength;
}

minSubArrayLen([2,3,1,2,4,3],7);

// 3. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(str){
    str=str.split('');
    let start=0;
    let set=new Set();
    for(let end=0;end<str.length;end++){
        while(set.has(str[end])){
            set.delete(str[end]);
            start++;
        }
        set.add(str[end]);
    };
    console.log(set.size);
    return set.size;
}

lengthOfLongestSubstring('abcabcbb');


function longestSubstringK(str,k){
    str=str.split('');
    let start=0;
    let map=new Map();
    let maxLength=-Infinity
    for(let end=0;end<str.length;end++){
        // this line come before while because new element is add which change map size to greater than k then while loop should execute to change the map size
        map.set(str[end],(map.get(str[end]) || 0)+1);
        while(map.size > k){
            map.set(str[start],map.get(str[start])-1);
            if(map.get(str[start])==0) map.delete(str[start]);
            start++;
        };
        maxLength=Math.max(maxLength,end-start+1);
    };
    console.log(maxLength);
    return maxLength;
}
longestSubstringK('eceba',2);


function minWindow(s,t){
    let strMap=new Map();
    let typedMap=new Map();
    for(let ch of t){
        typedMap.set(ch,(typedMap.get(ch)||0)+1);
    };

    // console.log(typedMap);
    let start=0;
    let have=0; // to check the freq of character is equal to freq in string
    let res='';
    let minLength=Infinity;
    for(let end=0;end<s.length;end++){
        strMap.set(s[end],(strMap.get(s[end])||0)+1);
        if(strMap.get(s[end]) === typedMap.get(s[end]))have++;
        while(have===typedMap.size){
            if(end-start+1 < minLength){
                minLength=Math.min(minLength,end-start+1);
                res=s.slice(start,end+1);
            }
            strMap.set(s[start],strMap.get(s[start])-1);
            if(strMap.get(s[start])< typedMap.get(s[start]))have--; // to check the freq of character is equal to freq in string
            start++;
        }
    };
    console.log('str',res);
    return res;
}

minWindow('ADOBECODEBANC','ABC');
minWindow('a','a');
minWindow('a','aa');

// 1493. Longest Subarray of 1's After Deleting One Element
// here i have do end-start because we have to delete one element.
function longestSubarray(arr){
    let start=0;
    let zeroCount=0;
    let max=-Infinity;
    for(let end=0;end<arr.length;end++){
        if(arr[end]==0)zeroCount++;
        while(zeroCount > 1){
            if(arr[start]==0)zeroCount--
            start++;
        }
        max=Math.max(max,end-start);
    };
    console.log('longest',max);
}

longestSubarray([1,1,0,1]);
longestSubarray([0,1,1,1,0,1,1,0,1]);


// 1004. Max Consecutive Ones III
// here i am calculate length of subarray so that's why i do end-start+1;
function longestOnes(arr,k){
    let start=0;
    let max=-Infinity;
    let zeroCount=0;
    for(let end=0;end<arr.length;end++){
        if(arr[end]===0)zeroCount++;
        while(zeroCount > k){
            if(arr[start]==0)zeroCount--;
            start++;
        }
        max=Math.max(max,end-start+1);
    };
    console.log('longOnes',max)
};
longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)

function maxFrequency(arr,k,o){
    let rangeStart=k * -1;
    let rangeArr=[];
    let count=0;
    let max=0;
    for(let i=rangeStart;i<=k;i++){
        rangeArr.push(i);
    };
    // console.log(rangeArr);
    for(let i=0;i<arr.length;i++){
        count=1;
        max=Math.max(max,count);
        for(j=i+1;j<arr.length;j++){
                let check=arr[i]-arr[j];
                if(o > 0){
                    if(rangeArr.includes(check)){
                        count++;
                        max=Math.max(max,count);
                    };
                }
        }
    }
    console.log(max);
    return max;
}

maxFrequency([1,4,5],1,2);
maxFrequency([5,11,20,20],5,1);
maxFrequency([5,49],97,0);
maxFrequency([88,53],27,2);

// 1716. Calculate Money in Leetcode Bank

var totalMoney = function(n) {
    let count=0;
    let output=0;
    let initialSum=0;
    let mondayCounter=1;
    for(let i=1;i<=n;i++){
        count++;
        if(count > 7){
            mondayCounter++;
            count=1;
            initialSum=mondayCounter;
            output+=initialSum;
        }else{
            initialSum=initialSum+1
            output+=initialSum;
        }
    };
    console.log(output);
    return output;
};

totalMoney(10);
totalMoney(20);
totalMoney(4);


function meregAlternativeString(str1, str2){
    let left=0;
    let right=0;
    let result='';
    while(left <=str1.length-1 && right <=str2.length-1){
       result+=str1[left]+str2[right];
       left++;
       right++;
    };
    while(left <=str1.length-1){
        result+=str1[left];
        left++;
    };
    while(right <=str2.length-1){
        result+=str2[right];
        right++;
    };
    console.log(result);    
    return result;
}
meregAlternativeString('ab','pqrs');
meregAlternativeString('abc','pqr');
meregAlternativeString('abcd','pq');

function isSubsequence(str1,str2){
    let left=0;
    for(let i=0;i<str2.length;i++){
        if(str1[left]==str2[i]){
            left++;
        }
    };
    console.log(left==str1.length ? true:false);
    return left==str1.length ? true:false;
}

isSubsequence('abc', 'ahbgdc');
isSubsequence('axc', 'ahbgdc');
isSubsequence('acb', 'ahbgdc');
isSubsequence('b','c');
isSubsequence("","ahbgdc");


const arr=[1,2,3,[4,[5,6,[7,8]]]];
function flatternArray(arr,result=[]){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatternArray(arr[i],result);
        }else{
            // result.push(arr[i])
            result=result.concat(arr[i])
        }
    };
    console.log(result);
}
flatternArray(arr);

// function mySetInterval(callBack,delay){
//     function run (){
//         callBack();
//         setTimeout(run,delay);
//     };
//     setTimeout(run,delay);
// };

// mySetInterval(()=>console.log('Hello'),2000);

function compress(arr){
    let map=new Map();
    arr.forEach((el)=>{
        map.set(el,(map.get(el)|| 0 )+1);
    });
    console.log(map);
    let result=[];
    for(let [key,value] of map){
        if(map.get(key)==1){
            result.push(key);
        }else{
            result.push(key,value);
        }
    };
    console.log('compress',result);
    arr=result;
    console.log(arr.join('').length);
    return arr.join('').length;
    
}
compress(["a","a","b","b","c","c","c"]);
compress(['a']);
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);




function compressInPlace(arr) {
    let index = 0;
    let count = 1;
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            arr[index++] = arr[i - 1];

            if (count > 1) {
                let str = count.toString();
                for (let ch of str) {
                    arr[index++] = ch;
                }
            }
            count = 1;
        }
    }
    return index;
    // let index = 0; // write pointer
    // let i = 0;     // read pointer

    // while (i < chars.length) {
    //     let char = chars[i];
    //     let count = 0;

    //     // count same characters
    //     while (i < chars.length && chars[i] === char) {
    //         i++;
    //         count++;
    //     }

    //     // write character
    //     chars[index++] = char;

    //     // write count if > 1
    //     if (count > 1) {
    //         let str = count.toString();
    //         for (let ch of str) {
    //             chars[index++] = ch;
    //         }
    //     }
    // }
    // console.log(index);
    // return index;
}

compressInPlace(["a","a","b","b","c","c","c"])

function countBinarySubstrings(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        let zeroCount=0;
        let oneCount=0;
        if(str[i]=='0')zeroCount++;
        else oneCount++;
        for(let j=i+1;j<arr.length;j++){
            if(str[j]=='0')zeroCount++;
            else oneCount++;
            if(zeroCount!==0 && oneCount!==0){
                if(oneCount > zeroCount)break;
            }
            if(zeroCount==oneCount)count++;
        }
    };
    console.log('binaryString',count);
    return count;
}

countBinarySubstrings('00110011');
countBinarySubstrings('10101');

function intersect(nums1,nums2){
    let map = {};
  let result = [];

  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--; 
    }
  }
  console.log(result)
  return result;
}

intersect([1,2,2,1],[2,2]);
intersect([4,9,5],[9, 4, 9, 8, 4])

function reversePrefix(str,k){
    // if(k==1) return str;
    // let remaining=str.slice(k);
    // let append=str.slice(0,k);
    // append=append.split('').reverse().join('');
    // console.log('reversePrefix',append+remaining);
    // return append+remaining;

     if(k==1) return str;
    let remaining=str.slice(k);
    let append=str.slice(0,k);
    append=append.split('');
    let start=0;
    let end=append.length-1;
    while(end > start){
        let temp=append[start];
        append[start]=append[end];
        append[end]=temp
        start++;
        end--;
    };
    console.log('reversePrefix',append.join('') + remaining);
    return append.join('') + remaining;
}
reversePrefix('abcd',2);

function firstMatchingIndex(str){
    if(str.length==1) return 0;
    let start=0;
    let end=str.length-1;
    let n=str.length;

    while(end >= start){
        let temp=(n-start)-1;
        if(str[start]==str[temp]){
            console.log('firstMatchingIndex',start);
            return start
        }
        end--;
        start++;
    };

    console.log('firstMatchingIndex',-1);
    return -1
}

firstMatchingIndex('abcacbd');
firstMatchingIndex('abcdab');
firstMatchingIndex('abc');
firstMatchingIndex('glg');

function reversePrefix(str,ch){
    if(!str.includes(ch)){
        console.log(str);
        return str;
    };
    let index=str.indexOf(ch);
    let start=0;
    str=str.split('');
    while(index > start){
        let temp=str[start];
        str[start]=str[index];
        str[index]=temp;
        index--;
        start++;
    };
    console.log(str.join(''));
    return str.join('');
}

reversePrefix('abcdefd','d');
reversePrefix('xyxzxe','z');
reversePrefix('abcd','z');

function checkIfExist(arr){
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(i>=0 && i!=j){
    //             if(j < arr.length){
    //                 if(arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]){
    //                     console.log(i,j);
    //                     console.log(true);
    //                     return true;
    //                 }
    //             }
    //         }
    //     }
    // };
    // console.log(false);
    // return false;

    // Using Hash set
    let set=new Set();
    for(let i=0;i<arr.length;i++){
        if(set.has(2*arr[i])){
            console.log(true);
            return true;
        }
        if(arr[i]%2==0){
            if(set.has(arr[i] / 2)){
                console.log(true);
                return true
            }
        }
        set.add(arr[i]);
    }
    console.log(false);
    return false;
}

checkIfExist([10,2,5,3]);
checkIfExist([3,1,7,11]);
checkIfExist([7,1,14,11]);

function countBinarySubstrings(str){
    let prev = 0;
    let curr = 1;
    let count = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            curr++;
        } else {
            count += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }

    count += Math.min(prev, curr);
    console.log(count);
    return count;
}

countBinarySubstrings('00110011');
countBinarySubstrings('10101');
countBinarySubstrings('00110');
countBinarySubstrings('0010011');

function findTheDistanceValue(arr1,arr2,d){
    let count=0;
    for(let i=0;i<arr1.length;i++){
        let found=false;
        for(let j=0;j<arr2.length;j++){
            let abs=Math.abs(arr1[i]-arr2[j]);
            if(abs <= d){
                found=true;
                break;
            }
        };
        if(!found){
            count++;
        }
    };
    console.log('DistanceValue',count);
    return count;
}

findTheDistanceValue([4,5,8],[10,9,1,8],2);
findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30],3);
findTheDistanceValue([2,1,100,3],[-5,-2,10,-3,7],6);

function rotateByK(arr,k){
    // let result=new Array(arr.length);
    // // console.log(result);
    // for(let i=0;i<arr.length;i++){
    //     let index=(i+k)%arr.length;
    //     result[index]=arr[i];
    // };
    // console.log('rotateByK',result);
    // return result;
    k=k % arr.length;
    if(arr.length===1) return arr;
    arr=arr.reverse();
    let start=0;
    let end=k-1;
    while(end > start){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        end--;
        start++;
    };

    start=k;
    end=arr.length-1;
    while(end > start){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        end--;
        start++;
    };

    console.log(arr);
    return arr;
}
rotateByK([1,2,3,4,5],3);
rotateByK([1,2,3,4,5,6,7],3);
rotateByK([-1,-100,3,99],2);
rotateByK([-1],2);
rotateByK([1,2],7);