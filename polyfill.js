Array.prototype.myMap=function(callBack){
    let result=new Array(this.length).fill(0);
    for(let i=0;i<this.length;i++){
        result[i]=callBack(this[i]);
    };
    console.log(result);
    return result;
};
[1,2,3,4].myMap(x=>x*2);

Array.prototype.myFilter=function(callBack){
    let result=[];
    for(let i=0;i<this.length;i++){
        if(callBack(this[i])){
            result[i]=this[i];
        }
    };
    console.log('filter',result);
    return result;
}
console.log(Array.prototype.myFilter);

[6,7,8,9].myFilter(x=>x==6);

Array.prototype.myReduce=function(callBack,initialValue){
   let accumlator;
   let startIndex;
   let length=this.length;
   if(arguments.length >=2){
    accumlator=initialValue;
    startIndex=0;
   }else{
    accumlator=this[0];
    startIndex=1;
   }

   for(let i=startIndex;i<length;i++){
    accumlator=callBack(accumlator,this[i]);
   };
   console.log(accumlator);
   return accumlator;
}
console.log(Array.prototype.myReduce);


[10,11,12,13].myReduce((acc,curr)=>acc+curr);
[10,11,12,13].myReduce((acc,curr)=>acc+curr,0);

const s1=()=>{ return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("1");
    }, 3000);
})};
const a2 = ()=>{ return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("2");
    }, 1000);
})};
const a3 = ()=>{return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("3");
    }, 5000);
})};
const a4= ()=>{return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("4");
    }, 1000);
})};
const a5= ()=>{return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("5");
    }, 4000);
})};

// map async limit
function taskOfExecution(arr,limit){
    return new Promise((resolve,reject)=>{
        let result=new Array(arr.length);
        let running=0;
        let index=0;
        let completed=0;

        function runNext(){
            if (completed === arr.length) {
                return resolve(result);
            }
            while(running < limit && index < arr.length){
                const currentIndex=index;
                const currentTask=arr[currentIndex];
                index++;
                running++;
                currentTask().then((res)=>{
                    result[currentIndex]=res;
                }).catch((err)=>{
                    reject(err);
                }).finally(() => {
                    running--;
                    completed++;
                    runNext(); // start next task
                  });
            }
        }

        runNext();
    })
}
taskOfExecution([s1,a2,a3,a4,a5],2).then((res)=>{
    console.log(res);
});

// using batch Wise

let batch=[s1,a2,a3,a4,a5];
async function doWork(batch){
    let batchResult=[];
    for(let i=0;i<batch.length;i+=2){
        const data=await Promise.all([batch[i](),batch[i+1]?.()]);
        batchResult.push(...data);
    };
    console.log(batchResult);
    return batchResult;
}
doWork(batch);