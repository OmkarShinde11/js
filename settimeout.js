console.log('begins');
setTimeout(()=>{
    console.log('a');
},5000);

let startTime=new Date().getTime();
let endTime=startTime;

while(endTime < startTime + 10000){
    console.log('Time Updated');
    endTime=new Date().getTime();
}


// here in above code 
// OUTPUT : begins Time Updated till 10seconds and then settimeout a is print 
// here setimeout time is 5 seconds and while loop take more time to run so when such case happens 
// e.g. when main threading is busy with the code execution and settimeout timer is till that expire but it execute after finishing a work which is is continue in callstack
