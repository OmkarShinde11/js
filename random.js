// function orderApiPromise(){
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data){
//             resolve();
//         }
//         reject();
//     })
// }

// function paymentProcessPromise(){
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data){
//             resolve();
//         }
//         reject();
//     })
// }

// function orderhistoryPromise(){
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data){
//             resolve('history done');
//         }
//         reject();
//     })
// }

// orderApiPromise().then(()=>{
//     return paymentProcessPromise();
// }).then(()=>{
//     return orderhistoryPromise();
// }).then((res)=>{
//     console.log(res);
// })


// let a1=[
//     {id:0,Name:'Omkar',age:24},
//     {id:1,Name:'Sid',age:28},
//     {id:2,Name:'Raj',age:29},
//     {id:3,Name:'Rak',age:24},
// ];

// a1.map((el)=>{
//     el.state='Maharashatra'
// });

// console.log(a1.map((el)=>{
//     el.state='Mahashatra';
// }));
// console.log(a1);

// let output=a1.reduce((acc,curr)=>{
//     if(acc[curr.age])acc[curr.age]++;
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});
// console.log('ageOut',output);

// let output2=a1.reduce((acc,curr)=>{
//     if(curr.age<25) acc.push(curr.Name);
//     return acc;
// },[]);
// console.log(output2);

// let p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('First Promise')
//     },5000)
// })

// let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Second Promise')
//         },10000)
//     })


// let random_1=async()=>{
//     let data1=await p1;
//     console.log(data1);
//     console.log('p1 resolved');

//     let data2=await p2;
//     console.log(data2);
//     console.log('p2 resolved');
// };

// random_1();


// let obj_1={
//     name:'Omkar',
//     age:23
// };

// function printName(){
//     return `info details: ${this.name} have age ${this.age}`;
// };

// let result= printName.bind(obj_1);
// console.log(result());

// Function.prototype.myBind=function (...args){
//     let obj=this;
//     let options=args;
//     return function(){
//         obj.call(options);
//     }
// }

// let result_1= printName.bind(obj_1);
// console.log(result_1());


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(1);
        resolve()
    },2000)
});
console.log(2);
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(3);
        resolve();
    }, 1000);
});
// see when we call promise.all([p1,p2]) then as per settimeout promise are reslved so console print as promise resolved but when you console.log(Promise.all([p1,p2])) then it give output in order of promise which you mention inside promise.all

// In below code .then in that no return stratement so in that case promise resolve immediately and console.log(5) print and then console.log(4) but if there is return statment then 4 and then 5 is print.
var p3=Promise.all([p1,p2]).then(()=>{
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(4);
            resolve();
        },3000);
    })
});

p3.then(()=>{
    console.log(5);
})

// const p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve('Promise.all P1 Success')},3000)
// })
// const p5=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(' Promise.all P2 Success')},1000)
//     // setTimeout(()=>{reject('P2 Fail')},1000)
// })
// const p6=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(' Promise.all P3 Success')},2000)
// })

// Promise.all([p4,p5,p6]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })