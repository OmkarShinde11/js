// var n=4;
// var random=function getName(){
//     console.log('Hello');
// }

// var random=()=>{
//     console.log('Hello');
// }

// function random(){
//     console.log('Hello')
// }
// console.log(n);
// console.log(random);

// random();


// function execution

// var x=4;
// one();
// two();
// console.log(x);
// function one(){
//     var x=12;
//     console.log(x);
// }
// function two(){
//     var x=100;
//     console.log(x);
// }


// lexical enviroment and scope chain.

// var x=4;
// function a(){
//     b();
//     function b(){
//         c();
//         function c(){
//             console.log('inside functions',x);
//         }
//     }
// };
// console.log('Outside Functions',x)
// a();

// let and const with hoisting and type of errors.


// console.log(b);
// console.log(n);// here Refference error occured where variable are not user before initalize.
// console.log(m)//here Refference error occured where javascript is not found that variable in gloabl scope.(global execution context.)
// var b=10;
// let n=20;
// const y; // here syntax error occured where not execute one line of code.
// const y=20;

// if we assign to let then it give Syntax error.
// let b=70;

//if we reassign to const then it give TypoError
// y=40;


// Block scope and shadowing.

// let b=40
// {
//     var a=20;
//     let b=10;
//     const c=30;
//     console.log(b);
// }

// console.log(b);





// function n(){
//     b=90;
// }
// n();
// b=80;
// console.log(b); 

// var n=10;
// function a(){
//     n=8;
//     console.log(n)
// }
// a();
// console.log(n);


// let n=10;
// function a(){
//      n=8;
//     console.log(n)
// }
// a();
// console.log(n);


// function a(){
//     return function (){
//         console.log('1');
//     }
// };
// a()();

// callback function.
// function a(call){
//     console.log('a');
//     call();
// }
// function y(){
//     console.log('y');
// }
// a(y);

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let mini=i; // this is current
//         for(let j=i;j<arr.length;j++){ // inner loop run for find mini and swap with current 
//             if(arr[j] < arr[mini]){
//                 mini=j;
//                 let temp=arr[mini];
//                 arr[mini]=arr[i];
//                 arr[i]=temp
//             };
//         } 
//     };
//     console.log(arr);
//     return arr;
// }

// selectionSort([13,46,24,52,20,9]);

// function bubbleSort(arr){
//     for(let i=arr.length-1;i>=1;i--){ // loop run from last bcause we push max to last
//         for(let j=0;j<arr.length;j++){//loop run for adjecent swapping so max goes to last automatically
//             if(arr[j] > arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     console.log('bubble',arr);
//     return arr;
// }

// bubbleSort([13,46,24,52,20,9]);

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){ // loop run for take one element
//         for(let j=i;j>0;j--){ // loop run to place it in correct position means the at start.
//             if(arr[j] < arr[j-1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j-1];
//                 arr[j-1]=temp;
//             }
//         }
//     };
//     console.log('insertion',arr);
//     return arr;
// }

// insertionSort([13,46,24,52,20,9]);

// function mergeSort(arr,low,high){
//     if(low >=high)return;
//     let mid=Math.floor((low+high)/2);
//     mergeSort(arr,low,mid);
//     mergeSort(arr,mid+1,high);
//     // IMP
//     return merge(arr,low,mid,high);
// }

// function merge(arr,low,mid,high){
//     let temp=[];
//     let left=low;
//     let right=mid+1;
//     while(left <= mid && right <= high){
//         if(arr[left] < arr[right]){
//             temp.push(arr[left]);
//             left++;
//         }
//         else{
//             temp.push(arr[right]);
//             right++;
//         }
//     };

//     while(left <= mid){
//         temp.push(arr[left]);
//         left++;
//     }
//     while(right <= high){
//         temp.push(arr[high]);
//         right++;
//     };

//     // IMP
//     for(let i=low;i<=high;i++){
//         arr[i]=temp[i-low];
//     };
//     return arr;
// }

// console.log('mergeSort',mergeSort([3,2,4,1,3],0,4));

// function quickSort(arr,low,high){
//     if(low < high){
//         let partionIndex=getPartionIndex(arr,low,high);
//         quickSort(arr,low,partionIndex-1);
//         quickSort(arr,partionIndex+1,high);
//     };
// };

// function getPartionIndex(arr,low,high){
//     let pivot=arr[low];
//     let i=low;
//     let j=high;
//     while(i<j){
//         while(arr[i] <= pivot && i <= high-1){
//             i++;
//         }
//         while(arr[j] >= pivot && j >= low+1){
//             j--;
//         }
//         if(i<j){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     };
//     let temp=arr[low];
//     arr[low]=arr[j];
//     arr[j]=temp;
//     return j
// }
// let arr=[4,6,2,5,7,9,1,3];
// quickSort(arr,0,7);
// console.log('quickSort',arr);

// function maxSumSubArray(arr){
//     let currentSum=arr[0];
//     let maxSum=arr[0];
//     for(let i=1;i<arr.length;i++){
//         let sum=arr[i]+currentSum;
//         currentSum=Math.max(sum,arr[i]);
//         maxSum=Math.max(maxSum,currentSum);
//     };
//     console.log(maxSum);
//     return maxSum;
// }

// maxSumSubArray([2,3,-8,7,-1,2,3]);

// function minSubArraySum(arr){
//     let currentSum=arr[0];
//     let minSum=arr[0];
//     for(let i=1;i<arr.length;i++){
//         let sum=arr[i]+currentSum;
//         currentSum=Math.min(sum,arr[i]);
//         minSum=Math.min(minSum,currentSum);
//     };
//     console.log(minSum);
//     return minSum;
// }

// minSubArraySum([2,3,-8,7,-1,2,3]);

// function maxCircularSubArray(arr){
//     let currentSum=arr[0];
//     let max=arr[0];
//     for(let i=1;i<arr.length;i++){
//         let sum=arr[i]+currentSum;
//         currentSum=Math.max(sum,arr[i]);
//         max=Math.max(max,currentSum);
//     };
//     let currentSum2=arr[0];
//     let min=arr[0];
//     for(let i=1;i<arr.length;i++){
//         let sum=arr[i]+currentSum2;
//         currentSum2=Math.min(sum,arr[i]);
//         min=Math.min(min,currentSum2);
//     };

//     let arrSum=arr.reduce((acc,curr)=>{
//         return acc+=curr;
//     },0);
    
//     let minArraySum=arrSum-min;
//     console.log(Math.max(max,minArraySum));
//     return Math.max(max,minArraySum);
// }
// maxCircularSubArray([5,-2,3,4]);

// function findMaxConsecutiveOnes(arr){
//     let maxcount=0;
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//        if(arr[i]==1)count++
//        else{
//         count=0;
//        }
//        maxcount=Math.max(maxcount,count);
//     };
//     console.log('concesutive',maxcount);
// }

// // findMaxConsecutiveOnes([1,1,0,1,1,1]);
// // findMaxConsecutiveOnes([1,0,1,1,0,1]);
// findMaxConsecutiveOnes([0,1,1,0,1,0]);
// findMaxConsecutiveOnes([1,1,1,1]);
// findMaxConsecutiveOnes([0,0,0]);
// findMaxConsecutiveOnes([1,0,1,1,1,1,0,1,1]);
// findMaxConsecutiveOnes([1,1,0,1,1,1]);

// function leaderArrayEle(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         let check=true;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] < arr[j]){
//                 check=false;
//                 break;
//             }
//         }
//         if(check){
//             result.push(arr[i]);
//         }
//     };
//     console.log('leader',result);
//     return result;
// }

// leaderArrayEle([7,10,4,3,6,5,2]);
// leaderArrayEle([10,20,30]);
// leaderArrayEle([30,20,10]);

// function leaderArrayEleOpt(arr){
//     let LeaderArray=[arr[arr.length-1]];
//     let currentLeader=arr[arr.length-1];

//     for(let i=arr.length-2; i>=0;i--){
//         if(arr[i] > currentLeader){
//             currentLeader=arr[i];
//             LeaderArray.push(currentLeader);
//         }
//     };
//     console.log(LeaderArray.reverse());
//     return LeaderArray;
// }
// leaderArrayEleOpt([7,10,4,3,6,5,2]);
// leaderArrayEleOpt([10,20,30]);
// leaderArrayEleOpt([30,20,10]);

// function minFlipsMod(arr){
//     let result=[];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]!==arr[i-1]){
//             if(arr[i]!==arr[0]){
//                 result.push(i);
//             }else{
//                 result.push(i-1);
//             }
//         }
//     }
//     console.log(result);
// }


// minFlipsMod([1,1,0,0,0,1]);

// function maxProductSubArray(arr){
//     // So when there is 0 then start prefix and suffix from 1 because if prefix and suffix is 0 then final also 0
//     // iterate from front and back of array store and compare maximum prefix and suffix with maximum of maxSum
//     let prefix=1;
//     let suffix=1;
//     let maxSum=arr[0];
//     let n=arr.length;
//     for(let i=0;i<arr.length;i++){
//         if(prefix==0) prefix=1
//         if(suffix==0)suffix=1
//         prefix*=arr[i];
//         suffix*=arr[n-i-1];
//         maxSum=Math.max(maxSum,Math.max(prefix,suffix));
//     };
//     console.log(maxSum);
// }
// maxProductSubArray([2,3,-2,4]);
// maxProductSubArray([0,1,-2,-3,-4]);
// maxProductSubArray([-2]);
// maxProductSubArray([-2,3,-4]);
// maxProductSubArray([0,1,-2,-3,-4]);


// function maxProductSubArrayBru(arr){
//     let product=1;
//     let maxProd=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             product *=arr[j];
//             maxProd=Math.max(maxProd,product);
//         };
//         product=1;
//     };
//     console.log('maxPrdBru',maxProd);
//     return maxProd;
// }

// maxProductSubArrayBru([2,3,-2,4]);
// maxProductSubArrayBru([0,1,-2,-3,-4]);
// maxProductSubArrayBru([-2]);
// maxProductSubArrayBru([-2,3,-4]);
// maxProductSubArrayBru([0,1,-2,-3,-4]);


// function isHappy(n){
//     let set=new Set();
//     while(n!==1 && !set.has(n)){
//         set.add(n);
//         n=giveSum(n.toString());
//     };

//     console.log(n===1);
//     return n===1;
// };

// function giveSum(str){
//     let sum=0;
//     for(let i=0;i<str.length;i++){
//         sum+=Number(str[i]) * Number(str[i]);
//     };
//     return sum;
// }

// isHappy(19);
// isHappy(2);

// function reverseVowels(str){
//     str=str.split('');
//     let left=0;
//     let right=str.length-1;
//     while(right > left){
//         if(isVowel(str[left])){
//             if(isVowel(str[right])){ 
//                 let temp=str[left];
//                 str[left]=str[right];
//                 str[right]=temp;
//                 left++;
//                 right--;
//             }else{
//                 right--
//             };
//         }
//         else{
//             left++;
//         };
//     };

//     console.log(str.join(''));
//     return str.join('');
// }

// function isVowel(str){
//     return 'aeiouAEIOU'.includes(str);
// }

// reverseVowels('IceCreAm');

// function shortestToChar(str,t){
//     let left=0;
//     let right=0;
//     let arr=[];
//     let prev=null;
//     for(let i=0;i<str.length;i++){
//         let check=false;
//         if(str[right]==t){
//             check=true;
//             while(left!==right){
//                 if(prev){
//                     let validValue=Math.min(Math.abs(left-right),Math.abs(left-prev));
//                     arr.push(validValue);
//                     left++;
//                 }else{
//                     arr.push(Math.abs(left-right));
//                     left++;
//                 }
//             }
//         };
//         if(check){
//             prev=right;
//             arr.push(0);
//             left=right+1;
//         }
//         if(right==str.length-1 && arr.length!==str.length){
//             while(right >=left){
//                 arr.push(Math.abs(left-prev));
//                 left++;
//             }
//         }
//         right++;
//     };
//     console.log(arr);
//     return arr;
// }

// shortestToChar('loveleetcode','e');
// shortestToChar('aaab','b');
// shortestToChar('aaba','b');
// shortestToChar('abaa','b');


// function validPalindrome(str){
//     let left=0;
//     let right=str.length-1;
//     while(right > left){
//         if(str[left]!==str[right]) {
//             let result=isPalindrome(str,left+1,right) || isPalindrome(str,left,right-1);
//             console.log(result);
//             return result;
//         }
//         left++;
//         right--;
//     }
    
// };
// validPalindrome('aba');
// validPalindrome('abca');
// validPalindrome('abc');
// validPalindrome("cbbcc");


// function isPalindrome(str,start,end){
//     while(end > start){
//         if(str[end]!==str[start]) return false;
//         start++;
//         end--;
//     };
//     return true;
// }

// function lengthOfLongestSubstring(str){
//     let start=0;
//     let maxLength=0;
//     let set=new Set();
//     for(let end=0;end<str.length;end++){
//         while(set.has(str[end])){
//             set.delete(str[start]);
//             start++;
//         }
//         set.add(str[end]);
//         maxLength=Math.max(maxLength,end-start+1);
//     };
//     console.log(maxLength);
//     return maxLength;
// }

// lengthOfLongestSubstring('abcabcbb');
// lengthOfLongestSubstring('bbbbb');
// lengthOfLongestSubstring('pwwkew');

// function longestSubstringK(str,k){
//     let start=0;
//     let map=new Map();
//     let maxLength=0;
//     for(let end=0;end<str.length;end++){
//         map.set(str[end],(map.get(str[end])|| 0)+1);
//         while(map.size > k){
//             map.set(str[start],map.get(str[start])-1);
//             if(map.get(str[start])==0) map.delete(str[start]);
//             start++;
//         };
//         maxLength=Math.max(maxLength,end-start+1);
//     };
//     console.log('long substring k',maxLength);
//     return maxLength;
// }

// longestSubstringK('eceba',2);
// longestSubstringK('aa',1);
// longestSubstringK('a',0);
// longestSubstringK('aaabc',2);

// function moveZeroesToEnd(arr){
//     let left=0;
//     for(let right=0;right < arr.length;right++){
//         if(arr[right]!==0){
//             let temp=arr[left];
//             arr[left]=arr[right];
//             arr[right]=temp;
//             left++;
//         }
//     };
//     console.log(arr);
//     return arr;
// }

// moveZeroesToEnd([0,1,0,3,12]);
// moveZeroesToEnd([8,5,0,10,0,20]);

// function convertStrOcc(str){
//     let arr=['1','2','3','4','5','6','7','8','9']
//     str=str.split('');
//     for(let i=0;i<str.length;i++){
//         if(arr.includes(str[i])){
//             let number=Number(str[i]);
//             let appendStr=createStr(number);
//             str[i]=appendStr;
//         }
//     };
//     console.log(str.join(''));
//     return str.join('');
// }

// function createStr(number){
//     str='';
//     for(let i=1;i<=number;i++){
//         str+=1;
//     };
//     return str;
// }

// convertStrOcc('abc5def3');

// function convertNumber(arr){
//     let str=arr.join(',');
//     str=str.replaceAll(',','');
//     str=Number(str)+1;
//     str=str.toString().split('');
//     console.log(str);
//     return str;
// }

// convertNumber(['1','2','4']);
// convertNumber(['5','5','5']);
// convertNumber(['9','9','9']);


// Chekc Prime Number
// To check prime the number divisible by itself and 1 
// so -ve numbers are not prime 0 & 1 not prime.
// so if number is divide by other and we get 0 then return false.
// otherwise it return true.
// So you only need to test the small ones. because here we find sqrt so if number is prime it will find till sqrt if it is not then return true
// because small number find frim bigger one only
// function checkPrime(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > 1){
//             if(isPrime(arr[i])){
//                 result.push(arr[i]);
//             }
//         }
//     };
//     console.log(result);
//     return result;
// };

// function isPrime(n){
//     if(n<=1)return false;
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0)return false;
//     };
//     return true;
// }
// checkPrime([97, 98, 99, 100, 101, 103]);





function plusOne(digits){
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            console.log(digits);
            return digits;
        }
        digits[i] = 0;
    }
    console.log([1,...digits]);
    return [1, ...digits];
}
plusOne([1,2,3]);
plusOne([9]);
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
plusOne([9,9]);

function reverseVowels(str){
    str=str.split('');
    let start=0;
    let end=str.length-1;
    while(end > start){
        if(checkVowel(str[start])){
            if(checkVowel(str[end])){
                let temp=str[start];
                str[start]=str[end];
                str[end]=temp;
                start++;
                end--;
            }else{
                end--;
            }
        }else{
            start++;
        }
    };
    console.log(str.join(''));
    return str.join('');
};

function checkVowel(str){
    return 'aeiouAEIOU'.includes(str);
}
reverseVowels('IceCreAm');
reverseVowels('leetcode');
reverseVowels("Euston saw I was not Sue.")

function reverseWords(str){
    str=str.split(" ");
    let arr=[];
    for(let i=0;i<str.length;i++){
        if(str[i]!==""){
            arr.push(str[i])
        }
    };
    arr=arr.join(' ');
    arr=arr.split(" ");
    // console.log(arr);
    let start=0;
    let end=arr.length-1;
    while(end > start){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    };
    console.log(arr.join(' '));
    return arr.join(' ');
}

reverseWords(" hello world ");
reverseWords("the sky is blue");
reverseWords("a good   example");

function maxArea(arr){
    let left=0;
    let right=arr.length-1;
    let maxArea=-Infinity;
    while(right > left){
        let width=right-left;
        let height=Math.min(arr[left],arr[right]);
        maxArea=Math.max(maxArea,height * width);

        if(arr[left]  < arr[right]){
            left++;
        }else{
            right--;
        }
    };
    console.log(maxArea);
    return maxArea;
}

maxArea([1,8,6,2,5,4,8,3,7]);

function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j] < arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    };
    console.log(arr);
    return arr;
}

insertionSort([13,46,24,52,20,9])


// find maximum length of consecustive element.
function ArrayChallenge(arr) { 
    arr=arr.sort((a,b)=>a-b);
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
      let length=1;
      for(let j=i;j<arr.length;j++){
        if(arr[j+1]==arr[j]+1){
          length++;
        }else{
          break;
        }
      }
      maxLength=Math.max(maxLength,length);
    }
    // code goes here  
    console.log(maxLength);
    return maxLength; 
  
}
ArrayChallenge([6, 7, 3, 1, 100, 102, 6, 12]);
ArrayChallenge([6, 7, 3, 1, 100, 102, 6, 12]);


function reverseString(str){
    str=str.split('');
    let start=0;
    let end=str.length-1;
    while(end > start){
        let temp=str[start];
        str[start]=str[end];
        str[end]=temp;
        start++;
        end--;
    };
    console.log(str.join(''));
    return str.join('');
}

reverseString('hello');

function palindrome(str){
    str=str.split('');
    let start=0;
    let end=str.length-1;
    while(end > start){
        if(str[start]!==str[end]){
            console.log(false);
            return false;
        }
        start++;
        end--;
    };
    console.log(true);
    return true;
}

palindrome('madam');
palindrome('racecar');
palindrome('OmkarO');

function firstnonrepeating(str){
    if(str.length==0){
        console.log(-1);
        return -1;
    }
    let result=-1;
    let map=new Map();
    for(let i=0;i<str.length;i++){
        map.set(str[i],(map.get(str[i]) || 0)+1);
    };
    // console.log(map);

    for(let [key,value] of map){
        if(map.get(key)==1){
            result=key;
            console.log(result);
            return result
        }
    };

    // alternative for above loop is 
    // for (let ch of str) {
    //     if (map.get(ch) === 1) {
    //       return ch;
    //     }
    //   }

    console.log(result);
    return result;
}

firstnonrepeating('aabbcdde');
firstnonrepeating('aabbcc');
firstnonrepeating('loveleetcode');

// IMP
function checkanagrams(str1,str2){
    if(str1.length!==str2.length){
        console.log(false);
        return false;
    }
    str1=str1.split('');
    str2=str2.split('');
    let map1=new Map();

    str1.forEach((el)=>{
        map1.set(el,(map1.get(el)|| 0)+1);
    });
    for(let i=0;i<str2.length;i++){
        if(!map1.has(str2[i])){
            console.log(false);
            return false;
        }

        map1.set(str2[i],map1.get(str2[i])-1);
        if(map1.get(str2[i])==0){
            map1.delete(str2[i])
        }
    };
    console.log(map1.size===0);
    return map1.size===0;
    
}

checkanagrams('listen','silent');
checkanagrams('race','care');
checkanagrams('race','car');
checkanagrams('ab','cd');

function longestWord(str){
    str=str.split(' ');
    let maxLength=0;
    let index=-1;
    for(let i=0;i<str.length;i++){
        if(maxLength < str[i].length){
            maxLength=Math.max(maxLength,str[i].length);
            index=i;
        }
    };
    console.log(maxLength,index);
    console.log(str[index]);
    return str[index];
}

longestWord("I love JavaScript programming");
longestWord("Frontend development is interesting");
longestWord("Omkar is preparing for interviews");

function rotateByK(arr,k){
    let result=new Array(arr.length);
    // console.log(result);
    for(let i=0;i<arr.length;i++){
        let index=(i+k)%arr.length;
        result[index]=arr[i];
    };
    console.log(result);
    return result;
}
rotateByK([1,2,3,4,5],3);

function missingNumber(arr){
    let n=arr.length+1;
    let expectedSum=n*(n+1)/2;
    let actualSum=0;
    arr.forEach((el)=>{
        actualSum+=el;
    })
    console.log(expectedSum-actualSum);
    return expectedSum-actualSum;
}

missingNumber([1,2,4,5]);

function sortColors(arr){
    let low=0;
    let high=arr.length-1;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==0){
            let temp=arr[i];
            arr[i]=arr[low];
            arr[low]=temp;
            low++;
        }
        else if(arr[i]==2){
            let temp=arr[i];
            arr[i]=arr[high];
            arr[high]=temp;
            high--;
        }
    };
    console.log(arr);
    return arr;
}
sortColors([0,1,0,1,2,0,1]);

function mergetwoSortedArr(arr1,arr2){
    let result=[];
    let left=0;
    let right=0;

    while(left < arr1.length && right < arr2.length){
        if(arr1[left] < arr2[right]){
            result.push(arr1[left]);
            left++;
        }else{
            result.push(arr2[right]);
            right++;;
        }
    }

    while(left < arr1.length){
        result.push(arr1[left]);
        left++;
    }

    while(right < arr2.length){
        result.push(arr2[right]);
        right++;
    };

    console.log(result);
    return result;

}

mergetwoSortedArr([1,3,5,7],[0,2,6,8,9]);

function findMostFrequentElement(arr){
    let map=new Map();
    arr.forEach((el)=>{
        map.set(el,(map.get(el)||0)+1);
    });
    let result=[...map.values()];
    result=Math.max(...result);

    for(let [key,value] of map){
        if(map.get(key)==result){
            console.log(key);
            return key;
        }
    };
}

findMostFrequentElement([1,1,2,3,3,3]);
findMostFrequentElement([-1, -1, -2, -2, -2, -3]);
findMostFrequentElement([100, 1, 100, 2, 100, 2, 2, 2]);
findMostFrequentElement(["apple", "banana", "apple", "orange", "apple"]);
findMostFrequentElement(["A", "a", "A", "b"]);
findMostFrequentElement([1.1, 2.2, 1.1, 1.1, 3.3]);

function removeDupFromSortArr(arr){
    let result=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]!==arr[i]){
            result.push(arr[i-1]);
        }
        if(i==arr.length-1){
            result.push(arr[i]);
        }
    };
    console.log(result);
}

removeDupFromSortArr([1, 1, 2, 3, 3, 4]);

// It take o(n) and o(1) no extra space
function removedupOpt(arr){
    let j=0;
    for(let i=1;i<arr.length;i++){
        // Here we remove duplicate occurence & whatever duplicate it goes to end;  
        if(arr[i]!==arr[j]){
            j++;
            arr[j]=arr[i];
        }
    };

    // here we remove trailing duplicate.
    arr.length=j+1;
    console.log(arr);
    return arr;
}
removedupOpt([0,0,1,1,1,2,2,3,3,4])

function twoSum(arr,t){
    let start=0;
    let end=arr.length-1;
    while(end > start){
        let sum=arr[start] + arr[end];
        if(sum===t){
            console.log([start,end]);
            return [start,end];
        };
        if(sum > t){
            end--;
        }else{
            start++;
        }
    };
}

twoSum([2, 7, 11, 15],9)

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

function maxConcecutivesOnes(arr,k){
    let start=0;
    let zeroCount=0;
    let maxLength=0;
    for(let end=0;end < arr.length;end++){
        if(arr[end]==0)zeroCount++;
        while(zeroCount > k){
            if(arr[start]==0)zeroCount--;
            start++;
        };
        maxLength=Math.max(maxLength,end-start+1);
    };
    console.log(maxLength);
    return maxLength;
}

maxConcecutivesOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3);
maxConcecutivesOnes([1,1,1,0,0,0,1,1,1,1,0],2);

function longestSubArrayAfterDeletingOne(arr){
    let start=0;
    let maxLength=0;
    let zeroCount=0;
    for(let end=0;end<arr.length;end++){
        if(arr[end]==0)zeroCount++;
        while(zeroCount > 1){
            if(arr[start]==0)zeroCount--;
            start++;
        };
        maxLength=Math.max(maxLength,end-start);
    };
    console.log(maxLength);
    return maxLength;
}

longestSubArrayAfterDeletingOne([0,1,1,1,0,1,1,0,1]);
longestSubArrayAfterDeletingOne([1,1,0,1]);
longestSubArrayAfterDeletingOne([1,1,1]);
longestSubArrayAfterDeletingOne([1,1,1,1]);

function largestNo(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max=arr[i];
        };
    };
    console.log(max);
}

largestNo([10, 25, 8, 60, 5]);
largestNo([1, 2, 3, 4, 5]);
largestNo([9, 7, 5, 3, 1]);
largestNo([-10, -3, -50, -2]);
largestNo([-10, 0, 5, -3, 2]);

function mergeTwoArrayWithoutDup(arr1,arr2){
    if(arr1.length==0 && arr2.length!==0){
        console.log(arr2);
        return arr2;
    }
    else if(arr2.length==0 &&  arr1.length!==0){
        console.log(arr1);
        return arr1;
    }
    else if(arr1.length==0 && arr2.length==0){
        console.log([]);
        return [];
    }


    arr1=arr1.sort((a,b)=>a-b);
    arr2=arr2.sort((a,b)=>a-b);
    let temp=[];
    let low=0;
    let high=0;

    while(low < arr1.length && high < arr2.length){
        if(arr1[low] < arr2[high]){
            if(temp.length > 0){
                if(temp[temp.length-1]!==arr1[low]){
                    temp.push(arr1[low]);
                }
            }else{
                temp.push(arr1[low])
            }
            low++;
        }else{
            if(temp.length > 0 ){
                if(temp[temp.length-1]!==arr2[high]){
                    temp.push(arr2[high]);
                }
            }else{
                temp.push(arr2[high]);
            }
            high++;
        }
    };

    while(low < arr1.length){
        if(temp.length > 0 && temp[temp.length-1]!==arr1[low]){
            temp.push(arr1[low]);
        }
        low++;
    }
    while(high < arr2.length){
        if(temp.length > 0 && temp[temp.length-1]!==arr2[high]){
            temp.push(arr2[high]);
        }
        high++;
    };
    console.log(temp);
    return temp;
}

mergeTwoArrayWithoutDup([1, 2, 3],[3, 4, 5]);
mergeTwoArrayWithoutDup([1, 2],[3, 4]);
mergeTwoArrayWithoutDup([],[1, 2, 3]);
mergeTwoArrayWithoutDup([1, 1, 2, 3],[3, 3, 4]);
mergeTwoArrayWithoutDup([-1, -2, 0],[0, 1, 2]);

function mergeTwoArrayWithoutDupBuiltIn(arr1,arr2){
    console.log([...new Set([...arr1,...arr2])]);
    return [...new Set([...arr1,...arr2])];
}

mergeTwoArrayWithoutDupBuiltIn([1, 2, 3],[3, 4, 5]);
mergeTwoArrayWithoutDupBuiltIn([],[1, 2, 3]);

function groupArr(arr){
    let obj={};
    arr.forEach((el,index)=>{
        if(obj[el.type]!==undefined && obj[el.type].length > 0){
            obj[el.type].push(el);
        }else{
            obj[el.type]=[el];
        }
    });
    console.log(obj);
}

groupArr([{type:"fruit",name:"apple"},
{type:"veg",name:"carrot"},
{type:"fruit",name:"banana"}])

function sortByAge(arr){
    arr=arr.sort((a,b)=>{
        return a.age-b.age;
    });
    console.log(arr);
    return arr;
}


sortByAge([
    { name: "A", age: 30 },
    { name: "B", age: 20 },
    { name: "C", age: 25 }
]);

function convertObj(arr){
    let obj={};
    arr.forEach((el,index)=>{
        obj[index]=el;
    });
    console.log(obj);
    return obj;
};
convertObj(["a","b","c"])

