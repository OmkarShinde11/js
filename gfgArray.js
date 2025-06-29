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

function leaderArrayEle(arr){
    let leaderArr=[];
    let check=true;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] <= arr[j]){
                check=false;
                break;
            }
        }
        if(check)leaderArr.push(arr[i]);
        check=true
    };  
    console.log(leaderArr);
    return leaderArr;
}
leaderArrayEle([7,10,4,3,10,6,5,2]);
leaderArrayEle([10,20,30]);
leaderArrayEle([30,20,10]);

function leaderArrayEleOpt(arr){
    let i=0;
    let leader=[];
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] < arr[j]){
            i++;
            j=i;
        }
        else if(j==arr.length-1 && arr[i] > arr[j]){
            leader.push(arr[i]);
            i++;
            j=i;
        }
    }
    leader.push(arr[i]);
    console.log('leaderOpt',leader);
    return leader;
}
leaderArrayEleOpt([7,10,4,3,6,5,2]);
leaderArrayEleOpt([10,20,30]);
leaderArrayEleOpt([30,20,10]);

function leaderArrayEleOpt_1(arr){
    let currLeader=arr[arr.length-1];
    let leader=[currLeader];
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i] > currLeader){
            currLeader=arr[i];
            leader.push(arr[i]);
        }
    };
    console.log('leaderOptEle_1',leader.reverse());
    return leader;
}
leaderArrayEleOpt_1([7,10,4,3,6,5,2])
leaderArrayEleOpt_1([10,20,30]);
leaderArrayEleOpt_1([30,20,10]);

// brute force approch
function maxValue(arr){
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(j>i){
                max=Math.max(max,arr[j]-arr[i]);
            }
        }
    };
    console.log('maxDiff',max);
    if(max<=0)return -1
    return max;
};
maxValue([2,3,10,6,4,8,1]);
maxValue([7,9,5,6,3,2]);
maxValue([10,20,30]);
maxValue([30,10,8,2]);
maxValue([1,5,2,10]);

// modifcation base on two pointer approch
function maxValModify(arr){
    let i=0;
    let max=-Infinity
    for(let j=1;j<arr.length;j++){
        if(j>i){
            max=Math.max(max,arr[j]-arr[i]);
        }
        if(j==arr.length-1){
            i++;
            j=i;
        }
    };
    console.log('maxDiffModify',max);
    if(max<=0) return -1
    return max;
}
maxValModify([2,3,10,6,4,8,1]);
maxValModify([7,9,5,6,3,2]);
maxValModify([10,20,30]);
maxValModify([30,10,8,2]);
maxValModify([1,5,2,10]);  //edge case
// maxValModify([999,997,980,976,948,940,938,928,924,917,907,907,881,878,864,862,859,857,848,840,824,824,824,805,802,798,788,777,775,766,755,748,735,732,727,705,700,697,693,679,676,644,634,624,599,596,588,583,562,558,553,539,537,536,509,491,485,483,454,449,438,425,403,368,345,327,287,285,270,263,255,248,235,234,224,221,201,189,187,183,179,168,155,153,150,144,107,102,102,87,80,57,55,49,48,45,26,26,23,15])

// another modification
function maxValUpdate(arr){
    let max=-Infinity;
    let min=arr[0];
    for(let j=1;j<arr.length;j++){
        max=Math.max(max,arr[j]-min);
        min=Math.min(min,arr[j]);
    }
    console.log('maxValUpdate',max);
    if(max<=0)return -1
    return max;
}
maxValUpdate([2,3,10,6,4,8,1]);
maxValUpdate([7,9,5,6,3,2]);
maxValUpdate([10,20,30]);
maxValUpdate([30,10,8,2]);

function freq(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }
        else{
            map.set(arr[i],1);
        }
    };
    console.log(map);
    return map;
}
freq([10,10,10,25,30,30]);
freq([10,10,10,10]);
freq([10,20,30]);

function maxProfit(arr){
    let profit=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            profit+=arr[i]-arr[i-1];
        }
    }
    console.log('profit',profit);
    return profit
}
maxProfit([1,5,3,8,12]);
maxProfit([30,20,10]);
maxProfit([10,20,30]);
maxProfit([1,5,3,1,2,8]);


function trapRainWater(arr){
    let result=0;
    for(let i=1;i<arr.length-1;i++){
        let left=arr[i];
        for(let j=0;j<i;j++){
            left=Math.max(left,arr[j]);
        }
        let right=arr[i];
        for(let j=i+1;j<arr.length;j++){
            right=Math.max(right,arr[j]);
        }
        result+=Math.min(left,right)-arr[i];
    }
    if(result<0)result=0;
    console.log(result);
    return result;
}
trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]);
trapRainWater([3,0,1,2,5]);
trapRainWater([2,0,2]);
trapRainWater([1,2,3]);
trapRainWater([3,2,1]);

function trapRainWaterMod(arr){
    let result=0;
    let lmax=[arr[0]];
    let rmax=[];
    rmax[arr.length-1]=arr[arr.length-1];
    // find pre left max 
    for(let i=1;i<arr.length;i++){
        lmax[i]=Math.max(arr[i],lmax[i-1]);
    };
    // find pre right max
    for(let i=arr.length-2;i>=0;i--){
        rmax[i]=Math.max(arr[i],rmax[i+1]);
    };
    // now iteratae loop
    for(let i=1;i<arr.length-1;i++){
        let min=Math.min(lmax[i],rmax[i]);
        result=result + (min-arr[i]);
    }
    console.log(result);
    return result;
}
trapRainWaterMod([0,1,0,2,1,0,1,3,2,1,2,1]);


function maxConsecutiveOne(arr){
    let freq=0;
    let ele=1;
    let maxFreq=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            freq++;
            maxFreq=Math.max(maxFreq,freq);
        }else{
            freq=0
        }
    };
    console.log('Concecutive one',maxFreq);
    return maxFreq;
}
maxConsecutiveOne([0,1,1,0,1,0]);
maxConsecutiveOne([1,1,1,1]);
maxConsecutiveOne([0,0,0]);
maxConsecutiveOne([1,0,1,1,1,1,0,1,1]);
maxConsecutiveOne([1,1,0,1,1,1]);

function maxSumSubArray(arr){
    let max=arr[0]
    let currSum=0;
    for(let i=0;i<arr.length;i++){
        // currSum+=arr[i];
        // max=Math.max(max,currSum);
        for(let j=i;j<arr.length;j++){
            currSum+=arr[j];
            max=Math.max(max,currSum);
        }
        currSum=0;
    };
    console.log('max sum subArray',max);
    return max
}
maxSumSubArray([2,3,-8,7,-1,2,3]);
maxSumSubArray([5,8,3]);
maxSumSubArray([-6,-1,-8]);
maxSumSubArray([1,-2,3,-1,2]);
maxSumSubArray([-5,1,-2,3,-1,2,-2]);
maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]);
maxSumSubArray([-3,8,-2,4,-5,6]);

// soluction based on kadane's algorithm

// first of all find out maxsum for each ele in array 
// so this is possible while traverse array in once
// to find a max sum for each ele 
// hint max sum for each ele=sum of previous maxsum + arr[i],  then take max of previous maxsum + arr[i] & arr[i];
// store all max sum result in array & pass that array in Math.max
// so we get one maximum number from this that number is an output
function maxSumSubArrayMod(arr){
    let temp=[arr[0]];
    let currSum=arr[0];
    for(let i=1;i<arr.length;i++){
        let diff=arr[i]+currSum;
        currSum=Math.max(diff,arr[i]);
        temp.push(currSum);
    };
    // console.log(temp);
    console.log('max Sum subarray Modify',Math.max(...temp))
    return Math.max(...temp)
};
maxSumSubArrayMod([2,3,-8,7,-1,2,3]);
maxSumSubArrayMod([5,8,3]);
maxSumSubArrayMod([-6,-1,-8]);
maxSumSubArrayMod([1,-2,3,-1,2]);
maxSumSubArrayMod([-5,1,-2,3,-1,2,-2]);
maxSumSubArrayMod([-2,1,-3,4,-1,2,1,-5,4]);
maxSumSubArrayMod([-3,8,-2,4,-5,6]);
maxSumSubArrayMod([5,-2,3,4]);

function maxEvenOdd(arr){
    let max=0;
    let freq=0;
    for(let i=0;i<arr.length;i++){
        freq++;
        for(let j=i+1;j<arr.length;j++){
            if((arr[j]%2==0 && arr[j-1]%2!=0) || (arr[j]%2!=0 && arr[j-1]%2==0))freq++
            else{
                break;
            }
        };
        max=Math.max(max,freq);
        freq=0;
    }
    console.log('maxEvenOdd',max);
    return max;
}
maxEvenOdd([10,12,14,7,8]);
maxEvenOdd([7,10,13,14]);
maxEvenOdd([10,12,8,4]);
maxEvenOdd([5,10,20,6,3,8]);
// soluction based on kadane's algorithm
function maxEvenOddMod(arr){
    let max=0;
    let freq=0;
    let check=true;
    for(let i=1;i<arr.length;i++){
        if(check)freq++;
        if((arr[i]%2==0 && arr[i-1]%2!=0) || (arr[i]%2!=0 && arr[i-1]%2==0)){
            freq++;
            check=false;
        }
        else{
            max=Math.max(max,freq);
            freq=0;
            check=true;
        }
    }
    if(!check) max=Math.max(max,freq);
    console.log('max longest even odd modify',max);
    return max;
}
// alternative way
// function maxEvenOddMod(arr){
//     let max=1;
//     let freq=1;
//     for(let i=1;i<arr.length;i++){
//         if((arr[i]%2==0 && arr[i-1]%2!=0) || (arr[i]%2!=0 && arr[i-1]%2==0)){
//             freq++;
//             max=Math.max(max,freq);
//         }
//         else{
//             freq=1;
//         }
//     }
//     console.log(max);
//     return max;
// }
maxEvenOddMod([10,12,14,7,8]);
maxEvenOddMod([7,10,13,14]);
maxEvenOddMod([10,12,8,4]);
maxEvenOddMod([5,10,20,6,3,8]);

function maxCircularSubArray(arr){
    let max=-Infinity;
    let currSum=0;
    for(let i=0;i<arr.length;i++){
        currSum=arr[i];
        max=Math.max(max,currSum);
        for(let j=1;j<arr.length;j++){
            let index=(i+j) % arr.length; // here this condition is helps to calculate circular subarray.
            currSum+=arr[index];
            max=Math.max(max,currSum)
        }
        currSum=0;
    }
    console.log('max circular subArray',max);
    return max;
}
maxCircularSubArray([5,-2,3,4]);
maxCircularSubArray([10,-5,5]);
maxCircularSubArray([2,3,-4]);
maxCircularSubArray([8,-4,3,-5,4]);
maxCircularSubArray([-3,4,6,-2]);
maxCircularSubArray([-8,7,6]);
maxCircularSubArray([3,-4,5,6,-8,7]);
maxCircularSubArray([-3,-2,-3]);

function maxCircularSubArrayMod(arr){
    // find the maximum sum of normal subarray;
    let currSum=arr[0];
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        let diff=arr[i]+ currSum;
        currSum=Math.max(diff,arr[i]);
        max=Math.max(max,currSum);
    };
    // console.log(max);

    // there is one check that if maximum of noraml subarray is less than 0 then we return that no furthur operation we can do

    if(max<0){
        console.log('max Circular subarray mod',max);
        return max
    }
    
    // find out maximum sum of circular subarray
    // for that first find out min subarray sum then subtract it from total sum of array;
    let currSum1=arr[0];
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        let diff=arr[i] + currSum1;
        currSum1=Math.min(diff,arr[i]);
        min=Math.min(min,currSum1);
    }
    // console.log(min);

    let arrSum=0;
    arr.forEach(el=>{
        arrSum+=el;
    });
    // console.log(arrSum);

    let minSubArray=arrSum-min;

    // here we compare maximum of maximum sum of normal subarray and maximum of circular subarray.
    console.log('max Circular subarray mod',Math.max(max,minSubArray));
    return Math.max(max,minSubArray);
}
maxCircularSubArrayMod([5,-2,3,4]);
maxCircularSubArrayMod([10,-5,5]);
maxCircularSubArrayMod([2,3,-4]);
maxCircularSubArrayMod([8,-4,3,-5,4]);
maxCircularSubArrayMod([-3,4,6,-2]);
maxCircularSubArrayMod([-8,7,6]);
maxCircularSubArrayMod([3,-4,5,6,-8,7]);
maxCircularSubArrayMod([-3,-2,-3]);
maxCircularSubArrayMod([8,-4,3,-5,4]);

// find the elemnt which appear more than arr.length/2 times in array & return indexs if there is no element appear then return -1.

function majorityEl(arr){
    let occurence=Math.floor(arr.length/2);
    let map=new Map();
    arr.forEach(el=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }else{
            map.set(el,1);
        }
    });
    let majorityNo;
    for(let key of map.keys()){
        if(map.get(key)>occurence){
            majorityNo=key;
        }
        
    };
    if(majorityNo==undefined) {
        console.log('majority indexes are',-1)
        return -1;
    }
    let result=arr.indexOf(majorityNo);
    console.log('majority indexes are',result);
    return result
}
majorityEl([8,3,4,8,8]);
majorityEl([3,7,4,7,7,5]);
majorityEl([20,30,40,50,50,50,50]);
majorityEl([8,7,6,8,6,6,6,6]);
majorityEl([8,8,6,6,6,4,6]);
majorityEl([6,8,4,8,8]);

// alternative way Boyer-Moore Voting Algorithm
// It give the different index of majority element mostly middle index.
function majorityElAlgo(arr){
    // find a major number index
    let majorNo=0;
    let count=1;
    for(let i=1;i<arr.length;i++){
        if(arr[majorNo]==arr[i]){
            count++;
        }else{
            count--
        }
        if(count==0)majorNo=i;count=1;
    };
    // console.log(majorNo);

    // check that major number index is actual majority element
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[majorNo]){
            count++;
        }
        if(count<0){
            majorNo=-1;
        }
    }
    console.log('majorNo with Boyer-Moore Voting Algorithm',majorNo);
    return majorNo;
}
majorityElAlgo([8,3,4,8,8]);

function minFlips(arr){
    let zeroGroup=0;
    let oneGroup=0;
    // for(let j=1;j<arr.length;j++){
    //     if(arr[j-1]!==arr[j] && arr[j-1]==1){
    //         oneGroup++;
    //     }
    //     else if(arr[j-1]!==arr[j] && arr[j-1]==0){
    //         zeroGroup++;
    //     }
    //     if(j==arr.length-1 && arr[j]==1){
    //         oneGroup++;
    //     }
    //     else if(j==arr.length-1 && arr[j]==0){
    //         zeroGroup++;
    //     }
    // }

    // alternative way
    let prev=arr[0];
    prev==0?zeroGroup++:oneGroup++;
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==prev){
            if(arr[i]==0){
                zeroGroup++;
                prev=arr[i];
            }
            else{
                oneGroup++;
                prev=arr[i];
            }
        }
    }
    // console.log(oneGroup,zeroGroup);
    if(zeroGroup===oneGroup){
        let temp=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]==1)temp.push(i);
        }
        console.log('min flips',temp)
        return temp;
    }else{
        let check=oneGroup < zeroGroup?true:false;
        let temp=[];
        for(let i=0;i<arr.length;i++){
            if(check){
                if(arr[i]==1)temp.push(i)
            }
            else if(!check){
                if(arr[i]==0)temp.push(i);
            }
        }
        if(temp.length==0) {
            console.log(0);
            return 0
        }
        console.log('min flips',temp);
        return temp;
    }
}

minFlips([1,1,0,0,0,1]);
minFlips([1,0,0,0,1,0,0,1,1,1,1]);
minFlips([1,1,1]);
minFlips([0,1]);
minFlips([0,0,1,1,0,0,1,1,0,1]);

function minFlipsMod(arr){
    let temp=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            if(arr[i]!=arr[0]){
                temp.push(i);
            }else{
                temp.push(i-1);
            }
        }
    };
    console.log('min flips modify',temp)
    return temp;

}
minFlipsMod([1,1,0,0,0,1]);
minFlipsMod([1,0,0,0,1,0,0,1,1,1,1]);
minFlipsMod([0,1]);
minFlipsMod([1,1,1]);
minFlipsMod([0,0,1,1,0,0,1,1,0,1]);

function maxProductSubArray(nums){
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
}
maxProductSubArray([2,3,-2,4]);
maxProductSubArray([-2,0,-1]);
maxProductSubArray([-2]);
maxProductSubArray([-2,3,-4]);
maxProductSubArray([0,1,-2,-3,-4]);

function maxPositiveProductSubarray(arr){
    let product=1;
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            product*=arr[j];
            if(product > 0){
                maxLength=Math.max(maxLength,j-i+1);
            }
        }
        product=1;
    };
    console.log('max positive product subarray',maxLength);
    return maxLength;
};
maxPositiveProductSubarray([0,1,-2,-3,-4]);
maxPositiveProductSubarray([1,-2,-3,4]);
maxPositiveProductSubarray([-1,-2,-3,0,1]);
maxPositiveProductSubarray([-1]);
maxPositiveProductSubarray([-16,0,-5,2,2,-13,11,8]);

function maxPositiveProductSubarrayMod(arr){
    let positiveLength=0;
    let negativeLength=0;
    let max=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i] === 0) {
            // if product is 0 then postivelength & negative length are 0.
            positiveLength = 0;
            negativeLength = 0;
        } else if (arr[i] > 0) {
            // if multiply positive product  then increment positve length
            // if multiply negative product then increment negative length if it's greater than 0
            positiveLength += 1;
            negativeLength = negativeLength > 0 ? negativeLength + 1 : 0;
        } else {
            // arr[i] < 0
            // if multiply positive product then negativelength increment
            // if multiply negative product then positivelength is increased.
            let temp = positiveLength;
            positiveLength = negativeLength > 0 ? negativeLength + 1 : 0;
            negativeLength = temp + 1;
        }
        max=Math.max(max,positiveLength);
    };
    console.log('max positive product subarray modify',max);
    return max;

}
maxPositiveProductSubarrayMod([0,1,-2,-3,-4]);
maxPositiveProductSubarrayMod([1,-2,-3,4]);

function maxAbsoluteSum(arr){
    let maxabs=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            let abs=Math.abs(sum);
            maxabs=Math.max(maxabs,abs);
        }
    }
    console.log('max absolute sum of subarray',maxabs);
    return maxabs;
}
maxAbsoluteSum([1,-3,2,3,-4])
maxAbsoluteSum([2,-5,1,-4,3,-2]);
maxAbsoluteSum([2,-1]);

function maxAbsoluteSumMod(arr){
    let prev=arr[0];
    let max=arr[0];
    // here i find maximum sum of array
    for(let i=1;i<arr.length;i++){
        let sum=prev+arr[i];
        prev=Math.max(sum,arr[i]);
        max=Math.max(max,prev);
    }
    // console.log(max);

    // here i find minimum sum of array
    let min=arr[0];
    let prevMin=arr[0];
    for(let i=1;i<arr.length;i++){
        let sum=prevMin + arr[i];
        prevMin=Math.min(sum,arr[i]);
        min=Math.min(min,prevMin);
    };
    // console.log(min);

    // here i check max of max and abs(min) because if min is negative then after abs it becomes positive so to check that value is also maximum so that's why we do abs of minimum
    console.log(Math.max(max,Math.abs(min)))
    return Math.max(max,Math.abs(min))
}
maxAbsoluteSumMod([1,-3,2,3,-4])
maxAbsoluteSumMod([2,-5,1,-4,3,-2]);
maxAbsoluteSumMod([2,-1]);


// leetcode's question
    function divideArray(nums, k) {
        const n = nums.length;
        if (n % 3 !== 0) return [];
    // sort array
        nums.sort((a, b) => a - b);
    
        const result = [];
    // iterate array by 3 at a time
        for (let i = 0; i < n; i += 3) {
            const group = [nums[i], nums[i + 1], nums[i + 2]];
            const maxVal = Math.max(...group); // min of group
            const minVal = Math.min(...group);// max of group
    
            if (maxVal - minVal > k) {
                return []; 
            }
    
            result.push(group);
        }
        console.log('divide array into',result);
        return result;
    }
divideArray([1,3,4,8,7,9,3,5,1],2);
divideArray([2,4,2,2,5,2],2);
divideArray([4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11],14);

// Partition Array Such That Maximum Difference Is K
// You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.

// Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.

// for subsequence before iterating sort array then you need to group element which have difference <=k
// so start from i=1 and in group=arr[0] while iterating check current -group <=k if it's not chanhge group to current element and increment count;

function partitionArray(arr, k){
    arr=arr.sort((a,b)=>a-b);
    let count=1;
    let group=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]-group > k){
            count++; // increment count because here new group start.
            group=arr[i];
        }
    }
    console.log('partitionArray count is',count);
    return count;
}
partitionArray([3,6,1,2,5],2);
partitionArray([1,2,3],1);
partitionArray([2,2,4,5],0);
partitionArray([5,16,3,20,9,20,16,19,6],4);

// 2099. Find Subsequence of Length K With the Largest Sum
// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
function maxSubsequence(arr,k){
    const paired=arr.map((val,index)=>({val,index}));
    paired.sort((a,b)=>b.val-a.val) //sort value in decending order
    let topK=paired.slice(0,k);
    topK.sort((a,b)=>a.index-b.index);
    let result= topK.map((el)=>el.val);
    console.log(result);
    return result;
}
maxSubsequence([-1,-2,3,4],3);
maxSubsequence([2,1,3,3],2);
maxSubsequence([3,4,3,3],2);
maxSubsequence([50,-75],2);
maxSubsequence([-8,-94,-30,-98,-27,62,26],7)
maxSubsequence([63,-74,61,-17,-55,-59,-10,2,-60,-65],9);

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

// prfix sum +map approch
function numSubarraysWithSum(arr,t){
    // let count=0;
    // for(let i=0;i<arr.length;i++){
    //     let sum=0;
    //     for(let j=i;j<arr.length;j++){
    //         sum+=arr[j];
    //         if(sum==t)count++;
    //         if(sum > t)break;
    //     }
    // }
    // console.log(count);
    // return count;

    let map=new Map();
    map.set(0,1);
    let prefixSum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        prefixSum+=arr[i];
        if(map.has(prefixSum-t)) count+=map.get(prefixSum-t);
        map.set(prefixSum,(map.get(prefixSum)||0)+1);
    };
    console.log('sub array of sum equal to k opt',count);
    return count;
}
numSubarraysWithSum([1,0,1,0,1],2);
numSubarraysWithSum([0,0,0,0,0],0)

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
