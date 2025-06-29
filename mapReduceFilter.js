//map

arr=[5,6,8,4,2];

const output=arr.map((el)=>{
    el=el*2;
    return  el
});

console.log(output);

console.log(arr.map((el)=>{
    el=el*2;
    return el
}));


let arrayOfObject=[
    {name:'Omkar',city:'Mumbai'},
    {name:'sid',city:'Mumbai'},
    {name:'Sid1',city:'Mumbai'},
    {name:'Sid2',city:'Mumbai'},
]

var obj=arrayOfObject.map((el)=>{
    el.state='Maharashatra'
    return el
})

arrayOfObject.map((el)=>{
    el.state='Maharashatra'
})

console.log(obj);
console.log(arrayOfObject)


//filter

let filterArray=arr.filter((el)=>{
    return el % 2!==0;
})

console.log(arr.filter((el)=>{
    return el%2!==0
}))
console.log(filterArray);


let filterObj=arrayOfObject.filter((el)=>{
    return el.name.toLocaleLowerCase()=='omkar'
})


arrayOfObject.filter((el)=>{
    return el.name.toLocaleLowerCase()=='omkar'
})

console.log(arrayOfObject)

console.log(arrayOfObject.filter((el)=>{
    return el.name.toLocaleLowerCase()=='omkar'
}));
console.log(filterObj);


//reduce

const single=arr.reduce((acc,cur)=>{
    return acc+=cur;
},0);

console.log(single);

const max=arr.reduce((maxNum,cur)=>{
    if(maxNum<cur){
        maxNum=cur
    }
    return maxNum;
},0)

console.log(max);


let Users=[
    {name:'Omkar',city:'Mumbai',age:40},
    {name:'sid',city:'Mumbai',age:60},
    {name:'Sid1',city:'Mumbai',age:30},
    {name:'Sid2',city:'Mumbai',age:40},
]

// function commonAge(users){
//     let obj={};
//     for(let i=0;i < users.length;i++){
//         let counter=0
//         let curAge=users[i].age;
//         if(!Object.keys(obj).includes(users[i].age.toString())){
//             for(let j=i;j < users.length;j++){
//                 if(users[j].age==curAge) counter++;
//             };
//             obj[users[i].age]=counter;
//         }
//     };
//     return obj;
// }
// console.log(commonAge(Users));

function commonAgeModify(users){
    let map=new Map();
    users.forEach(user => {
        if(map.has(user.age)){
            map.set(user.age,map.get(user.age)+1);
        }else{
            map.set(user.age,1);
        }
    });
    console.log(map)
    return map;
}
commonAgeModify(Users)

// using reduce

const commonAge=Users.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age]= ++acc[cur.age]
    }
    else{
        acc[cur.age]=1
    }
    return acc
},{})

console.log(commonAge);

// find Common.
let arr2=[5,8,6,5,8,7,3,5,3]
const common= arr2.reduce((acc,cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur); 
        return acc
    }
    return acc;
},[])

let duplicate=arr2.reduce((acc,cur)=>{
    if(acc.occurence[cur] && !acc.dupliNum.includes(cur)){
        acc.dupliNum.push(cur);
    }
    else{
        acc.occurence[cur]=1
    }
    return acc;
},{occurence:{},dupliNum:[]})

console.log(common);
console.log(duplicate);


// Note:

// when using map and there is array object and if we not store a responce then it's ok that there is no return statment.

let a1=[
    {id:0,Name:'Omkar'},
    {id:1,Name:'Sid'},
    {id:2,Name:'Raj'},
    {id:3,Name:'Rak'},
];

a1.map((el)=>{
    el['state']='Maharahashatra';
});
console.log('a1',a1);
// if you are assign you're result to an variable then return is mandetory.

a1=a1.map((el)=>{
    el['state']='Maharahashatra';
    return el;
});
console.log(a1);

// Objects are passed by reference: The map function modifies each object in the array directly because objects in JavaScript are referenced. So, adding a state property to each object modifies the original a1 array.

//but using array 

let a=[1,2,3,4];
    a=a.map((el)=>{
        el+=2
        return el;
    });
console.log(a);

console.log('mapIn Console',a.map((el)=>{
    return el+=2;
}));

//Objects are passed by reference: The map function modifies each object in the array directly because objects in JavaScript are referenced. So, adding a state property to each object modifies the original a1 array.

// So here map not change an original array it return new array so you have to assign a result back to a or in new variable.


// when Using filter.

// if you're code is one line then no need of return statment while assign a result to a variable 
// if you're code contains multiple line of {} then return is mandetory whlile assign a variable.
// filter always give a new array in so you have to assign a result to the variable. in any case it will array object or array.

let new_array=[
    {id:0,Name:'Omkar',city:'Mumbai'},
    {id:1,Name:'Sid',city:'Mumbai'},
    {id:2,Name:'Raj',city:'Mumbai'},
    {id:3,Name:'Rak',city:'Mumbai'},
];
new_array=new_array.filter(el=>el.Name!='Omkar' && el.Name!='Sid'); 
console.log(new_array);

// here IMP NOTE:
// a1.map((el)=>{
//     el['state']='Maharahashatra';
// });
// console.log(a1);

// new_array.filter(el=>el.Name!='Omkar' && el.Name!='Sid'); 
// console.log(new_array);

// In map code map change an initial array and there is array object so object are passed by refference so it update original array so when we console we get an updated array.
// ------------------------------------------BUT---------------------------------------
// In filter filter not change original array but it return a new array so we have to assign to an variable.




// find max using reduce

const result=arr.reduce((acc,curr)=>{
    if(curr> acc) acc=curr;
    return acc;
},0);
console.log('result',result);

