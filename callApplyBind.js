let obj1 = {
    name: 'Omkar',
    City: 'Mumbai',
}
let obj2 = {
    name: 'Sid',
    City: 'mumbai',
}
function printInfo(state, age) {
    return this.name + ' belongs from ' + this.City + ' and comes from ' +state+' and have age '+age;
}
let info1 = printInfo.call(obj1, 'maharashatra', 21);
// So here in call first argument is pointing of this keyword and second one is argument of function
// Apply also works same just difference in passing arguments

let info2 = printInfo.apply(obj2, ['maharashatra', 23]);
// Now bind method
// In bind method it give a copy of that function which you further in your code invoke that or call that.
let info3 = printInfo.bind(obj1, 'maharashatra', 21)
console.log('internal',info3());
// So here in info 3 variable function is stored so which you like info3();
// It give you output.

// here bind Polyfill.

Function.prototype.myBind=function(...args){
    let obj=this;
    return function(){
        let option=args.slice(1);
        return obj.apply(args[0],option);
    }
} 

let info4 =printInfo.myBind(obj2,'punjab',23)
console.log('own',info4());
// let arr=['cdskdwc','dadasd','dwdeeds'];
// let option=arr.slice(1);
// console.log(option);