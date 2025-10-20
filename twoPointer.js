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




function merge(arr1,arr2,m,n){
    arr1=arr1.slice(0,m);
    arr2=arr2.slice(0,n);
    let result=[...arr1,...arr2];
    result=result.sort((a,b)=>a-b);
    console.log('merge',result);
}

merge([1,2,3,0,0,0],[2,5,6],3,3);


// using two pointer
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
        n=giveSum(n.toString(),set);
    };
    console.log(n===1);
    return n===1;
};

function giveSum(str,set){
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
    console.log(arr);
}
moveZeroesOpt([0,1,0,3,12]);


// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// NOTE: Here you have to find max area of water from two position


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



// 345. Reverse Vowels of a String
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
    let left=1;
    let right=arr.length-1;
    let set=new Set();  
    arr=arr.sort((a,b)=>a-b);
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        for(let j=left;j<arr.length-1;j++){
            let sum=arr[i]+arr[left]+arr[right];
            if(sum==0){
                let triplet=[arr[i],arr[left],arr[right]].sort((a,b)=>a-b).join(",");
                if(!set.has(triplet)){
                    set.add(triplet);
                }
                left++;
                right--;
            }
            if(sum < 0) left++;
            if(sum > 0) right--;
        };
        left=i+2;
        right=arr.length-1;
    };

    set=[...set].map(str=>str.split(',').map(Number));
    console.log('threeSumOpt',set);
    return set;
};
threeSum([-1,0,1,2,-1,-4]);