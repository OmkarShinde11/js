// EveryThing happen inside a javascript is happen in execution context.
// execution context is handle bu callStack.

var n=4;
function double(num){
    var ans=num * num;
    return ans;
}
var square1=double(2);
var square1=double(4);

// in above code execution content is created and memory is allocated to variable and functions then the function invocation is callled then again execution context is created and memory is allocated to variable and funation inside of that function and when it return it destory that function execution context.And in memory execution variables are stores a undefined in it and function contains a function defination.




