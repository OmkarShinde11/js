// block scope: the scope where you acess a variable and function.
// block is used when we want to run a multiple statement and javascript wants only one.

{
    var n=4;
    let a=3;
    const b=6;
}
console.log('n outside',n);
// here n is in global scope and a and b is in seperate scope in memory execution .
// so because of that it also say that let and const are block scope.

// Shadowing

var a=9;
{
    var a=10;
    let x=89;
    const y=90;
    console.log('a inside block',a);
}
console.log('a outhside block',a);

// here a is in block scope and then block is start there is again a variable a which points to same memory which is gloabl so a is overwritten that's why we get a output 10,10

let z=90;
{
    let z=87;
    console.log(z);
}
console.log(z);

// here z is in seperate scope and then block is start inside that z is in different block so z is not overwritten and we get a output is 87 and 90.

// NOTE: you can do a shadowing var using var, let using let but not let using var.
var r=50;
{
    let r=100;
    console.log('r inside block',r);
}
console.log('r outside block',r);
