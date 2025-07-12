// Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k. A subarray is a contiguous non-empty sequence of elements within an array.

function subArraySumEqualK(arr,result){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum==result)count++;
        }
    };
    console.log('sub array of sum equal to k',count);
    return count;
}
subArraySumEqualK([1,1,1],2);
subArraySumEqualK([1,2,3],3);

// prefixSum + map approch
function subArraySumEqualKOpt(arr,result){
    let map=new Map();
    map.set(0,1);
    let prefixSum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        prefixSum+=arr[i];
        if(map.has(prefixSum-result)) count+=map.get(prefixSum-result);
        map.set(prefixSum,(map.get(prefixSum)||0)+1);
    };
    console.log('sub array of sum equal to k opt',count);
    return count;
}
subArraySumEqualKOpt([1,1,1],2);
subArraySumEqualKOpt([1,2,3],3);
subArraySumEqualKOpt([1],0);
subArraySumEqualKOpt([1,-1,0],0);

// function subArraySumEqualKOptSliding(arr,k){
//     let start=0;
//     let count=0;
//     let sum=0;
//     for(let end=0;end<arr.length;end++){
//         sum+=arr[end];
//         while(sum > k){
//             sum-=arr[start];
//             start++;
//         }
//         if(sum==k)count++;
//     }
//     console.log('count using slide window',count);
//     return count
// }
// subArraySumEqualKOptSliding([1,1,1],2);
// subArraySumEqualKOptSliding([1,2,3],3);
// subArraySumEqualKOptSliding([1],0);
// subArraySumEqualKOptSliding([1,-1,0],0);


function getSumOfRangeIndex(arr,start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=arr[i];
    }
    console.log('sum of range index',sum);
    return sum;
}
getSumOfRangeIndex([2,8,3,9,6,5,4],1,3);


// prefixSum approch.
function getSumOfRangeIndexOpt(arr,start,end){
    let prefixArr=[arr[0]];
    let sum=arr[0];
    for(let i=1;i<arr.length;i++){
        sum+=arr[i];
        prefixArr.push(sum);
    };
    if(start==0){
        console.log('sum of range index opt',prefixArr[end]);
    }else{
        console.log('sum of range index opt',prefixArr[end]-prefixArr[start-1]);
    }
}
getSumOfRangeIndexOpt([2,8,3,9,6,5,4],1,3);
getSumOfRangeIndexOpt([-2,0,3,-5,2,-1],1,3);

function getWeightedSum(arr,start,end){
    let prefix=[arr[0]];
    let weightedPrefix=[1*arr[0]];
    for(let i=1;i<arr.length;i++){
        prefix.push((prefix[i-1]) + arr[i]);
        weightedPrefix.push((weightedPrefix[i-1]) + (i+1) * arr[i]);
    };
    console.log(weightedPrefix,prefix)
    const sum = weightedPrefix[end] - (start > 0 ? weightedPrefix[start - 1] : 0);
    const remove = start * (prefix[end] - (start > 0 ? prefix[start - 1] : 0));
    console.log(sum-remove);
    return sum - remove;
}
getWeightedSum([2,3,5,4,6,1],0,2);
getWeightedSum([2,3,5,4,6,1],2,3);


function equilibriumPoint(arr){
    let sum=0;
    let result;
    for(let i=0;i<arr.length;i++){
        if(i!=0)sum+=arr[i-1];
        let checkSum=0;
        for(let j=i+1;j<arr.length;j++){
            checkSum+=arr[j];
            if(checkSum==sum){
                result=arr[i];
                console.log('equilibrium point is',result);
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false;
}
equilibriumPoint([3,4,8,-9,20,6]);
equilibriumPoint([4,2,-2]);
equilibriumPoint([4,2,2]);
equilibriumPoint([3,4,8,-9,9,7]);

function equilibriumPointOpt(arr){
    let prefix=[];
    let suffix=[];
    let result=false;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        prefix.push(sum);
    }
    sum=0;
    for(let i=arr.length-1;i>=0;i--){
        sum+=arr[i];
        suffix.push(sum);
    }
    suffix=suffix.reverse();
    // console.log(prefix,suffix);

    for(let i=0;i<arr.length;i++){
        if(i==0 && suffix[i+1]==0){
            console.log('equilibrium point is Opt',arr[i]);
            result=true;
            console.log(result);
            return result;
        }
        else if (i==arr.length-1 && prefix[i-1]==0){
            console.log('equilibrium point is Opt',arr[i]);
            result=true;
            console.log(result);
            return result;
        }
        else if(prefix[i-1]==suffix[i+1]){
            console.log('equilibrium point is Opt',arr[i]);
            result=true;
            console.log(result);
            return result;
        }
    }
    console.log(result);
    return result;
}
equilibriumPointOpt([3,4,8,-9,20,6]);
equilibriumPointOpt([4,2,-2]);
equilibriumPointOpt([4,2,2]);
equilibriumPointOpt([3,4,8,-9,9,7]);


function divideArrayEqualSum(arr){
    let sum=0;
    let count=0
    arr.forEach((el)=>{
        sum+=el;
    });
    let targetSum=sum/3;
    if(sum % 3!==0){
        console.log('divider array in parts with equal sum',false);
        return false
    }
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum==targetSum){
            sum=0;
            count++;

            if(count==2 && i<arr.length-1){
                console.log('divider array in parts with equal sum',true);
                return true;
            }
        }
    }
    console.log('divider array in parts with equal sum',false);
    return false;
}
divideArrayEqualSum([5,2,6,1,1,1,1,4]);
divideArrayEqualSum([3, 3, 3, 3, 3, 3]);
divideArrayEqualSum([5, 2, 6, 1, 1, 1, 1, 4]);
divideArrayEqualSum([1,2,3,4]);
divideArrayEqualSum([1, 1, 1, 1, 1, 1, 6]);
divideArrayEqualSum([0, 2, 1, 1, 2, 0, 0, 1, 2]);
divideArrayEqualSum([4,4,4]);
divideArrayEqualSum([1, 2]);
divideArrayEqualSum([0, 0]);
divideArrayEqualSum([0, 0, 0, 0, 0, 0]);

function maximumApperenceInRange(arr1,arr2){
    let map=new Map();
    for(let i=0;i<arr1.length;i++){
        for(let j=arr1[i];j<=arr2[i];j++){
            map.set(j,(map.get(j)||0)+1);
        }
    }
    let max=0;
    let olderMax=0;
    let resultKey;
    for(let [key,value] of map){
        max=Math.max(max,map.get(key));
        if(max!=olderMax){
            olderMax=max;
            resultKey=key;
        }
    }
    console.log('maximum apperance in range is ',resultKey);
    return resultKey
}
maximumApperenceInRange([1,2,5,15],[5,8,7,18]);
maximumApperenceInRange([1,2],[5,4]);
maximumApperenceInRange([1,2,4],[4,5,7]);

// prefixSum Approch
// here first traverse arr1 and in that update freqarray such that freq[arr[i]]++ and freq[arr2[i]+1]--
// then we get freq array compute prefix sum , take out max number and find its index. so index is our answer.
function maximumApperenceInRangeOpt(arr1,arr2){
    let freq=new Array(100).fill(0);
    for(let i=0;i<arr1.length;i++){
        freq[arr1[i]]++;
        freq[arr2[i]+1]--;
    }
    // console.log(freq);

    let prefixSum=[freq[0]];
    let sum=freq[0];
    for(let i=1;i<freq.length;i++){
        sum+=freq[i];
        prefixSum.push(sum);
    }
    // console.log(prefixSum);
    let max=Math.max(...prefixSum);
    console.log('maximum apperance in range is opt',prefixSum.indexOf(max));
    return prefixSum.indexOf(max);
}
maximumApperenceInRangeOpt([1,2,5,15],[5,8,7,18]);
maximumApperenceInRangeOpt([1,2],[5,4]);
maximumApperenceInRangeOpt([1,2,4],[4,5,7]);

//  Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
function productExceptSelf(arr){
    let result=new Array(arr.length);
    let prefixProduct = new Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        prefixProduct[i] = prefixProduct[i - 1] * arr[i - 1];
    }

    let suffixProduct=new Array(arr.length).fill(1);
    for(let i=arr.length-2;i>=0;i--){
        suffixProduct[i]=suffixProduct[i+1] * arr[i+1];
    }

    for(let i=0;i<arr.length;i++){
        result[i]=prefixProduct[i] * suffixProduct[i]
    }
    console.log(result);
}
productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3]);

// 303. Range Sum Query - Immutable
// Given an integer array nums, handle multiple queries of the following type:
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:
// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3


class NumArray{
    constructor(nums){
        this.prefixSum=[nums[0]];
        let sum=nums[0];
        for(let i=1;i<nums.length;i++){
            sum+=nums[i]
            this.prefixSum.push(sum)
            // this.prefixSum[i]=this.prefixSum[i]+nums[i];
        }
    }

    sumRange(left,right){
        if(left==0){
            console.log('range sum',this.prefixSum[right])
            return this.prefixSum[right];
        }
        console.log('range sum',this.prefixSum[right ] - this.prefixSum[left+1]);
        return this.prefixSum[right] - this.prefixSum[left+1];
        
    }

}
let numarray=new NumArray([-2, 0, 3, -5, 2, -1]);
let sum=numarray.sumRange(0,2);


function checkSubarraySum(arr,k){
   let check=false;
   let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=arr[i];
        for(let j=i+1;j<arr.length;j++){
            sum+=arr[j];
            if(sum%k==0){
                check=true;
                break;
            }
        }
        if(check) break
    }
    if(check){
        console.log(true);
        return true
    }
    console.log(false);
    return false;
}

checkSubarraySum([23,2,4,6,7],6);
checkSubarraySum([23,2,6,4,7],13);
checkSubarraySum([5,0,0,0],3);

// 523. Continuous Subarray Sum
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
// A good subarray is a subarray where:
// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:
// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

function checkSubarraySumOpt(arr,k){
    let map=new Map();
    map.set(0,-1);
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let remainder=sum % k;
        if(map.has(remainder)){
            if(i-map.get(remainder) > 1){
                console.log(true);
                return true;
            }
        }else{
            map.set(remainder,i);
        }
    }
    console.log(false);
    return false;
}
checkSubarraySumOpt([23,2,4,6,7],6);
checkSubarraySumOpt([23,2,6,4,7],13);
checkSubarraySumOpt([5,0,0,0],3);

// 724. Find Pivot Index
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

function pivotIndex(arr){
    let prefix=[];
    let suffix=[];
    let result=-1;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        prefix.push(sum);
    }
    sum=0;
    for(let i=arr.length-1;i>=0;i--){
        sum+=arr[i];
        suffix.push(sum);
    }
    suffix=suffix.reverse();
    // console.log(prefix,suffix);

    for(let i=0;i<arr.length;i++){
        if(i==0 && suffix[i+1]==0){
            console.log('equilibrium point index is Opt',i);
            result=i;
            // console.log(result);
            return result;
        }
        else if (i==arr.length-1 && prefix[i-1]==0){
            console.log('equilibrium point index is Opt',i);
            result=i;
            // console.log(result);
            return result;
        }
        else if(prefix[i-1]==suffix[i+1]){
            console.log('equilibrium point index is Opt',i);
            result=i;
            // console.log(result);
            return result;
        }
    }
    console.log(result);
    return result;
    
}
pivotIndex([1,7,3,6,5,6]);
pivotIndex([1,2,3]);

// 1124. Longest Well-Performing Interval
// We are given hours, a list of the number of hours worked per day for a given employee.

// A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8.

// A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.

// Return the length of the longest well-performing interval.

function longestWPI(hours){
    let maxLength = 0;
    for (let i = 0; i < hours.length; i++) {
        let tiring = 0;
        let nonTiring = 0;

        for (let j = i; j < hours.length; j++) {
            if (hours[j] > 8) {
                tiring++;
            } else {
                nonTiring++;
            }

            if (tiring > nonTiring) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    console.log('longest WPT',maxLength)
    return maxLength;
}
longestWPI([9,9,6,0,6,6,9]);
longestWPI([6,6,6]);
longestWPI([6,6,9]);
longestWPI([6,9,9]);

function longestWpiOpt(arr){
    let map =new Map();
    let maxLength=0;
    let modArr=arr.map((el)=>{
        if(el > 8)return el=1
        return el=-1;
    });
    let score=0;
    for(let i=0;i<modArr.length;i++){
        score+=modArr[i];
        if(!map.has(score)){
            map.set(score,i);
        }
        if(score>0)maxLength=i+1;
        if(score <=0 && map.has(score-1))maxLength=Math.max(maxLength,i-map.get(score-1));
    }
    console.log(maxLength);
    return maxLength;
}

longestWpiOpt([9,9,6,0,6,6,9]);
longestWpiOpt([6,6,6]);
longestWpiOpt([6,6,9]);
longestWpiOpt([6,9,9]);


function numSubarraysWithSum(nums,goal){
    let count=0;
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=i;j<nums.length;j++){
            sum+=nums[j];
            if(sum == goal){
                count++;
            }else if(sum > goal){
                break;
            }
        }
    };
    console.log(count);
    return count;
}
numSubarraysWithSum([1,0,1,0,1],2);
numSubarraysWithSum([0,0,0,0,0],0);

function atMostK(arr,k){
    if(k < 0)return 0
    let sum=0;
    let start=0;
    let count=0;
    for(let end=0;end<arr.length;end++){
        sum+=arr[end];
        while(sum > k){
            sum-=arr[start];
            start++;
        }
        count+=end-start+1;
    }
    // console.log(count);
    return count;
}

function numSubarraysWithSumOpt(arr,k){
    console.log(atMostK(arr,k) - atMostK(arr,k-1));
}

numSubarraysWithSumOpt([1,0,1,0,1],2);
numSubarraysWithSumOpt([0,0,0,0,0],0);


function shiftingLetters(str,arr){
    let diff=new Array(str.length+1).fill(0);
    arr.forEach(el=>{
        if(el[2]==1){
            diff[el[0]]+=1
            diff[el[1]+1]-=1
        }else{
            diff[el[0]]-=1
            diff[el[1]+1]+=1
        }
    });
    // console.log(diff);

    let prefix=[diff[0]];
    let sum=diff[0];
    for(let i=1;i<arr.length;i++){
        sum+=diff[i];
        prefix.push(sum);
    };
    console.log(prefix)

    let char=str.split('');
    for(let s=0;s<char.length;s++){
        let shift=prefix[s];
        char[s]=String.fromCharCode((char[s].charCodeAt(0)-97 + shift +26)%26 +97);
    };
    console.log(char.join(''));
}
shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]]);

// 974. Subarray Sums Divisible by K
// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.

function subarraysDivByK(arr,k){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum % k==0)count++
        }
    }
    console.log(count);
    return count;
}
subarraysDivByK([4,5,0,-2,-3,1],5);
subarraysDivByK([5],0);


function subarraysDivByKOpt(arr,k){
    let map=new Map();
    map.set(0,1);
    let sum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let remainder=((sum % k) +k) %k;
        if(map.has(remainder)){
            count+=map.get(remainder);
        }
        map.set(remainder,(map.get(remainder)|| 0)+1);
    }
    console.log(count);
    return count;
}
subarraysDivByKOpt([4,5,0,-2,-3,1],5);

