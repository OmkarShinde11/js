// 3318. Find X-Sum of All K-Long Subarrays I
// You are given an array nums of n integers and two integers k and x.

// The x-sum of an array is calculated by the following procedure:

// Count the occurrences of all elements in the array.
// Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
// Calculate the sum of the resulting array.
// Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

// Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

// sliding window and map
function findxSum(arr,k,x){
    let map=new Map();
    let sum=0;
    let result=[];
    for(let i=0;i<k;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }
    console.log(map);
    sum+=getSum(map,x);
    result.push(sum);

    for(let i=1;i<arr.length;i++){
        sum=0;
        if(arr[i+k-1]==undefined)break;
        map.set(arr[i-1],map.get(arr[i-1])-1);
        if(map.has(arr[i+k-1])){
            map.set(arr[i+k-1],map.get(arr[i+k-1])+1);
        }else{
            map.set(arr[i+k-1],1);
        }
        console.log(map);
        sum+=getSum(map,x);
        result.push(sum);
    }
    console.log(result);
    return result;
}
findxSum([1,1,2,2,3,4,2,3],6,2);
findxSum([3,8,7,8,7,5],2,2);

function getSum(map,x){
    let newmap=new Map(Array.from(map.entries()).sort((a,b)=>{
        if(b[1]==a[1]){
            return b[0]-a[0]
        }
        return b[1]-a[1];
    }).slice(0,x));
    let sum=0;
    for(let [key,value] of newmap){
        sum+= key *value;
    }
    return sum;
}

// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

function numOfSubarrays(arr,k,t){
    let count=0;
    let tempCount=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(tempCount==k){
                let avg=sum /k;
                    if(avg>=t)count++;
                    tempCount=0;
                    sum=0;
                    break;
            }else{
                sum+=arr[j];
                tempCount++;
                if(tempCount==k && j==arr.length-1){
                    let avg=sum /k;
                    if(avg>=t)count++;
                    tempCount=0;
                    sum=0;
                }else if(tempCount!=k && j==arr.length-1){
                    tempCount=0;
                    sum=0;
                }
            }
        }
    }
    console.log('Output',count);
    return count;
}
numOfSubarrays([2,2,2,2,5,5,5,8],3,4);
numOfSubarrays([11,13,17,23,29,31,7,5,2,3],3,5);
numOfSubarrays([1,1,1,1,1],1,0);

// alternative way
function numOfSubarraysMod(arr,k,t){
    let count=0;
    for(let j=0;j<arr.length;j++){
        let temp=arr.slice(j,j+k);
        if(temp.length===k){
            let sum=temp.reduce((sum,curr)=>{
                sum+=curr;
                return sum;
            },0);
            if(sum / k >=t)count++;
        };
    };
    console.log('alternative way Output',count);
    return count;
};
numOfSubarraysMod([2,2,2,2,5,5,5,8],3,4);
numOfSubarraysMod([11,13,17,23,29,31,7,5,2,3],3,5);
numOfSubarraysMod([1,1,1,1,1],1,0);

// optimize approch sliding window.
function numOfSubarraysOpt(arr,k,t){
    let sum=0;
    let count=0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    if(sum / k >=t)count++;
    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]==undefined)break;
        sum+=arr[i+k-1]-arr[i-1];
        if(sum / k >=t)count++;
    };
    console.log('numOfSubArrayOpt',count);
    return count;
}
numOfSubarraysOpt([2,2,2,2,5,5,5,8],3,4);
numOfSubarraysOpt([11,13,17,23,29,31,7,5,2,3],3,5);
numOfSubarraysOpt([1,1,1,1,1],1,0);

// find out subarray with given sum if is there return true or false

function subArrayWithGivenSum(arr,result){
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum==result){
                console.log('sub array with given sum',true);
                return true;
            } 
        }
    };
    console.log('sub array with given sum',false);
    return false
};
subArrayWithGivenSum([1,4,20,3,10,5],33);
subArrayWithGivenSum([1,4,0,0,3,10,5],7);
subArrayWithGivenSum([2,4],3);

// sliding window approch variable window
function subArrayWithGivenSumOpt(arr,result){
    let start=0;
    let end=0;
    let sum=0;
    for(let i=end;i<arr.length;i++){
        sum+=arr[i];
        while(sum > result){
            sum-=arr[start];
            start++;
        };
        if(sum==result){
            console.log('sub array with given sum opt',true);
            return true
        }
    };
    console.log('sub array with given sum opt',false)
    return false;
}
subArrayWithGivenSumOpt([1,4,20,3,10,5],33);
subArrayWithGivenSumOpt([1,4,0,0,3,10,5],7);
subArrayWithGivenSumOpt([2,4],3);
subArrayWithGivenSumOpt([1,1,1],2);
subArrayWithGivenSumOpt([1,2,3],3);


// find out maximim sum of subarray whoose size is k;
function maxSumK(arr,k){
    let i=0;
    let sum=arr[0];
    let count=1;
    let max=arr[0];
    for(let j=1;j<arr.length;j++){
        sum+=arr[j];
        count++;
        if(count==k){
            count=1;
            max=Math.max(max,sum);
            i++;
            j=i;
            sum=arr[i];
        }
    }
    console.log('max sum k',max);
    return sum
}
maxSumK([1,8,30,-5,20,7],3);
maxSumK([5,-10,6,90,3],2);

// sliding window approch
function maxSumKOpt(arr,k){
    let sum=0;
    let max=arr[0];
    for(let i=0;i<k;i++){
        sum+=arr[i];
        max=Math.max(max,sum);
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]==undefined)break;
        sum+=arr[i+k-1]-arr[i-1];
        max=Math.max(max,sum);
    }
    console.log('max sum k opt',max);
    return max;
}
maxSumKOpt([1,8,30,-5,20,7],3);
maxSumKOpt([5,-10,6,90,3],2);

// Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// sliding window approch
function findMaxAverage(arr,k){
    let sum=0;
    let avg;
    let maxAvg=-Infinity;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    avg=sum/k;
    // avg=avg.toFixed(5)
    maxAvg=Math.max(maxAvg,avg);

    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]==undefined)break;
        sum+=arr[i+k-1]-arr[i-1];
        avg=sum/k;
        // avg=avg.toFixed(5)
        maxAvg=Math.max(maxAvg,avg);
    }
    console.log(maxAvg.toFixed(5));
    return maxAvg;
}
findMaxAverage([1,12,-5,-6,50,3],4);
findMaxAverage([5],1);

function findAnagrams(str,result){
    let matchCount=0;
    let pfreq=new Map();
    let k=result.length;
    let temp=[];
    for(let val of result){
        pfreq.set(val,(pfreq.get(val)||0)+1);
    }

    let windowFreq=new Map();
    for (let i = 0; i < k; i++) {
        let char = str[i];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
    }
    for (let [char, freq] of pfreq.entries()) {
        if ((windowFreq.get(char) || 0) === freq) {
            matchCount++;
        }
    }

    if(matchCount==pfreq.size)temp.push(0)

    for(let i=1;i<str.length;i++){
        let removeChar = str[i - 1];
    let addChar = str[i + k - 1];

    //Remove left 
    if (pfreq.has(removeChar)) {
        if ((windowFreq.get(removeChar) || 0) === pfreq.get(removeChar)) {
            matchCount--;
        }
    }
    windowFreq.set(removeChar, windowFreq.get(removeChar) - 1);
    if (pfreq.has(removeChar)) {
        if ((windowFreq.get(removeChar) || 0) === pfreq.get(removeChar)) {
            matchCount++;
        }
    }

    //  Add right 
    windowFreq.set(addChar, (windowFreq.get(addChar) || 0) + 1);
    if (pfreq.has(addChar)) {
        if ((windowFreq.get(addChar) || 0) === pfreq.get(addChar)) {
            matchCount++;
        } else if (windowFreq.get(addChar) - 1 === pfreq.get(addChar)) {
            matchCount--;
        }
    }
    if (matchCount === pfreq.size) temp.push(i);
    }
    console.log(temp);
    return temp

}
findAnagrams('cbaebabacd','abc');
findAnagrams('abab','ab');

//3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
function lengthOfLongestSubstring(str){
    let length=0;
    let maxLength=0;
    for(let i=0;i<str.length;i++){
        length=1;
        maxLength=Math.max(maxLength,length);
        let iterativeStr=str[i];
        for(let j=i+1;j<str.length;j++){
            if(iterativeStr.includes(str[j])) break;
            iterativeStr+=str[j];
            length++;
            maxLength=Math.max(maxLength,length);
        }
    }
    console.log('longest length of substring',maxLength);
    return maxLength
}
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');

// sliding window with variable window and map
function lengthOfLongestSubstringOpt(str){
    let maxLength=0
    let set=new Set();
    let left=0;
    for(let i=0;i<str.length;i++){
        while(set.has(str[i])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[i])
        maxLength=Math.max(maxLength,set.size);
    }
    console.log('longest length of substring opt',maxLength);
    return maxLength;
}
lengthOfLongestSubstringOpt('abcabcbb');
lengthOfLongestSubstringOpt('bbbbb');
lengthOfLongestSubstringOpt('pwwkew');

// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
function minSubArrayLen(arr,t){
    let minLength=Infinity;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        let length=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            length++;
            if(sum>=t){
                minLength=Math.min(minLength,length);
                break;
            }
        }
    }
    if(minLength==Infinity)minLength=0;
    console.log('minmum sub array length equal to give target',minLength);
    return minLength;
}
minSubArrayLen([2,3,1,2,4,3],7);
minSubArrayLen([1,4,4],4);
minSubArrayLen([1,1,1,1,1,1,1,1],11);
minSubArrayLen([1,2,3,4,5],11);

// sliding window approch variable window
function minSubArrayLenOpt(arr,t){
    let minLength=Infinity;
    let start=0;
    let end=0;
    let sum=0;
    for(let i=end;i<arr.length;i++){
        sum+=arr[i];
        while(sum >= t){
            minLength=Math.min(minLength,i-start+1);
            sum=sum-arr[start];
            start++;
        }
    }
    if(minLength==Infinity)minLength=0
    console.log('minmum sub array length equal to give target opt',minLength);
    return minLength
}
minSubArrayLenOpt([2,3,1,2,4,3],7);
minSubArrayLenOpt([1,4,4],4);
minSubArrayLenOpt([1,1,1,1,1,1,1,1],11);
minSubArrayLenOpt([1,2,3,4,5],11);

// 340. Longest Substring with At Most K Distinct Characters
// Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

function longestSubstringK(str,k){
    let maxLength=0;
    for(let i=0;i<str.length;i++){
        let temp=[];
        let distinct=0;
        for(let j=i;j<str.length;j++){
            if(!temp.includes(str[j])){
                distinct++;
                temp.push(str[j]);
            }
            if(distinct > k)break;
            maxLength=Math.max(maxLength,j-i+1);
        }
    };  
    console.log('longest substring k',maxLength);
    return maxLength;
}   
longestSubstringK('eceba',2);
longestSubstringK('aa',1);
longestSubstringK('a',0);
longestSubstringK('aaabc',2);

// sliding window and map
function longestSubstringKOpt(str,t){
    let map=new Map();
    let start=0;
    let end=0;
    let maxLength=0;
    for(let i=end;i<str.length;i++){
        map.set(str[i],(map.get(str[i])||0)+1)
        while(map.size > t){
            map.set(str[start],map.get(str[start])-1);
            if(map.get(str[start])==0) map.delete(str[start]);
            start++;
        }
        maxLength=Math.max(maxLength,i-start+1);
    }
    console.log('longest substring k opt',maxLength);
    return maxLength
}
longestSubstringKOpt('eceba',2);
longestSubstringKOpt('aa',1);
longestSubstringKOpt('a',0);
longestSubstringKOpt('aaabc',2);


// 904. Fruit Into Baskets
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.
function totalFruit(arr){
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        let count=1;
        let second;
        maxLength=Math.max(maxLength,count);
        for(let j=i+1;j<arr.length;j++){
            if((second==undefined && arr[j]!=arr[i])){
                second=arr[j];
                count++;
                maxLength=Math.max(maxLength,count);
            }
            else if(j!=i+1 && second!=undefined){
                if(arr[j]!=second && arr[j]!=arr[i])break;
                count++;
                maxLength=Math.max(maxLength,count);
            }else{
                count++;
                maxLength=Math.max(maxLength,count);
            }
        }
    }
    console.log('total fruit in both basket',maxLength);
    return maxLength;
}   
totalFruit([0,1,2,2]);
totalFruit([1,2,1]);
totalFruit([1,2,3,2,2]);
totalFruit([0]);
totalFruit([0,0,1,1]);

function totalFruitOpt(arr){
    let maxLength=0;
    let map=new Map();
    let start=0;
    let end=0;
    for(let i=end;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])||0)+1);
        while(map.size > 2){
            map.set(arr[start],map.get(arr[start])-1);
            if(map.get(arr[start])==0)map.delete(arr[start]);
            start++
        }
        maxLength=Math.max(maxLength,i-start+1);
    }
    console.log('total fruit in basket opt',maxLength);
    return maxLength
}
totalFruitOpt([0,1,2,2]);
totalFruitOpt([1,2,1]);
totalFruitOpt([1,2,3,2,2]);
totalFruitOpt([0]);
totalFruitOpt([0,0,1,1]);

// 1248. Count Number of Nice Subarrays
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

function numberOfSubarrays(arr,k){
    let length=0;
    for(let i=0;i<arr.length;i++){
        let oddCount=0;
        for(let j=i;j<arr.length;j++){
            if(arr[j]%2!==0)oddCount++
            if(oddCount==k){
                length++;
            }
            if(oddCount>k)break;
        }
    }
    console.log(length);
    return length;
}
numberOfSubarrays([1,1,2,1,1],3);
numberOfSubarrays([2,4,6],1);
numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2);

function atMostK(arr,k){
    let oddCount=0;
    let start=0;
    let length=0;
    let end=0;
    for(let i=end;i<arr.length;i++){
        if(arr[i]%2!==0)oddCount++
        while(oddCount > k){
            if(arr[start]%2!==0)oddCount--;
            start++;
        }
        length+=i-start+1;
    }
    console.log(length);
    return length;
}

function numberOfSubarraysOpt(arr, k) { 
    console.log(atMostK(arr, k) - atMostK(arr, k - 1));
}
numberOfSubarraysOpt([1,1,2,1,1],3);
numberOfSubarrays([2,4,6],1);
numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2);


// 992. Subarrays with K Different Integers
// Given an integer array nums and an integer k, return the number of good subarrays of nums.
// A good array is an array where the number of different integers in that array is exactly k.
// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.
function subarraysWithKDistinct(arr,k){
    let length=0;
    for(let i=0;i<arr.length;i++){
        let set=new Set();
        for(let j=i;j<arr.length;j++){
            if(!set.has(arr[j])){
                set.add(arr[j]);
            }
            if(set.size==k){
                length++;
            }
            else if(set.size > k){
                break;
            };
        }
    };
    console.log('count of subarray is',length);
    return length;
}
subarraysWithKDistinct([1,2,1,2,3],2);
subarraysWithKDistinct([1,2,1,3,4],3);

function atMostKDistinct(arr,k){
    let map=new Map();
    let count=0;
    let start=0;
    let end=0;
    for(let i=end;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || 0)+1);
        while(map.size > k){
            map.set(arr[start],map.get(arr[start])-1);
            if(map.get(arr[start])==0) map.delete(arr[start]);
            start++;
        }
        count+=i-start+1;
    }
    // console.log(count)
    return count;
}

function subarraysWithKDistinctOpt(arr,k){
    console.log(atMostKDistinct(arr,k)-atMostKDistinct(arr,k-1));
    // return atMostKDistinct(arr,k)-atMostKDistinct(arr,k-1);
}
subarraysWithKDistinctOpt([1,2,1,2,3],2);
subarraysWithKDistinctOpt([1,2,1,3,4],3);

// it required quene also so this is on hold.
// 239. Sliding Window Max  imum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

function maxSlidingWindow(arr,k){
    let result=[];
    let temp=[];
    for(let i=0;i<k;i++){
        temp.push(arr[i])
        if(i==k-1)result.push(Math.max(...temp));
    }
    // console.log(result);
    // if(arr.length==1){
    //     console.log(result);
    //     return result;
    // }

    for(let i=1;i<arr.length;i++){
        if(arr[i+k-1]==undefined)break;
        temp.splice(0,1);
        temp.push(arr[i+k-1]);
        result.push(Math.max(...temp));
    }
    console.log(result);
    return result;
}
maxSlidingWindow([1,3,-1,-3,5,3,6,7],3);
maxSlidingWindow([1],1);

// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.
function minWindow(str,t){
    let strMap=new Map();
    let windowMap=new Map();
    for(let i=0;i<t.length;i++){
        strMap.set(t[i],(strMap.get(t[i])||0)+1);
    };
    console.log(strMap);
    let start=0;
    let end=0;
    let res='';
    let minLength=Infinity;
    let have=0;
    for(let i=end;i<str.length;i++){
        windowMap.set(str[i],(windowMap.get(str[i])||0)+1);
        if(strMap.get(str[i])== windowMap.get(str[i]))have++;
        while(have==strMap.size){
            if(i-start+1 < minLength){
                minLength=i-start+1;
                res=str.slice(start,i+1);
            }
            windowMap.set(str[start],windowMap.get(str[start])-1);
            if(strMap.get(str[start])!==undefined){
                if(windowMap.get(str[start]) < strMap.get(str[start]))have--;
            }
            start++;
        }
    }
    console.log(res);
    return res;
}
minWindow('ADOBECODEBANC','ABC');
minWindow('a','a');
minWindow('a','aa');
minWindow('cabwefgewcwaefgcf','cae');
minWindow('aaaaaaaaaaaabbbbbcdd','abcdd');

// 1493. Longest Subarray of 1's After Deleting One Element
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
function longestSubarray(arr){
    let start=0;
    let max=0;
    let zeroCount=0
    for(let end=0;end<arr.length;end++){
        if(arr[end]==0)zeroCount++;
        while(zeroCount > 1){
            if(arr[start]==0)zeroCount--;
            start++;
        }
        max=Math.max(max,end-start);
    }
    max==arr.length?max-1:max;
    console.log(max);
    return max;
}
longestSubarray([0,1,1,1,0,1,1,0,1]);
longestSubarray([1,1,0,1]);
longestSubarray([1,1,1]);

// 1004. Max Consecutive Ones III
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

function longestOnes(arr,k){
    let start=0;
    let max=0;
    let zeroCount=0;
    for(let end=0;end<arr.length;end++){
        if(arr[end]==0)zeroCount++;
        while(zeroCount > k){
            if(arr[start]==0)zeroCount--;
            start++;
        }
        max=Math.max(max,end-start+1);
    }
    console.log(max);
    return max;
}
longestOnes([1,1,1,0,0,0,1,1,1,1,0],2);
longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3);


// Given a string s and an integer k, count the number of substrings of s that contain at most k distinct characters.
// A substring is a contiguous part of the string.
// Distinct characters mean unique characters.
// You're not returning the substrings — you're counting how many exist.
// input 'abcba',k=2 
// output= 10
function countSubstringsWithAtMostKDistinct(str,k){
    let count=0;
    for(let i=0;i<str.length;i++){
        let set=new Set();
        for(let j=i;j<str.length;j++){
            if(!set.has(str[j]))set.add(str[j]);
            if(set.size > k)break;
            count++;
        }
    }
    console.log('count Substrings With At Most K Distinct',count);
    return count;
}
countSubstringsWithAtMostKDistinct('abcba',2);
countSubstringsWithAtMostKDistinct('abc',2);
countSubstringsWithAtMostKDistinct('aaaa',1);
countSubstringsWithAtMostKDistinct('aabac',2);

function countSubstringsWithAtMostKDistinctOpt(arr,k){
    let start=0;
    let count=0;
    let map=new Map();
    for(let end=0;end<arr.length;end++){
        map.set(arr[end],(map.get(arr[end])||0)+1);
        while(map.size > k){
            map.set(arr[start],map.get(arr[start])-1);
            if(map.get(arr[start])==0)map.delete(arr[start]);
            start++;
        }
        count+=end-start+1;
    }
    console.log(count);
    return count;
}
countSubstringsWithAtMostKDistinctOpt('abcba',2);
countSubstringsWithAtMostKDistinctOpt('abc',2);
countSubstringsWithAtMostKDistinctOpt('aaaa',1);
countSubstringsWithAtMostKDistinctOpt('aabac',2);