// Selection Sort:
// here in selection sort 
// 1.find minimum and swap with current element in iteration.
// 2. i++ so from that i till end find minimum and swap with current element in iteration.
// 3. Continue untill second last index of an array, because last element is always sorted.

// Time Complexcity for selection sort is o(n) square in worst average,best case

// In below Approch i use built in methods.
function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=Math.min(...arr.slice(i));
        let minIndex=arr.indexOf(min);
        let temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    };
    console.log(arr);
    return arr;
}
selectionSort([13,46,24,52,20,9]);

//Selection Sort: find minimum and swap with current element in iteration.
function selectionSortWithoutBuiltIn(arr){
    for(let i=0;i<arr.length-1;i++){// here i run loop till arr.length-1 because we don't want to sort last element it's always sorted.
        let mini=i
        for(let j=i;j<arr.length;j++){ //here i run normal loop because we need to find minimum.
            if(arr[j]<arr[mini]){
                mini=j;
                let temp=arr[mini];
                arr[mini]=arr[i];
                arr[i]=temp;
            }
        }
    };
    console.log(arr);
    return arr;
}
selectionSortWithoutBuiltIn([13,46,24,52,20,9]);

// bubble Sort
// here in bubble sort 
// Push maximum element to last by doing adjecent swapping.worst and average and in best it's o(n).
// Time comlexcity for bubble sort o(n)square in 

function bubbleSort(arr){
    for(let i=arr.length-1;i>=1;i--){ // here i run the loop from arr.length-1 to 1 because at last only one element left which is already sorted.
        let swapCheck=false; // here this check because when array is sorted only one iteration done.
        for(let j=0;j<i;j++){ // here i run loop from 0 to i because we need to push max element to i th position. so here my j loop runs from 0 to i-1 because i am doing j<i;j++;
            if(arr[j] > arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapCheck=true;
            }
        };
        if(!swapCheck)break; //so when we get swapcheck false which not change by inner loop we break loop because in first iteration we get an array is sorted.
    };

    console.log(arr);
    return arr;
}
bubbleSort([13,46,24,52,20,9]);

function bubbleSortAlternative(arr){
    let low=1;
    let high=arr.length-1;
    while(high >=low){
        swapping(arr);
        high--;
    };
    console.log('alternative way bubble',arr)
}

function swapping(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
}
bubbleSortAlternative([13,46,24,52,20,9]);

function recursiveBubbleSort(arr,n){
    if(n==0){
        console.log('recursive bubble sort',arr);
        return arr;
    };
    for(let i=0;i<n;i++){
        if(arr[i] > arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    };
    recursiveBubbleSort(arr,n-1);
}

recursiveBubbleSort([13,46,24,52,20,9],5);
recursiveBubbleSort([5,4,3,2,1],5);


// Insertion Sort
// here in insertion sort 
// Take one element and place in the correct posotion
// In other words minimum place in first positions.

// time complexcity in worst and average case o(n) square and in bast case time complexcity is o(n).
function insertionSort(arr){
    for(let i=0;i<arr.length;i++){ // Here we start with normal loop
        for(let j=i;j>0;j--){ // This loop starts with i to 0 to find the current elment is fit in correct position.
            if(arr[j]< arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }else{
                break;
            }
        }
    };
    console.log(arr);
    return arr;
};
insertionSort([14,9,15,12,6,8,13]);
insertionSort([13,46,24,52,20,9]); 
insertionSort([1,2,3,4,5,6]);

function insertionSortRecursive(arr,low,high){
    if(low >= high){
        console.log('Sort after recursive insertion',arr);
        return arr;
    }
    for(let i=low;i>0;i--){
        if(arr[i] < arr[i-1]){
            let temp=arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=temp;
        }
    };
    insertionSortRecursive(arr,low+1,high);
}

insertionSortRecursive([14,9,15,12,6,8,13],0,7);
insertionSortRecursive([5,4,3,2,1],0,5);


// this only work when both arrays are sorted.
function mergeTwoArray(arr1,arr2){
    let n=arr1.length+arr2.length;
    let result=new Array(n).fill(0);
    let left=0;
    let right=0;
    for(let i=0;i<result.length;i++){
        if(arr1[left] < arr2[right]){
            result[i]=arr1[left];
            left++;
        }
        else if(arr2[right] < arr1[left]){
            result[i]=arr2[right];
            right++;
        }
        else if(arr1[left]==arr2[right]){
            result[i]=arr1[left];
            left++;
        }
        else if(left > arr1.length-1){
            result[i]=arr2[right];
            right++;
        }
        else if(right > arr2.length-1){
            result[i]=arr1[left];
            left++;
        }
    };
    console.log('sort',result);
    return result;
}

// alternative way
function mergeTwoArray2(list1,list2){
    let left=0;
    let right=0;
    let result=[];
    while(left <=list1.length-1 && right <= list2.length-1){
        if(list1[left] < list2[right]){
            result.push(list1[left]);
            left++;
        }else{
            result.push(list2[right]);
            right++;
        }
    };

    while(left <= list1.length-1){
        result.push(list1[left]);
        left++;
    }

    while(right <= list2.length-1){
        result.push(list2[right]);
        right++;
    };
    console.log(result);
}

mergeTwoArray([1,2,3],[1,4]);
mergeTwoArray([2,5],[4,6]);
mergeTwoArray([5],[2]);
mergeTwoArray([3],[1]);
mergeTwoArray([1,1,2,3,4],[2,4,5,6]);


function mergeSort(arr,low,high){
    if(low >= high)return;
    let middle=Math.floor((low+high)/2);
    mergeSort(arr,low,middle);
    mergeSort(arr,middle+1,high);
    return merge(arr,low,middle,high);
};

function merge(arr,low,mid,high){
    let temp=[];
    let left=low;
    let right=mid+1;
    while(left <= mid && right <=high){
        if(arr[left] <=arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    };

    while(left <= mid){
        temp.push(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push(arr[right]);
        right++;
    };

    for(let i=low; i<=high;i++){
        arr[i]=temp[i-low];
    };
    return arr;
}

console.log(mergeSort([3,2,4,1,3],0,4));

function partionIndex(arr,low,high){
    let pivot=arr[low];
    let i=low;
    let j=high;
    while(i<j){
        while(arr[i] <= pivot && i <= high-1){ // here we find highest element than pivot so that's why in while we do less than equal to <= so while break and we get greater element index
            i++;
        }
        while(arr[j] >= pivot && j >= low +1){// here we find lowest element than pivot so that's why in while we do gerater than equal to >= so while break and we get lowest element index
            j--;
        };
        if(i<j){ // here we do swap smaller on left of pivot and greater on right of pivot.
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    };
    // Here we do actually swap a pivot with j 
    let temp=arr[low];
    arr[low]=arr[j];
    arr[j]=temp;
    return j;
}
// partionIndex([4,6,2,5,7,9,1,3],0,7);

function quickSort(arr,low,high){
    if(low < high){
        let partion=partionIndex(arr,low,high);
        // here partion-1 because we have to sort element before partiton 
        quickSort(arr,low,partion-1);
        // here partion+1 because we have to sort element after partiton 
        quickSort(arr,partion+1,high);
    };
}
let arr=[4,6,2,5,7,9,1,3];
quickSort(arr,0,7);
console.log('Array After quick Sort',arr);