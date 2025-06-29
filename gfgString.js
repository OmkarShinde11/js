function minimumDeletions(str,k){
    let arr=str.split('');
    let map=new Map();
    arr.forEach((el)=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1)
        }else{
            map.set(el,1);
        }
    });
    // console.log(map);
    let freq=Array.from(map.values());

    let mincount=Infinity;
    for(let x of freq){
        let deleteCount=0;
        for(let y of freq){
            if(y<x)deleteCount+=y;
            else if(y>x+k)deleteCount+=y-(x+k);
        }
        mincount=Math.min(mincount,deleteCount);
    }
    
    console.log(mincount);
    return mincount;
};
minimumDeletions('aabcaba',0);
minimumDeletions('dabdcbdcdcd',2);
minimumDeletions('aaabaaa',2);

// Divide a String Into Groups of Size k
// A string s can be partitioned into groups of size k using the following procedure:

// The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each element can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.
function divideString(str,k,fill){
    let arr=str.split('');
    let temp=[];
    let iterativeStr='';
    for(let i=0;i<arr.length;i++){
        iterativeStr+=arr[i];
        if(iterativeStr.length==k){
            temp.push(iterativeStr);
            iterativeStr='';
        }
        else if (i==arr.length-1 && iterativeStr.length!=k){
            for(let j=iterativeStr.length;j<k;j++){
                iterativeStr+=fill;
            }
            temp.push(iterativeStr);
        }
    }
    console.log(temp);
    return temp;
};
divideString('abcdefghijk',3,'x');
divideString('abcdefghi',3,'x');
divideString('abcdefghij',3,'x');