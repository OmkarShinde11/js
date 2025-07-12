function sumOfTwo(arr,target){
    let obj={};
    let result=[];
    arr.forEach((el,index)=>{
        if(!obj.hasOwnProperty(target-el)){
            obj[el]=index;
        }
        else{
            result=[obj[target-el],index];
        }
    });
    console.log(result);
    return result;
}
sumOfTwo([2,7,11,15],9);
sumOfTwo([3,2,4],6);
sumOfTwo([3,3],6);


// You are given a 0-indexed string array words.

// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:

// isPrefixAndSuffix(str1, str2) returns true if str1 is both a 
// prefix
//  and a 
// suffix
//  of str2, and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.

// Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.

 

// Example 1:

// Input: words = ["a","aba","ababa","aa"]
// Output: 4
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
// i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
// i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
// i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
// Therefore, the answer is 4.
// Example 2:

// Input: words = ["pa","papa","ma","mama"]
// Output: 2
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("pa", "papa") is true.
// i = 2 and j = 3 because isPrefixAndSuffix("ma", "mama") is true.
// Therefore, the answer is 2.  
// Example 3:

// Input: words = ["abab","ab"]
// Output: 0
// Explanation: In this example, the only valid index pair is i = 0 and j = 1, and isPrefixAndSuffix("abab", "ab") is false.
// Therefore, the answer is 0.

function compareString(words){
    let count=0;
    for(let i=0;i<words.length;i++){
        if(words[i]==undefined) break;
        for(let j=i;j<words.length;j++){
            if(words[j+1]==undefined) break;
            if(isPrefixSuffix(words[i],words[j+1]))count++;
        }
    }
    console.log(count);
    return count;
}

function isPrefixSuffix(outer,inner){
    if(inner.startsWith(outer) && inner.endsWith(outer)) return true;
    return false;
}

compareString(["a","aba","ababa","aa"]);
compareString(["pa","papa","ma","mama"]);
compareString(["abab","ab"]);


// string.indexOf()
function strMatch(arr){
    let result=[];
    let duplicate=[];
    for(let i=0;i<arr.length;i++){
        duplicate.push(arr[i]);
        for(let j=0;j<arr.length;j++){
            if(!duplicate.includes(arr[j])){
                if(arr[j].indexOf(arr[i])!=-1){
                    if(!result.includes(arr[i]))result.push(arr[i]);
                }
            }
        }
        duplicate=[];
    }
    console.log(result);
    return result;
}
strMatch(["mass","as","hero","superhero"]);
strMatch(["leetcode","et","code"]);
strMatch(["blue","green","bu"]);
strMatch(["leetcoder","leetcode","od","hamlet","am"])


function ShiftLetter(str,arr){
    let chars=str.split('');  // here i split the string because string are immutable and arrays are mutable
    arr.forEach((inner)=>{
        if(inner[2]==0){
            for(let i=inner[0];i<=inner[1];i++){
                let charCode=chars[i].charCodeAt(0)-1;
                if(chars[i]=='a'){
                    chars[i]='z';
                    
                }else{
                    chars[i]=String.fromCharCode(charCode);
                }
            }
        }
        else{
            for(let i=inner[0];i<=inner[1];i++){
                let charCode=chars[i].charCodeAt(0)+1;
                if(chars[i]=='z'){
                    chars[i]='a';

                }else{
                    chars[i]=String.fromCharCode(charCode);
                }
            }
        }
    })
    console.log(chars.join(''));
    return chars.join('')
}
ShiftLetter('abc',[[0,1,0],[1,2,1],[0,2,1]]);
ShiftLetter('dztz',[[0,0,0],[1,1,1]]);


// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

 

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.
function countPrefix(arr,str){
    let counter=0;
    arr.forEach((ele)=>{
        // if(ele.startsWith(str))counter++;
        if(ele.substr(0,str.length)==str)counter++
    })
    console.log(counter);
    return counter;
}

countPrefix(["pay","attention","practice","attend"],'at');
countPrefix(["leetcode","win","loops","success"],'code');


// Find median of an array (check array is odd or even base on that find out median)
function median(arr1,arr2){
    let result=[...arr1,...arr2].sort((a,b)=>a-b);
    let median;
    console.log(result);
    if(result.length%2!==0){
        median=result[Math.floor(result.length/2)];
    }
    else{
        median=(result[(Math.floor(result.length/2)-1)]+result[Math.floor(result.length/2)])/2;
    }
    console.log(median)
    return median
}

median([1,3],[2]);
median([1,2],[3,4]);

// You are given two string arrays words1 and words2.

// A string b is a subset of string a if every letter in b occurs in a including multiplicity.

// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.

// Return an array of all the universal strings in words1. You may return the answer in any order.

 

// Example 1:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
// Output: ["apple","google","leetcode"]
function findSubset(arr1,arr2){
    let str=arr2.join('');
    let result=[];
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]);
        for(let j=0;j<str.length;j++){
            if(arr1[i].includes(str[j])){
                if(!result.includes(arr1[i]))
                result.push(arr1[i]);
            }
            else{
                result.pop(arr1[i]);
                break;
            }
        }
    }
    console.log(result);
    return result
}




function findAdvanceSubset(arr1,arr2){
    // find arr2 max freq
    let result=[];
    const maxFreq={};
    for(let i of arr2){
        const freqEachWord=getFreq(i);
        for(let j in freqEachWord){
            maxFreq[j]=Math.max(maxFreq[j]||0 ,freqEachWord[j]);
        }
    }
    console.log(maxFreq);

    // find freq of each word in arr1

    for(let current of arr1){
        const freqCurrEachWord=getFreq(current);
        result.push(current);
        // console.log(freqCurrEachWord);

        // here loop on maxFreq and check with freqCurrEachWord 
        for(let char in maxFreq){
            if((freqCurrEachWord[char]|| 0) < maxFreq[char]){
                result.pop(current);
                break;
            }
        }
    }
    console.log(result);
    return result;
}

function getFreq(word){
    let freq={};
    for(let i of word){
        freq[i]=(freq[i] || 0)+1
    }
    return freq;
}

findSubset(["amazon","apple","facebook","google","leetcode"], ["e","o"]);
findSubset(["amazon","apple","facebook","google","leetcode"], ["l","e"]);
findSubset(["amazon","apple","facebook","google","leetcode"], ["lo",'eo']);
findAdvanceSubset(["amazon","apple","facebook","google","leetcode"], ["e","oo"])



function largest(arr){
    arr=arr.map(String);
    arr.sort((a,b)=>a+b > b+a ? -1:1);
    if(arr[0]==0) return "0";
    return arr.join('');
}
largest([3, 30, 34, 5, 9]);
largest(["0","0"]);



// Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.
// Example 1:
// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
// Example 2:

// Input: s = "leetcode", k = 3
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.
// Example 3:

// Input: s = "true", k = 4
// Output: true
// Explanation: The only possible solution is to put each character in a separate string.
function kString(str,k){
    let freq={};
    let oddCount=0;
    for(let s of str){
        freq[s]=(freq[s] || 0)+1
    };
    for(let i in freq){
        if(freq[i]%2!==0)oddCount++
    }

    if(k>str.length) return false;
    if(oddCount>k) return false;
    return true;
}
kString('annabelle',2);
kString('leetcode',3);
kString('true',4);



function canBeValid(s, locked) {
    const n = s.length;

    // A valid parentheses string must have an even length
    if (n % 2 !== 0) return false;

    // Check left-to-right pass
    let open = 0; // Count of available '('
    let flexible = 0; // Count of freely changeable positions
    for (let i = 0; i < n; i++) {
        if (locked[i] === '1') {
            if (s[i] === '(') open++;
            else open--; // Closing parenthesis
        } else {
            flexible++; // Position can be changed freely
        }

        // If open + flexible falls below 0, it's invalid
        if (open + flexible < 0) return false;
    }

    // Check right-to-left pass
    let close = 0; // Count of available ')'
    flexible = 0; // Reset flexible count
    for (let i = n - 1; i >= 0; i--) {
        if (locked[i] === '1') {
            if (s[i] === ')') close++;
            else close--; // Opening parenthesis
        } else {
            flexible++; // Position can be changed freely
        }

        // If close + flexible falls below 0, it's invalid
        if (close + flexible < 0) return false;
    }

    return true; // Passed both left-to-right and right-to-left checks
}

canBeValid('))()))','010100');
// checkParenthesis('()()','0000');
// checkParenthesis(')','0');
// checkParenthesis('()',"11");
// checkParenthesis("))))(())((()))))((()((((((())())((()))((((())()()))(()","101100101111110000000101000101001010110001110000000101")

// function continueSubArray(arr,k){
//     let check=true;
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//         if(arr[i+1]!=undefined){
//             if((arr[i]+arr[i+1])%k==0){
//                 check=false;
//                 break;
//             }
//         }
//     }
//     console.log(sum);
//     if(!check){
//         return true
//     }
//     else{
//         if(sum%k==0) return true;
//         return false;
//     }
// }

// function continueSubArray(arr,k){
//     let check=true;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]!=undefined){
//                 if((arr[i]+arr[j])%k==0 && j==i+1){
//                     check=false;
//                     break;
//                 }
//             }
//         }
//         if(!check) break;
//     }
//     if(!check){
//         return true;
//     }
//     else{
//         let sum=0;
//         arr.forEach((el)=>{
//             sum+=el;
//         })
//         if(sum%k==0) return true;
//         return false;
//     }
// }

function continueSubArray(arr,k){
    let check=true;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let indexArr=arr.slice(i+1);
        for(let j=0;j<indexArr.length;j++){
            sum+=indexArr[j];
            if(sum%k==0){
                check=false;
                break;
            }
        }
        if(!check) break
        sum=0
    }
    console.log(sum);
    if(!check){
        return true
    }
    else{
        return false
    }
    // else{
    //     if(sum%k==0) return true;
    //     return false;
    // }
}
continueSubArray([23,2,4,6,7],6)
continueSubArray([23,2,6,4,7],6)
continueSubArray([23,2,6,4,7],13);
continueSubArray([23,2,4,6,6],7);

function continueSubArrayOpt(arr,k){
    let map=new Map();
    let sum=0;
    map.set(0, -1); // set default remainder 0 in map. if in case in iteration if we not get same remainder.
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let remainder=sum%k;
        if (map.has(remainder)) {
            if (i - map.get(remainder) > 1) {
                return true; 
            }
        } else {
            map.set(remainder, i); 
        }
    }
    return false;
}
continueSubArrayOpt([23,2,4,6,7],6);
continueSubArrayOpt([23,2,4,6,6],7);


// You are given a string s.

// You can perform the following process on s any number of times:

// Choose an index i in the string such that there is at least one character to the left of index i that is equal to s[i], and at least one character to the right that is also equal to s[i].
// Delete the closest character to the left of index i that is equal to s[i].
// Delete the closest character to the right of index i that is equal to s[i].
// Return the minimum length of the final string s that you can achieve.

 

// Example 1:

// Input: s = "abaacbcbb"

// Output: 5

// Explanation:
// We do the following operations:

// Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = "bacbcbb".
// Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = "acbcb".
// Example 2:

// Input: s = "aa"

// Output: 2

// Explanation:
// We cannot perform any operations, so we return the length of the original string.

//Hints:
// 1.Only the frequency of each character matters in finding the final answer.
// 2.If a character occurs less than 3 times, we cannot perform any process with it.
// 3.Suppose there is a character that occurs at least 3 times in the string, we can repeatedly delete two of these characters until there are at most 2 occurrences left of it.
function findLength(str){
    let freqObj={};
    let chars=str.split('');
    for(let i=0;i<chars.length;i++){
        freqObj[chars[i]]=(freqObj[chars[i]]||0)+1;
    }
    // console.log(freqObj);
    for(let i in freqObj){
        if(freqObj[i]>=3){
            freqObj[i]=atMost(freqObj[i]);
        }   
    }
    let length= Object.values(freqObj).reduce((total,curr)=>{
        return total+=curr;
    },0)
    // console.log(freqObj);
    console.log(length);
    return length;
}

function atMost(number){
    number=number-2;
    if(number<=2){
        return number
    }else{
        return atMost(number);
    }
}

findLength('abaacbcbb');
findLength('aa');
findLength("ucvbutgkohgbcobqeyqwppbxqoynxeuuzouyvmydfhrprdbuzwqebwuiejoxsxdhbmuaiscalnteocghnlisxxawxgcjloevrdcj");

function prefixCommonArray(arr1,arr2){
    let result=[];
    let length=arr1.length;
    for(let i=0;i<length;i++){
        let count=0;
        if(i==0){
            if(arr1[i]==arr2[i]){ 
                result.push(1);
            }else{
                result.push(0);
            }
        }else{
            let slice1=arr1.slice(0,i+1);
            let slice2=arr2.slice(0,i+1);
            slice1.forEach(el=>{
                if(slice2.includes(el))count++
            })
            result.push(count);
            count=0;
        }
    }
    console.log(result);
    return result;
    // iteration on length of an array.
    // in iteration take a slice of both array and then check 
    // define count as a variable and then iterating one of the array and if ele includes increment counter and after iteration assign that value to new array ai current index.
}

function optPrefixCommonArray(arr1,arr2){
    let freq=new Array(arr1.length+1).fill(0);
    let count=0;
    let result=[];
    for(let i=0;i<arr1.length;i++){
        freq[arr1[i]]++;
        if(freq[arr1[i]]==2){
            count++;
        }

        freq[arr2[i]]++
        if(freq[arr2[i]]==2){
            count++;
        }
        result.push(count);
    }
    console.log(result);
    return result;
}
optPrefixCommonArray([1,3,2,4],[3,1,2,4])
optPrefixCommonArray([2,3,1],[3,1,2]);
prefixCommonArray([1,3,2,4],[3,1,2,4]);
prefixCommonArray([2,3,1],[3,1,2]);

// function mnimizeXor(num1,num2){
//     let num2SetBits=countBits(num2);
//     console.log(num2SetBits);

//     let count=0;
//     let minValue=Infinity;
//     let minx=null;

//     while(true){
//         if(countBits(count) ===num2SetBits){
//             let xOr=count^num1;
//             if(xOr<minValue){
//                 minValue=xOr;
//                 minx=count
//             };
//         }
//         count++;
//         console.log(count);
//         if(count>(num1+num2)) break;
//     }
//     console.log(minx);
//     return minx
// }

// function countBits(num){
//     return num.toString(2).split('1').length-1;
// }
// mnimizeXor(3,5);
// mnimizeXor(1,12);

function maxK(nums,k){
    let count=0;
    let check=true;
    while(nums.length>2){
        for(let i=0;i<nums.length;i++){
            check=true;
            for(let j=i+1;j<=nums.length-1;j++){
                if(nums[i]+nums[j]==k){
                    count++;
                    if(i>j){
                        nums.splice(i,1);
                        nums.splice(j,1)
                    }
                    else{
                        nums.splice(j,1);
                        nums.splice(i,1);
                    }
                    check=false
                }
                if(!check)break;
            }
            if(!check) break
        }
        if(check)break;
    }
    if(nums[0]+nums[1]==k)count++;
    console.log(count);
    return count;
}

maxK([1,2,3,4],5);
maxK([3,1,3,4,3],6);
maxK([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2],3);

// function xorAllNums(num1,num2){
//     let result=0
//     for(let i=0;i<num1.length;i++){
//         for(let j=0;j<num2.length;j++){
//             result^=(num1[i]^num2[j]);
//         }
//     }
//     console.log(result);
//    return result
// }


function xorAllNums(nums1,nums2){
    let xorNums1 = 0 
    let xorNums2 = 0;
    for (let num of nums1) {
        xorNums1 ^= num;
    }
    for (let num of nums2) {
        xorNums2 ^= num;
    }
    
    if (nums2.length % 2 === 0) xorNums1 = 0;
    if (nums1.length % 2 === 0) xorNums2 = 0;
    // Combine results
    return xorNums1 ^ xorNums2;
}

xorAllNums([2,1,3],[10,2,5,0]);


function validXORArray(derived){
    let result=derived.reduce((total,current)=>{
        return total^=current;
    },0);
    return result==0?true:false;
};

validXORArray([1,1,0]);
validXORArray([1,1]);
validXORArray([1,0]);

function minCostToReachTarget(grid){
    const numRows = grid.length;
    const numCols = grid[0].length;
  
    // Directions: right (1), left (2), down (3), up (4)
    const directions = [
      [0, 1],  // right
      [0, -1], // left
      [1, 0],  // down
      [-1, 0], // up
    ];
  
    // Create a deque for BFS
    const deque = [[0, 0, 0]]; // [row, col, cost]
    const minChanges = Array.from({ length: numRows }, () =>
      Array(numCols).fill(Infinity)
    );
    minChanges[0][0] = 0;
  
    while (deque.length > 0) {
      const [i, j, cost] = deque.shift();
  
      // Skip if this path is already suboptimal
      if (cost > minChanges[i][j]) continue;
  
      // Explore neighbors
      for (let d = 0; d < 4; d++) {
        const ni = i + directions[d][0];
        const nj = j + directions[d][1];
  
        if (ni >= 0 && ni < numRows && nj >= 0 && nj < numCols) {
          const newCost = cost + (grid[i][j] === d + 1 ? 0 : 1);
  
          if (newCost < minChanges[ni][nj]) {
            minChanges[ni][nj] = newCost;
  
            // If cost is 0, prioritize by adding to the front of the deque
            if (newCost === cost) {
              deque.unshift([ni, nj, newCost]);
            } else {
              deque.push([ni, nj, newCost]);
            }
          }
        }
      }
    }
    console.log(minChanges[numRows - 1][numCols - 1]);
    return minChanges[numRows - 1][numCols - 1];
  };
  

minCostToReachTarget([[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]);

// function firstcomplete(arr,mat){
//     let m=mat.length; //No of row
//     let n=mat[0].length; //No of col
//     let rowCount=new Array(m).fill(0); //freq of row
//     let colCount=new Array(n).fill(0); //freq of col
//     let index;
//     let check=false;
//     for(let i=0;i< arr.length;i++){
//         for(let j=0;j< m;j++){
//             let curIndex=mat[j].indexOf(arr[i]);
//             // if(curIndex==-1)break;
//             if(curIndex!=-1){
//                 mat[j][curIndex]=0;
//                 rowCount[j]++;
//                 colCount[curIndex]++;
//             }
//             if(rowCount[j]==n || colCount[curIndex]==m){
//                 check=true;
//                 index=i;
//                 break
//             }
//         }
//         if(check)break;
//     }
//     console.log('index',index);
// }

// another approch
function firstcomplete(arr,mat){
    let m=mat.length; //No of row
    let n=mat[0].length; //No of col
    let rowCount=new Array(m).fill(0); //freq of row
    let colCount=new Array(n).fill(0); //freq of col
    let index;
    let check=false;
    let positionMap=new Map();
    for(let i=0;i<m;i++){
        for(let j=0;j< n;j++){
           if(!positionMap.has(mat[i][j])){
            positionMap.set(mat[i][j],[]);
           }
           positionMap.get(mat[i][j]).push(i,j);
        }
    }
    for(let i=0;i<arr.length;i++){
       let [row,col]=positionMap.get(arr[i]);
       rowCount[row]++;
       colCount[col]++;
       if(rowCount[row]==n || colCount[col]==m){
            index=i;
            break;
        }
    }
    console.log('index',index);
}


firstcomplete([2,8,7,4,1,3,5,6,9],[[3,2,5],[1,4,6],[8,7,9]])
firstcomplete([1,3,4,2],[[1,4],[2,3]]);
firstcomplete([1,4,5,2,6,3],[[4,3,5],[1,2,6]])

// function gridGame(arr){
//     let colLength=arr[0].length;
//     let rowLength=arr.length;
//     let firstRowSum=arr[0].reduce((el,curr)=>el+=curr);
//     console.log(firstRowSum);
//     let secondRowSum=0;
//     let minSum=Infinity;
    
//     //two robots plays game.
//     // find out path for robot1 which take collect more value while travelling
//     // for robot2 check two paths from robot1 there is 1 turn point where it move to second row
//     // 1.travel robot 2 in such a way that it collect the point after turn point.
//     // 2.travel robot 2 in such a way that it collect the point before turn point.
//     // check which on is greater and return that.
// }

// function gridGame(grid){
//     let s0 = 0
//     let s1 = 0
//     let n = grid[0].length
//     for(let i=0;i<n;i++){
//         s0+=grid[0][i];
//         s1+=grid[1][i];
//     }
//     console.log('s0:::',s0)
//     console.log('s1:::',s1)

//     let robot1 = grid[0][0];
//     let bottomShifted = false;
//     let bottomSI = -1;
//     for(let i=0;i<grid.length;i++){
//         for(let j=0;j<grid[0].length;j++){
//             let bottomValue = grid[i+1][j]
//             let rightValue = grid[i][j+1];
//             if(rightValue > bottomValue){
//                 robot1+= rightValue
//             } else {
//                 // robot1+=bottomValue;
//                 bottomShifted = true;
//                 bottomSI = j
//                 break;
//             }
//         }
//         if(bottomShifted)break;
//     }

//     if(bottomShifted){
//         for(let k=bottomSI;k<grid[1].length;k++){
//             robot1+=grid[1][k]
//         }
//     }
//     console.log('robot1:::',robot1)

//     return s0+s1-robot1
// }


function gridGame(grid){
    let firstRowSum = 0;
    for (let num of grid[0]) {
        firstRowSum += num;
    }
    let secondRowSum = 0;
    let minimumSum = Infinity;
    for (let turnIndex = 0; turnIndex < grid[0].length; ++turnIndex) {
        firstRowSum -= grid[0][turnIndex];
        // Find the minimum maximum value out of firstRowSum and
        // secondRowSum.
        minimumSum = Math.min(
            minimumSum,
            Math.max(firstRowSum, secondRowSum)
        );
        secondRowSum += grid[1][turnIndex];
    }
    return minimumSum;
}

gridGame([[2,5,4],[1,5,1]]);
gridGame([[1,3,1,15],[1,3,3,1]]);

function mapOfHeighest(grid){
    let row=grid.length;
    let col=grid[0].length;
    const height = Array.from({ length: row }, () => Array(col).fill(-1));
    // let height=[];
    // for(let i=0;i<row;i++){
    //     let inner=[]
    //     for(let j=0;j<col;j++){
    //         inner.push(-1)
    //     }
    //     height.push(inner);
    // };
    let quene=[];
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(grid[i][j]==1){
                height[i][j]=0;
                quene.push([i,j])
            }
        }
    }
    console.log(height);
    console.log(quene);

    const directions = [
        [0, 1], // Right
        [1, 0], // Down
        [0, -1], // Left
        [-1, 0], // Up
    ];

    while (quene.length > 0) {
        const [x, y] = quene.shift();

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check if the neighbor is within bounds and unvisited
            if (nx >= 0 && nx < row && ny >= 0 && ny < col && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1; // Assign height to the neighbor
                quene.push([nx, ny]); // Add neighbor to the queue
            }
        }
    }
    console.log('Updated height',height);
    return height;
}

mapOfHeighest([[0,0,1],[1,0,0],[0,0,0]]);
mapOfHeighest([[0,1],[0,0]]);
mapOfHeighest([[0,0],[1,1],[1,0]])




function print(n){
    for(let i=0;i<n;i++){
        console.log(i);
    }
    for(let j=n-1;j>=0;j--){
        console.log(j);
    }
}
print(3);


function print2D(n){
    let result=[];
    for(let i=0;i<n;i++){
        let inner=[];
        for(let j=0;j<n;j++){
            inner.push(i,j);
        }
        result.push(inner);
    }
    console.log(result);
}

print2D(2);


// QUESTION:find out second largest number from an array.
// Optimize code

function secondlargestOpt(arr){
    let largest=-1;
    let secondlargestele=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondlargestele=largest;
            largest=arr[i];
        }
        else if(arr[i]<largest && arr[i]>secondlargestele){
            secondlargestele=arr[i];
        }
    }
    console.log('secondlargestele',secondlargestele);
}
secondlargestOpt([12,35,1,10,34,1]);
secondlargestOpt([10,5,10]);
secondlargestOpt([2, 4, 5, 6, 8]);
secondlargestOpt([10,10,10]);

function secondLargestLinear(arr){
    let largest=-Infinity;
    let secondNum=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest) largest=arr[i];
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=largest){
            if(arr[i]>largest){
                secondNum=arr[i];
            }
        }
    }
    console.log('linear',secondNum);
}
secondLargestLinear([10,5,10]);


// QUESTION:rotateArray upto k
// [1,2,3,4,5,6,7],3  output:[5,6,7,1,2,3,4]
function rotateArrayK(arr,k){
    let newArr=[];
    for(let i=1;i<=k;i++){
        newArr.push(arr[arr.length-i]);
    }
    console.log(newArr);
    let filter=arr.filter((el)=>!newArr.includes(el));
    console.log(filter);
    filter.unshift(newArr);
    // console.log([...newArr.reverse(),...filter]);
    console.log(filter.flat());
    // return [...newArr.reverse(),...filter];
}

// Optimize version
function rotateArrayKOpt(arr,k){
    let nums=arr.splice(arr.length-k);
    arr.unshift(...nums);
    console.log(arr);
    return arr;
}
// using while loop
function rotateArrayWhile(arr,k){
    // arr is [1,2,3,4,5,6,7] and k=3
    // so first we reverse an whole array [7,6,5,4,3,2,1] then reverse till k =3 means [5,6,7,4,3,2,1] then remaining array [4,3,2,1]=>[1,2,3,4] last output=[5,6,7,1,2,3,4]
    reverseNumber(arr,0,arr.length-1)
    reverseNumber(arr,0,k-1);
    reverseNumber(arr,k,arr.length-1)

    console.log(arr);
    return arr
}
function reverseNumber(arr,start,end){
    while(start<end){
        let temp=arr[start];
        arr[start++]=arr[end];
        arr[end--]=temp;
    }
}
rotateArrayWhile([1,2,3,4,5,6,7],3)
rotateArrayKOpt([1,2,3,4,5,6,7],3);
rotateArrayKOpt([-1,-100,3,99],2);

function removedup(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=0
    };
    return Object.keys(obj);
}
console.log(removedup([3,3,5,4,3,5]))

// using two pointer approch
// this approch is for sorted array
function removedupOpt(arr){
    let i=0;
    // let result=[];
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            // result.push(arr[j]);
            i++;
            arr[i]=arr[j];
        }
    }
    console.log(i+1);
    return i+1
}
removedupOpt([0,0,1,1,1,2,2,3,3,4])
removedupOpt([3,3,5,4,3,5])


function remove(nums,val){
    // let sortarr=nums.sort((a,b)=>a-b);
    // let count=0;
    // for(let i=0;i<sortarr.length;i++){
    //     if(sortarr[i]!=val){
    //         count++;
    //     }else{
    //         sortarr.splice(i,1);
    //         i--;
    //     }
    // }
    // console.log(count);
    // console.log(sortarr);
    // return count;

    // another approch
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1);
            i--
        }
        else{
            count++;
        }
    }
    console.log('Removecount',count);
}
remove([3,2,2,3],3);
remove([0,1,2,2,3,0,4,2],2)

//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums,target){
    // const index=nums.findIndex(el=>el==target);
    // let assumeIndex;
    // if(index!=-1) {
    //     console.log(index)
    //     return index;
    // } else {
    //     for(let i=0;i<nums.length;i++){
    //         if(target<nums[i]){
    //             assumeIndex=i;
    //             break;
    //         }
    //     }
    //     if(assumeIndex==undefined) assumeIndex=nums.length;
    //     console.log(assumeIndex);
    //     return assumeIndex
    // }

    // do using while
    let index=0;
    while(index<nums.length){
        if(target<=nums[index])break;
        index++;
    }
    console.log('index',index)
}
searchInsert([1,3,5,6],2);
searchInsert([1,3,5,6],5);
searchInsert([1,3,5,6],7);

//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


function plusOne(digits){
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the digit is less than 9, increment it and return the result
            digits[i]++;
            console.log(digits)
            return digits;
        }
        // If the digit is 9, set it to 0 and continue to propagate the carry
        digits[i] = 0;
    }
    // If all digits were 9, add a 1 at the beginning
    digits.unshift(1);
    console.log(digits);
    return digits;
}
plusOne([1,2,3]);
plusOne([9]);
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
plusOne([9,9]);

let entry=[1,2,3,4,5];
let source=[2,3,4];
let values=entry.map(el=>[el]);
let map=new Map(values);
console.log(map);
console.log(source.some(el=>map.has(el)));

let set=new Set(entry);
console.log('set',set);
console.log(source.some(el=>set.has(el)));


//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

var merge = function(nums1, m, nums2, n) {
    // brute force approch
    // let new1=nums1.slice(0,m);
    // let new2=nums2.slice(0,n);
    // let final=[...new1,...new2];
    // let result= final.sort((a,b)=>a-b);
    // console.log(result);

    // optimized approch
    let p1=m-1;
    let p2=n-1;
    let p=m+n-1;

    while(p2>=0){
        if(p1>=0 && nums1[p1]>nums2[p2]){
            nums1[p]=nums1[p1];
            p1--
        }
        else{
            nums1[p]=nums2[p2];
            p2--
        }
        p--
    }
    console.log(nums1);
};

merge([1,2,3,0,0,0],3,[2,5,6],3);
merge([1],1,[],0);
merge([0],0,[1],1);


// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function makeProfit(arr){
    // let profit=0;
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[j]-arr[i]>profit){
    //             profit=arr[j]-arr[i];
    //         }
    //     }
    // }
    // console.log(profit);

    // another approch

    // let index=0;
    // let profit=-1
    // for(let j=index+1;j<arr.length;j++){
    //     if(arr[j]-arr[index]>profit){
    //         profit=arr[j]-arr[index];
    //     }
    //     if(j==arr.length-1){
    //         index++;
    //         j=index;
    //     }
    // }
    // if(profit<0) profit=0
    // console.log(profit);

    // another approch

    // set minPrice to high value
    // set max Profit to low value
    // iterate array current element is an currentPrice 
    // update minPrice with comapre with current
    // find profit=current-minPrice
    // compare with maxprofit.

    let minPrice=Infinity;
    let maxprofit=0;
    for(let i=0;i<arr.length;i++){
        minPrice=Math.min(minPrice,arr[i]);
        let profit=arr[i]-minPrice;
        maxprofit=Math.max(profit,maxprofit);
    }
    console.log(maxprofit);

}
makeProfit([7,1,5,3,6,4]);
makeProfit([7,6,4,3,1]);
makeProfit([2,4,1]);


//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1
function singleNumber(arr){
    let obj=new Map()
    let singleNo;

    // for (let i = 0; i < arr.length; i++) {
    //     obj.set(arr[i], (obj.get(arr[i]) || 0) + 1);
    // }
    // console.log(obj);

    // for(let [key, value] of obj){
    //     if(obj.get(key)==1){
    //         singleNo=key
    //         break;
    //     }
    // }
    // console.log(singleNo);
    // return singleNo;

    // Bit Manipulation
    let single=0;
    for(let i=0;i<arr.length;i++){
        single^=arr[i];
    }
    console.log(single);
    return single
}

singleNumber([2,2,1]);
singleNumber([4,1,2,1,2]);
singleNumber([1]);

//Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majority(arr){
    let occurence=Math.round(arr.length/2);
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || 0)+1);
    }
    console.log(map);
    for(let [key,value] of map){
        if(map.get(key)>=occurence){
            return key
        }
    }
}
majority([2,2,1,1,1,2,2]);
majority([3,2,3]);
majority([2,2]);


//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.


function containsDup(arr){
    let map=new Map();
    let result;
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || 0)+1);
    }
    console.log(map);
    for(let [key,value] of map){
        if(map.get(key)>=2){
            result=true;
            console.log(result)
            return result;
        }
    }
    result=false;
    console.log(result)
    return false;
}
containsDup([1,2,3,1]);
containsDup([1,2,3,4]);
containsDup([2,14,18,22,22]);

//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


function containDup2(arr,k){
    let result=false;
    let check=false;
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.get(arr[i]).push(i);
        }
        else{
            map.set(arr[i],[i]);
        }
    }
    console.log(map);

    for(let [key,value] of map){
        if(value.length>1){
            for(let inner=0;inner<value.length;inner++){
                if(value[inner+1]==undefined)break;
                let abs=Math.abs(value[inner]-(value[inner+1]));
                if(abs <= k){
                    result=true;
                    check=true
                    break;
                }
            }
            if(check)break;
        }
    }
    console.log(result);
    return result
}
containDup2([1,2,3,1],3);
containDup2([1,0,1,1],1);
containDup2([1,2,3,1,2,3],2);

//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
function missingNumber(arr){
    let map=new Map();
    for(let i=0;i<=arr.length;i++){
        map.set(arr[i],0);
    }
    // console.log(map);

    for(let i=0;i<=arr.length;i++){
        if(!map.has(i)){
            console.log(i);
            return i;
        }
    }
}
missingNumber([3,0,1]);
missingNumber([0,1]);
missingNumber([9,6,4,2,3,5,7,0,1]);

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZero(arr){
        // let count=0;
        // for(let i=0;i<arr.length;i++){
        //     if(arr[i]==0){
        //         count++;
        //         arr.splice(i,1);
        //         i--;
        //     }
        // }
        // let fillArr=new Array(count).fill(0);
        // arr.push(...fillArr);
        // console.log(arr)
        // return arr;

        let slow=0;
        let fast=0;
        for(let i=fast;i<arr.length;i++){
            if(arr[i]!=0){
                let temp=arr[slow];
                arr[slow]=arr[i];
                arr[i]=temp;
                slow++;
            }
        }
        console.log(arr);
}
moveZero([0,1,0,3,12]);
moveZero([0]);
moveZero([0,0,1]);


[1,4,6,8,9,3];
[3,9,8,6,4,1];
function ownReverse(arr){
    let start=0;
    let end=arr.length-1;
    for(let i=start;i<end;i++){
        let temp=arr[end];
        arr[end]=arr[i];
        arr[i]=temp;
        end--
    }
    console.log(arr);
}
ownReverse([1,4,6,8,9,3]);


class NumArray{
    constructor(nums){
        this.prefixSum=new Array(nums.length+1).fill(0);
        for(let i=0;i<nums.length;i++){
            this.prefixSum[i+1]=this.prefixSum[i]+nums[i];
        }
    }

    sumRange(left,right){
        console.log('range sum',this.prefixSum[right + 1] - this.prefixSum[left])
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }

}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); 
console.log(numArray.sumRange(2, 5)); 
console.log(numArray.sumRange(0, 5));


//Given two integer arrays nums1 and nums2, return an array of their intersection
// . Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
function intersection(nums1,nums2){
    // let arr=[];
    // nums1.forEach((el)=>{
    //     if(nums2.includes(el)){
    //         if(!arr.includes(el))arr.push(el);
    //     }
    // });
    // return arr;
    // another approch
    let map=new Map();
    let set=new Set();
    nums1.forEach(el=>{
        if(!map.has(el)) map.set(el,0);
    })
    nums2.forEach(el=>{
        if(map.has(el))set.add(el);
    })
    console.log(set);
    return [...set];
}

intersection([1,2,2,1],[2,2]);
intersection([4,9,5],[9,4,9,8,4]);
intersection([1],[1]);


// kadane's algorithm.
[-2,1-3,4,-1,2,1,-5,4]
[5,4,-1,7,8]

// find subarray with largest sum.

// brute force approch
function sumlargest(arr){
    let largestSum=arr[0]
    for(let i=0;i<arr.length;i++){
        let currentSum=0
        for(let j=i;j<arr.length;j++){
            currentSum+=arr[j];
            if(currentSum>largestSum){
                largestSum=currentSum
            }
        }
    }
    console.log(largestSum);
    return largestSum;
}
// kadane's algo. approch
function sumlargestOpt(arr){
    let maxSum=arr[0];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum > maxSum){
            maxSum=sum;
        }
        if(sum<0){
            sum=0
        }
    };
    console.log(maxSum);
    return maxSum;
}
sumlargest([-2,1-3,4,-1,2,1,-5,4]);
sumlargest([5,4,-1,7,8]);
sumlargestOpt([-2,1-3,4,-1,2,1,-5,4]);
sumlargestOpt([5,4,-1,7,8]);
sumlargestOpt([-1]);

// You are given a 0-indexed integer array nums. A subarray s of length m is called alternating if:

// m is greater than 1.
// s1 = s0 + 1.
// The 0-indexed subarray s looks like [s0, s1, s0, s1,...,s(m-1) % 2]. In other words, s1 - s0 = 1, s2 - s1 = -1, s3 - s2 = 1, s4 - s3 = -1, and so on up to s[m - 1] - s[m - 2] = (-1)m.
// Return the maximum length of all alternating subarrays present in nums or -1 if no such subarray exists.

// A subarray is a contiguous non-empty sequence of elements within an array.

//Input: nums = [2,3,4,3,4]

// Output: 4

// Explanation:

// The alternating subarrays are [2, 3], [3,4], [3,4,3], and [3,4,3,4]. The longest of these is [3,4,3,4], which is of length 4.
function longSubArray(nums) {
    let maxLength = -1;
    let length = 1; // Start with a length of 1

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === (length % 2 === 1 ? 1 : -1)) {
            length++; // Extend the alternating sequence
        } else {
            length = nums[i + 1] - nums[i] === 1 ? 2 : 1; // Reset length if a new alternating start is found
        }
        maxLength = Math.max(maxLength, length);
    }
    console.log( maxLength > 1 ? maxLength : -1);
    return maxLength > 1 ? maxLength : -1;
}

longSubArray([2,3,4,3,4]);
longSubArray([4,5,6]);
longSubArray([21,9,5]);
longSubArray([31,32,31,32,33]);
longSubArray([42,43,44,43,44,43,44,45,46]);

// Given an integer array nums, find a 
// subarray
// that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
       // if (nums[i] < 0) [maxProd, minProd] = [minProd, maxProd]; // here just min==max max=min; but here use destructuring  // alternative way is
       if(nums[i]<0){
            let temp=maxProd;
            maxProd=minProd;
            minProd=temp;
        }
        maxProd = Math.max(nums[i], nums[i] * maxProd);
        minProd = Math.min(nums[i], nums[i] * minProd);

        result = Math.max(result, maxProd);
    }
    console.log('product',result)
    return result;
};

maxProduct([2,3,-2,4]);
maxProduct([-2,0,-1]);
maxProduct([-2]);
maxProduct([-3,-1,-1]);
maxProduct([0,2])

// Given an array of positive integers nums, return the maximum possible sum of an 
// strictly increasing subarray
// in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.

// Example 1:

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
// Example 2:

// Input: nums = [10,20,30,40,50]
// Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
// Example 3:

// Input: nums = [12,17,15,13,10,11,12]
// Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
function ascMaxSum(arr){
    let maxAscSum=arr[0];
    let currentSum=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]<arr[i]){
            currentSum+=arr[i];
            if(currentSum>maxAscSum) maxAscSum=currentSum;
        }else{
            if(currentSum>maxAscSum) maxAscSum=currentSum;
            currentSum=arr[i];
        }
    }
    console.log(maxAscSum);
    return maxAscSum;
}
ascMaxSum([12,17,15,13,10,11,12]);
ascMaxSum([10,20,30,5,10,50]);
ascMaxSum([10,20,30,40,50]);


//You are given an integer array nums and two integers l and r. Your task is to find the minimum sum of a subarray whose size is between l and r (inclusive) and whose sum is greater than 0.

// Return the minimum sum of such a subarray. If no such subarray exists, return -1.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [3, -2, 1, 4], l = 2, r = 3

// Output: 1

// Explanation:

// The subarrays of length between l = 2 and r = 3 where the sum is greater than 0 are:

// [3, -2] with a sum of 1
// [1, 4] with a sum of 5
// [3, -2, 1] with a sum of 2
// [-2, 1, 4] with a sum of 3
// Out of these, the subarray [3, -2] has a sum of 1, which is the smallest positive sum. Hence, the answer is 1.

// Example 2:

// Input: nums = [-2, 2, -3, 1], l = 2, r = 3

// Output: -1

// Explanation:

// There is no subarray of length between l and r that has a sum greater than 0. So, the answer is -1.

// Example 3:

// Input: nums = [1, 2, 3, 4], l = 2, r = 4

// Output: 3

// Explanation:

// The subarray [1, 2] has a length of 2 and the minimum sum greater than 0. So, the answer is 3.
function minPositiveSum(arr,l,r){
    let length=0;
    let minSum=Infinity;
    let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
            length+=1;
            if(sum>0){
                if(sum<minSum && length>=l && length<=r) minSum=sum;
            }
            for(let j=i+1;j<arr.length;j++){
                length++;
                if(length>r)break;
                sum+=arr[j];
                if(sum>0){
                    if(sum<minSum && length>=l && length<=r) minSum=sum;
                }
            }
            length=0;
            sum=0
        }
        if(minSum<0 || minSum==Infinity) minSum=-1
        console.log(minSum);
        return minSum;
    
    
}
minPositiveSum([3, -2, 1, 4],2,3);
minPositiveSum([-2, 2, -3, 1],2,3);
minPositiveSum([1, 2, 3, 4],2,4);
minPositiveSum([4,-10],1,1);
minPositiveSum([-12,8],1,1);
minPositiveSum([9,11,-9],3,3);

function maxSumProdEqual(arr){
    let lcmarr=arr.reduce((acc,curr)=>lcm(acc,curr),1);
    console.log('lcmarr',lcmarr);
    let index=0
    let length=1;
    let maxLength=-1;
    let prod=arr[0];
    for(let i=index+1;i<arr.length;i++){
        prod*=arr[i];
        length++;
        if(prod>lcmarr){
            index++;
            prod=arr[index];
            length=1;
            i=index;
        }
        if(prod==lcmarr){
            if(length>maxLength)maxLength=length;
        }
    }
    console.log('length',maxLength);
    return maxLength;

}
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

maxSumProdEqual([1,2,1,2,1,1,1]);
maxSumProdEqual([2,3,4,5,6]);
maxSumProdEqual([1,2,3,1,4,5,1]);
maxSumProdEqual([2,6]);


function longestAlternatingSubarray(arr,n){
    let maxLength=-1
    let length=0;
    let isStart=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=n && arr[i]%2==0){
            isStart=true;
            length++;
            if(length>maxLength) maxLength=length;
        }
        if(isStart){
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]<=n){
                    if(isStart){
                        if(arr[j]%2!==0){
                            isStart=false;
                            length++
                            if(length>maxLength) maxLength=length;
                            continue;
                        }else{
                            length=0
                            break;
                        }
                    }
                    if(!isStart){
                        if(arr[j]%2==0){
                            isStart=true;
                            length++;
                            if(length>maxLength) maxLength=length;
                            continue;
                        }else{
                            length=0;
                            break;
                        }
                    }
                }else{
                    break;
                }
            }
            isStart=false
            length=0
        }
    }
    console.log('longlength',maxLength);
    return maxLength < 0 ? 0:maxLength; 
}
longestAlternatingSubarray([3,2,5,4],5);
longestAlternatingSubarray([2,3,4,5],4);
longestAlternatingSubarray([1,2],2);
longestAlternatingSubarray([1],1);


function longestMonotonicSubarray(arr){
    let maxLength=1;
   let length=1;
   let increase=false;
   let decrease=false;
   for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        length++;
        if(length>maxLength) maxLength=length
        increase=true
    }
    if(arr[i]>arr[i+1]){
        length++;
        if(length>maxLength) maxLength=length
        decrease=true
    }
    for(j=i+2;j<arr.length;j++){
        if(increase){
            if(arr[j-1]<arr[j]){
                length++
                if(length>maxLength) maxLength=length
                continue;
            }
            else{
                break;
            }
        }
        if(decrease){
            if(arr[j-1]>arr[j]){
                length++;
                if(length>maxLength) maxLength=length
                continue;
            }
            else{
                break;
            }
        }
    }
    length=1;
    increase=false;
    decrease=false;
   }
   console.log('LONGMONOLENGTH',maxLength);
   return maxLength;
}

longestMonotonicSubarray([1,4,3,3,2]);
longestMonotonicSubarray([3,3,3,3]);
longestMonotonicSubarray([3,2,1]);
longestMonotonicSubarray([1,5,2,7]);


function minimumSubarrayLength(arr,k){
    let minlength=Infinity;
    let length=0;
    let or=0
    for(let i=0;i<arr.length;i++){
        or^=arr[i];
        length++;
        if(or>=k){
            minlength=Math.min(length,minlength);
        }
        for(let j=i+1;j<arr.length;j++){
            or^=arr[j];
            length++;
            if(or>=k) break;
        }
        if(or>=k){
            minlength=Math.min(length,minlength);
        }
        length=0;
        or=0;
    }
    if(minlength==Infinity) return -1;
    // minlength=Math.min(length,minlength);
    console.log(minlength);
    return minlength;
}
minimumSubarrayLength([1,2,3],2);
minimumSubarrayLength([2,1,8],10);
minimumSubarrayLength([1,2],0);
minimumSubarrayLength([32,2,24,1],35);


function findSubarrays(arr){
    let map=new Map();
    let sum;
    let result;
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]!=undefined){
            sum=arr[i]+arr[i+1];
            if(map.has(sum)){
               result=true
               console.log(result);
               return result
            }else{
                map.set(sum,1);
            }
        }
    }
    result=false;
    console.log(false);
    return result
    // console.log(map);

    // for(let [key,value] of map){
    //     if(map.get(key)>1){
    //         result=true;
    //     }
    // }
    // if(result==undefined){
    //     result=false;
    //     console.log(result)
    //     return result
    // }
    // console.log(result);
    // return result
}
findSubarrays([4,2,4])
findSubarrays([1,2,3,4,5]);
findSubarrays([0,0,0]);
findSubarrays([1,-1,1,-1,1,-1,1]);


function hasIncreasingSubarrays(arr,k){
    let start;
    let length=0;
    let result=false;
    let notlength=false;
    for(let i=0;i<arr.length;i++){
        length++;
        notlength=false;
        if(i==arr.length-1 && k!=1) notlength=true;
        for(let j=i+1;j<arr.length;j++){
            if(length!=k){
                if(arr[j-1]<arr[j]){
                    length++;
                }else{
                    length=0;
                    notlength=true;
                    break;
                }
            }else{
                break;
            }
        }
        if(!notlength){
            if(start==undefined){
                start=i;
                length=0;
            }else{
                if(i==start+k){
                    result=true;
                    break;
                }else{
                    start=i;
                    length=0;
                }
            }
        }
    }
    console.log('result',result);
    return result;
}



hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1],3);
hasIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7],5);
hasIncreasingSubarrays([-3,-19,-8,-16],2);
hasIncreasingSubarrays([-15,19],1);
hasIncreasingSubarrays([-15,-13,4,7],2);



function hasGrouped(n){
    let map=new Map();
    for(let i=1;i<=n;i++){
        let sum=i.toString().split('').reduce((a,b)=>a+Number(b),0);
        map.set(sum,(map.get(sum) || 0)+1);
    }
    // console.log(map)
        const maxSize=Math.max(...map.values());
        let count=0;
        for(let size of map.values()){
            if (size==maxSize)count++;
        }
        console.log(count);
        return count
}
hasGrouped(13);
hasGrouped(2);


function completeSubarray(arr){
    let arrMap=new Map();
    let length=0;
    arr.forEach(el=>{
        arrMap.set(el,(arrMap.get(el) || 0)+1);
    });
    console.log(arrMap);

    for(let i=0;i<arr.length;i++){
        let map=new Map();
        for(let j=i;j<arr.length;j++){
            map.set(arr[j],(map.has(arr[j]) || 0)+1);

            if(map.size===arrMap.size){
                length++;
            }
        }
    }
    console.log(length);
    return length;
};
completeSubarray([1,3,1,2,2]);

function intersectingSubarray(arr,m,k){
    let length=0;
    for(let i=0;i<arr.length;i++){
        let inner=0;
        if(arr[i] % m==k){
            inner++
            if(inner % m==k)length++  
        }else{
            if(inner % m==k)length++
        }
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] %m ==k){
                inner++;
            }
            if(inner % m == k) length++;
        }
        inner=0;
    }
    console.log(length);
    return length;
}

intersectingSubarray([3,2,4],2,1);
intersectingSubarray([3,1,9,6],3,0);

function countHidden(arr,lower,upper){
    let length=0;
    let sum=0;
    let flag=false;
    for(let i=lower;i<=upper;i++){
        let sum=i;
        for(let j=0;j<arr.length;j++){
            sum+=arr[j];
            if(sum >= lower && sum<=upper){
                flag=true
            }
            else{
                flag=false;
                break;
            }
        }
        if(flag){
            length++;
            flag=false;
        }
    }
    console.log(length);
    return length;


    // let count = 0;
    
    // for (let start = lower; start <= upper; start++) {
    //     let current = start;
    //     let valid = true;
        
    //     for (let j = 0; j < arr.length; j++) {
    //         current += arr[j];
    //         if (current < lower || current > upper) {
    //             valid = false;
    //             break;
    //         }
    //     }
        
    //     if (valid) count++;
    // }
    // console.log(count);
    // return count;
}

countHidden([1,-3,4],1,6);
countHidden([3,-4,5,1,-2],-4,5);
countHidden([4,-7,2],3,6)



function convertStringRoman(str){
    let number=0;
    let obj={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    for(let i=0;i<str.length;i++){
        if(obj[str[i]] >= obj[str[i+1]] && str[i+1]!=undefined){
            number+=obj[str[i]] 
        }else{
            if(str[i+1]!=undefined){
                number-=obj[str[i]] 
            }
            else{
                number+=obj[str[i]];
            }
        }
    }
    console.log('RomanNo',number);
    return number;
}

convertStringRoman('III');
convertStringRoman('LVIII');
convertStringRoman('MCMXCIV');


function summaryRanges(arr){
    let resultArr=[];
    let result=arr[0];
    let start=arr[0];
    let count=0;
    let end;
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]==result+1){
            result=arr[i+1];
        }else{
            result=arr[i+1];
            end=arr[i];
            start=arr[i+1];
            count++;
        }
    }
    console.log(count);
    return count;
}
summaryRanges([0,1,2,4,5,7]);


let arr=[1,2,3,4,5];
// arr.splice(1,0,100);
// console.log(arr);

// function addNumber(arr,index,number){
//     let temp=[];
//     for(let i=0;i<=index;i++){
//         if(i==1){
//             temp.push(number);
//         }else{
//             temp.push(arr[i]);
//         }
//     };
//     arr=arr.slice(1);
//     // temp=[...temp,...arr];  // use spread
//     temp=temp.concat(arr); //use concat
//     console.log(temp);
//     return temp
// }

function addNumber(arr,index,number){
    let result=[];
    for(let i=0;i<index;i++){
        result.push(arr[i]);
    };
    result.push(number);
    for(let i=index;i<arr.length;i++){
        result.push(arr[i]);
    }
    console.log(result);
}


addNumber(arr,5,100);

let delArr=[3,8,12,5,6]
function deleteNumber(arr,delNumber){
    let result=[];
    let temp=[...arr];
    for(let i=0;i<arr.length;i++){
        if(temp[i]==delNumber){
            temp.splice(i,1);
            i--;
        }
        else{
            if(temp[i]==undefined) result.push('_');
            else{
                result.push(temp[i]);
            }
        }
    }
    console.log(result);
    return result;
}
deleteNumber(delArr,12)
deleteNumber(delArr,6)
deleteNumber(delArr,8)


// find largest number in array
function largest(arr){
    let max=0;
    let index=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            index=i;
        }
    }
    return index
}
console.log(largest([10,5,20,8]));
console.log(largest([40,8,50,100]));


// sorting an array.
function sortarray(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] < arr[i])return false;
    }
    return true;
}
console.log('sortArr',sortarray([8,12,15]));
console.log('sortArr',sortarray([8,10,10,12]));
console.log('sortArr',sortarray([100]));
console.log('sortArr',sortarray([100,20,200]));
console.log('sortArr',sortarray([7,20,30,10]));

let reverseArr=[7,9,3,0];
// built in soluction
console.log(reverseArr.reverse());
// create same like built in
function reverseArrcall(arr){
    let low=0;
    let high=arr.length-1
    while(low < high){
        let temp=arr[low];
        arr[low]=arr[high];
        arr[high]=temp;
        low++;
        high--;
    };
    return arr;
}
console.log(reverseArrcall(reverseArr));
console.log(reverseArrcall([30,7,6,5,10]));


function removeDup(arr){
    let set=new Set();
    arr.forEach((ele)=>{
        set.add(ele);
    });
    // console.log(set);
    return [...set];
}
console.log(removeDup([10,20,20,30,30,30]));
console.log(removeDup([10,10,10]));


// move zeroes to end.
let moveArr=[8,5,0,10,0,20];
function moveZeroes(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            for(let j=i;j<arr.length;j++){
                if(arr[j]!=0){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
    }
    console.log(arr);
}
moveZeroes(moveArr);
moveZeroes([0,0,0,10,0]);

function moveZeroesOpt(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            let temp=arr[count];
            arr[count]=arr[i];
            arr[i]=temp;
            count++;
        }
    }
    console.log(arr);
    return arr;
}
moveZeroesOpt(moveArr);
moveZeroesOpt([0,0,0,10,0]);

function leftRotateOne(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
    }
    console.log(arr);
    return arr
}
leftRotateOne([1,2,3,4,5]);
leftRotateOne([30,5,20]);
leftRotateOne([1,2,3,4]);

function leftRotateD(arr,x){
   let result=new Array(arr.length);
   for(let i=0;i<arr.length;i++){
    let diff=i-x;
    if(diff>=0){
        result[diff]=arr[i];
    }else{
        result[result.length-(-diff)]=arr[i]
    }
   }
   console.log(result);
   return result;
}
leftRotateD([1,2,3,4,5],2);
leftRotateD([10,5,30,15],3);

// print current leader 
// leader is element where from that element the right one elements are not bigger than that element
function leader(arr){
    let flag=false;
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<=arr[j]){
                flag=true
                break;
            }
        }
        if(!flag)result.push(arr[i]);
        flag=false;
    }
    console.log(result);
    return result
}
function leaderOpt(arr){
    let n=arr.length;
    let result=[];
    let last=arr[arr.length-1];
    result.push(arr[arr.length-1])
    for(let i=n-2;i>=0;i--){
        if(arr[i] > last){
            result.push(arr[i]);
            last=arr[i];
        }
    }
    console.log(arr);
    return arr;
}
leaderOpt([7,10,4,3,6,5,2])

leader([7,10,4,3,6,5,2]);
leader([10,20,30]);
leader([30,20,10]);
leader([7,10,4,10,6,5,2]);


function difference(arr){
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]-arr[i] > max){
                max=arr[j]-arr[i];
            }
        }
    }
    console.log(max);
    return max;
}



difference([2,3,10,6,4,8,1]);
difference([7,9,5,6,3,2]);
difference([10,20,30]);
difference([30,10,8,2]);

function freq(arr){
    let map=new Map();
    arr.forEach(el=>{
        map.set(el,(map.get(el)||0)+1);
    });
    console.log(map);
}
freq([10,10,10,25,30,30]);
freq([10,10,10,10]);
freq([10,20,30]);


function promise(){
    let check=true;
    return new Promise((resolve,reject)=>{
        if(check){
            resolve(true)
        }else{
            reject(false);
        }
    })
}
promise().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err);
});


async function random_1(){
    try{
        let result=await promise();
        console.log(result);
        return result;
    }
    catch(err){
        console.log(err);
        return err;
    }
}
random_1();

// tricky question.
function income(job){
    var income=5;
    if(job){
       var income=50
    }
    {
        var income=500
        {
            var income=5000
        }
    }
    console.log('income',income);
    return income;
}

income(true);

let highestArr=[5,7,4,3,1,2];
function thirdHighest(arr){
    let firsthighest=-Infinity;
    let secondHighest=-Infinity;
    let thirdHighest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firsthighest){
            thirdHighest=secondHighest
            secondHighest=firsthighest;
            firsthighest=arr[i];
        }
        else if(arr[i]<firsthighest && arr[i] > secondHighest){
            thirdHighest=secondHighest;
            secondHighest=arr[i];
        }
        else if ((arr[i] < firsthighest && arr[i] < secondHighest) && arr[i] > thirdHighest ){
            thirdHighest=arr[i];
        }
    }
    console.log(thirdHighest);
    return thirdHighest;
}
thirdHighest(highestArr);
thirdHighest([12,56,78,43,5,7]);

function thirdLowest(arr){
    let firstLower=Infinity;
    let secondLower=Infinity;
    let thirdLower=Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<firstLower){
            thirdLower=secondLower;
            secondLower=firstLower;
            firstLower=arr[i];
        }
        else if(arr[i]<secondLower && arr[i]>firstLower){
            thirdLower=secondLower;
            secondLower=arr[i];
        }
        else if((arr[i] > firstLower && arr[i] > secondLower) && arr[i]< thirdLower){
            thirdLower=arr[i];
        }
    }
    console.log(thirdLower);
    return thirdLower;
}
thirdLowest(highestArr);
thirdLowest([12,56,78,43,5,7]);

// 3423. Maximum Difference Between Adjacent Elements in a Circular Array

// Given a circular array nums, find the maximum absolute difference between adjacent elements.

// Note: In a circular array, the first and last elements are adjacent.

 

// Example 1:


// Input: nums = [1,2,4]
// Output: 3

// Explanation:

// Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.

// Example 2:

// Input: nums = [-5,-10,-5]

// Output: 5

// Explanation:

// The adjacent elements nums[0] and nums[1] have the maximum absolute difference of |-5 - (-10)| = 5.
function maxAdjecent(arr){
    let result=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            const diff=Math.abs(arr[0]-arr[i]);
            result=Math.max(diff,result);
        }else{
            const diff=Math.abs(arr[i]-arr[i+1])
            result=Math.max(diff,result);
        }
    }
    console.log('maxAdjecent',result);
    return result;
}

maxAdjecent([-5,-10,-5]);
maxAdjecent([1,2,4]);
maxAdjecent([-2,-5]);
maxAdjecent([2,1,0]);

// 3442. Maximum Difference Between Even and Odd Frequency I
// You are given a string s consisting of lowercase English letters.

// Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.

 

// Example 1:

// Input: s = "aaaaabbc"

// Output: 3

// Explanation:

// The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
// The maximum difference is 5 - 2 = 3.
// Example 2:

// Input: s = "abcabcab"

// Output: 1

// Explanation:

// The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
// The maximum difference is 3 - 2 = 1.
function maxfreqoddeven(str){
    let map=new Map();
    let arr=str.split('');
    let result=-Infinity;
    arr.forEach(ele=>{
        if(map.has(ele)){
            map.set(ele,map.get(ele)+1);
        }else{
            map.set(ele,1);
        }
    });
    let odd=[];
    let even=[];
    for(let freq of map.values()){
        if(freq%2!==0) odd.push(freq);
        else{
            even.push(freq);
        }
    }   
    odd.forEach((oddNo)=>{
        even.forEach((evenNo)=>{
            result=Math.max(result,oddNo-evenNo);
        })
    });
    console.log('maxOddEvenFreq',result);
    return result
}
maxfreqoddeven("aaaaabbc");
maxfreqoddeven("abcabcab");
maxfreqoddeven("tzt");


// You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit.
// Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.
// Notes:

// When Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2.
// Bob can remap a digit to itself, in which case num does not change.
// Bob can remap different digits for obtaining minimum and maximum values respectively.
// The resulting number after remapping can contain leading zeroes.
 

// Example 1:

// Input: num = 11891
// Output: 99009
// Explanation: 
// To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
// To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
// The difference between these two numbers is 99009.
// Example 2:

// Input: num = 90
// Output: 99
// Explanation:
// The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum value that can be returned by the function is 0 (if 9 is replaced by 0).
// Thus, we return 99.

function minMaxDifference(num){
    let originalStr=num.toString();
    let unique=new Set(originalStr.split(''));
    console.log(unique);
    let maxVal=-Infinity;
    let minVal=Infinity;
    for(let val of unique){
        for(let i=9;i>=0;i--){
            let changeStr=originalStr.replaceAll(val,i.toString());
            maxVal=Math.max(maxVal,Number(changeStr));
        }
    }
    for(let val of unique){
        for(let i=0;i<=9;i++){
            let changeStr=originalStr.replaceAll(val,i.toString());
            minVal=Math.min(minVal,Number(changeStr));
        }
    };
    console.log(maxVal-minVal);
    return maxVal-minVal;
}
minMaxDifference(11891);
minMaxDifference(90);

function minMaxDifferenceModify(num){
    let arr=num.toString().split('');
    let nonNine=arr.find(el=>el !== '9');
    let nonZero=arr.find(el=>el !== '0');

    let max=arr.map(el=>{
        if(nonNine===el){
            return '9';
        }else{
            return el;
        }
    });

    let min=arr.map(el=>{
        if(nonZero===el){
            return '0';
        }else{
            return el;
        }
    });
    console.log(Number(max.join(''))- Number(min.join('')));
    return Number(max.join(''))- Number(min.join(''));
}
minMaxDifferenceModify(11891)
minMaxDifferenceModify(90);


// Max Difference You Can Get From Changing an Integer
// Question is
// Pick x from 0 to 9 and pick y from 0 to 9 replace all occurence of x into y while replacing leading zero not allowed while doing this keep track of min and max after all iteration find diff of max and min and return that.
function maxDiff(num){
    let originalStr=num.toString();
    let max=num;
    let min=num;
    for(let i=0;i<=9;i++){
        for(let j=0;j<=9;j++){
            if(i==j)continue;
            let replaced=originalStr.replaceAll(i,j);
            if(replaced[0]!='0'){
                max=Math.max(max,Number(replaced));
                min=Math.min(min,Number(replaced));
            }
        }
    }
    console.log(max-min);
    return max-min;
}
maxDiff(555);
maxDiff(9);
maxDiff(123456);


// 2200. Find All K-Distant Indices in an Array
// You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

// Return a list of all k-distant indices sorted in increasing order.
function findKDistantIndices(arr,key,k){
    let indexArr=[];
    let set=new Set();
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key)indexArr.push(i);
    };
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<indexArr.length;j++){
            let abs=Math.abs(i-indexArr[j]);
            if(abs <= k)set.add(i);
        }
    }
    console.log(Array.from(set.entries()).map((el)=>el[0]));
    return set
}
findKDistantIndices([3,4,9,1,3,9,5],9,1);
findKDistantIndices([2,2,2,2,2],2,2);

//1353. Maximum Number of Events That Can Be Attended
// you have given 2 d array of events and arr.length==events and [2,4]==startday and endday  so you have to find maximum events attend count
function maxEvents(arr){
    let count=0;
    arr=arr.sort((a,b)=>{
        return a[1]-b[1];
    });
    console.log(arr);
    let set=new Set();
    for(let [start,end] of arr){
        for(let j=start;j<=end;j++){
            if(!set.has(j)){
                set.add(j);
                count++;
                break;
            }
        }
    };
    console.log(count);
    return count;
}
maxEvents([[1,2],[2,3],[3,4]]);
maxEvents([[1,2],[2,3],[3,4],[1,2]]);
maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]]);
maxEvents([[1,2],[1,2],[3,3],[1,5],[1,5]]);
maxEvents([[52,79],[7,34]]);