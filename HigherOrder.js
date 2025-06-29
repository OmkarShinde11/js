// Higher Order Function: a function which take a function as an arrgument or return a function is called a higher order function.
radius=[3,1,2,5];
const area=radius.map((r)=>{
    let circlearea=Math.floor(Math.PI * r * r);
    return circlearea;
});

console.log(area);

function calculateArea(radius){  //callback function
    return Math.floor(Math.PI * radius * radius);
};

function calculateCircumFerence(radius){  //callback function
    return Math.floor(2 * Math.PI * radius);
};

function calculateDiameter(radius){   //callback function
    return Math.floor(2 * radius );
};

function calculate(radius,logic){   // Higher order function which take a function as a arrgument.
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    console.log(output);
    return output;
}

// so this function is work on array so we convert a function into prototype.

Array.prototype.calculate=function(logic){ 
    let output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    console.log(output);
    return output;
}

calculate(radius,calculateArea);
calculate(radius,calculateCircumFerence);
calculate(radius,calculateDiameter);
radius.calculate(calculateDiameter);

