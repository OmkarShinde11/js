// for printing pattern 
// 1.pattern consist of nesting
// 2. outer loop consist for row
// 3. inner loop for column
// 4. for the inner loop focus on columns and connect them somehow to rows
// 5. print whtever pattern in inner  loop
// 6 observe symmetry (optional).

// print pattern 
// ****
// ****
// ****
// ****
function printPattern(n){
    for(let i=0;i<n;i++){
        let row=''
        for(let j=0;j<n;j++){
            row+='*';
        }
        console.log(row);
    };
};
printPattern(5)

// print
// *
// **
// ***
// ****
// *****
function printIndexPattern(n){
    for(let i=n;i>=0;i--){
        let row='';
        for(let j=i;j<n;j++){
            row+='* ';
        }
        console.log(row);
    }
}
printIndexPattern(5)
printIndexPattern(6);

// print
// 1
// 12
// 123
// 1234
// 12345
function printIndexNumberPattern(n){
    for(let i=0;i<n;i++){
        let row='';
        for(let j=0;j<=i;j++){
            row+=`${j+1}`;
        }
        console.log(row);
    };
}
printIndexNumberPattern(5);
printIndexNumberPattern(6);

// print
// 1
// 22
// 333
// 4444
// 55555
function printIndexNumberPattern2(n){
    for(let i=1;i<=n;i++){
        let row=``;
        for(let j=1;j<=i;j++){
            row+=`${i}`
        }
        console.log(row);
    }
}
printIndexNumberPattern2(5);
printIndexNumberPattern2(6);

// print
// *****
// ****
// ***
// **
// *
function starIndexPattern(n){
    for(let i=0;i<n;i++){
        let row='';
        for(let j=i;j<n;j++){
            row+='*';
        }
        console.log(row);
    }
}
starIndexPattern(5);

// print
// 12345
// 1234
// 123
// 12
// 1
function printIndexNumberPattern3(n){
    for(let i=n;i>0;i--){
        let row='';
        for(let j=1;j<=i;j++){
            row+=`${j}`
        }
        console.log(row);
    }
}
printIndexNumberPattern3(5);


function printStarSpacePattern(n){
    for(let i=0;i<n;i++){
        let row='';
        for(let j=0;j<n-i-1;j++){
            row+=" ";
        }
        for(let j=0;j<2*i+1;j++){
            row+='*'
        };
        for(let j=0;j<n-i-1;j++){
            row+=" ";
        }
        console.log(row);
    }
}
printStarSpacePattern(5);
console.log("         ");

// *********
//  ******* 
//  *****  
//   ***   
//    *
function printStarSpacePattern2(n){
    for(let i=0;i<n;i++){
        let row=''
        for(let j=0;j<i;j++){
            row+=" ";
        }
        for(let j=0;j<2*(n-i-1)+1;j++){
            row+='*';
        }
        for(let j=0;j<i;j++){
            row+=" ";
        }
        console.log(row);
    }
}
printStarSpacePattern2(5);

function combinepattern(n){
    printStarSpacePattern(n);
    printStarSpacePattern2(n);
}
combinepattern(5);
console.log("        ")
function printContinueStarPattern(n){
    for(let i=0;i<2*n-1;i++){
        let row='';
        if(i<n-1){
            for(let j=0;j<=i;j++){
                row+='*';
            }
        }else{
            for(let j=0;j<(2*n-i)-1;j++){
                row+='*';
            }
        }
        console.log(row);
    }
}
printContinueStarPattern(5);


// 1
// 01
// 101
// 0101
// 10101
function printOddEvenPattern(n){
    let start;
    for(let i=1;i<=n;i++){
        let row='';
        if(i%2!==0)start=1
        else{start=0;}
        for(j=1;j<=i;j++){
            row+=start;
            start=1-start;
        }
        console.log(row);
    };
};
printOddEvenPattern(5);

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
function printseqPattern(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        let row='';
        for(let j=1;j<=i;j++){
            sum+=1;
            row+=`${sum} `;
        }
        console.log(row);
    }
}
printseqPattern(5);
console.log("      ");
// 1    1
// 12  21
// 123321
function printseqPattern2(n){
    let spaces=2*(n-1);
    for(let i=1;i<=n;i++){
        let row=''
        for(let j=1;j<=i;j++){
            row+=j;
        }
        for(let j=1;j<=spaces;j++){
            row+=" ";
        }
        for(let j=i;j>=1;j--){
            row+=j;
        }
        console.log(row);
        spaces-=2;
    }
}
printseqPattern2(3);
printseqPattern2(6);
console.log("         ")
function printCapitalPattern(n){
    for(let i=0;i<n;i++){
        let row='';
        let calc=65+i;
        for(let j=65;j<=calc;j++){
            row+=String.fromCharCode(j);
        };
        console.log(row);
    }
}
printCapitalPattern(3);
printCapitalPattern(6);
console.log("      ");
function printCapitalPattern2(n){
    for(let i=n-1;i>=0;i--){
        let row='';
        let calc=65+i
        for(let j=65;j<=calc;j++){
            row+=String.fromCharCode(j);
        }
        console.log(row);
    }
}
printCapitalPattern2(3);
printCapitalPattern2(6);
console.log("     ")
function printCapitalPattern3(n){
    for(let i=0;i<n;i++){
        let row='';
        let calc=65+i;
        for(let j=0;j<=i;j++){
            row+=String.fromCharCode(calc);
        }
        console.log(row);
    }
};
printCapitalPattern3(3);
printCapitalPattern3(5);
console.log("      ");
function printCapitalPattern4(n){
    for(let i=1;i<=n;i++){
        let row='';
        let calc=65;
        for(let j=0;j<n-i;j++){
            row+=" "
        }
        for(let j=1;j<=2*i-(1);j++){
            if(j<=i){
                calc=65+(j-1);
            }else{
                calc-=1;
            }
            row+=String.fromCharCode(calc);
        }
        for(let j=0;j<n-i;j++){
            row+=" "
        }
        console.log(row)
    }
}
printCapitalPattern4(3);
printCapitalPattern4(4);
printCapitalPattern4(6);
console.log("     ");
function printCapitalPattern5(n){
    for(let i=1;i<=n;i++){
        let row="";
        let sum=n-i;
        let calc=65+sum;
        for(let j=0;j<i;j++){
            row+=String.fromCharCode(calc);
            calc+=1;
        }    
        console.log(row);    
    }
}
printCapitalPattern5(5);
printCapitalPattern5(6);

// ******
// **  **
// *    *
// *    *
// **  **
// ******
function printStarSpacePattern3(n){
    let space=0;
    for(let i=0;i<n;i++){
        let row='';
        for(let j=0;j<n-i;j++){
            row+='*'
        }
        for(let j=0;j<space;j++){
            row+=" "
        }
        for(let j=0;j<n-i;j++){
            row+='*'
        }
        space+=2;
        console.log(row);
    }
}
printStarSpacePattern3(3);
console.log("     ")
function printStarSpacePattern4(n){
    let spaces=2 * (n-1);
    for(let i=1;i<=n;i++){
        let row=''
        for(let j=1;j<=i;j++){
            row+="*";
        }
        for(let j=1;j<=spaces;j++){
            row+=" "
        }
        for(let j=1;j<=i;j++){
            row+='*'
        }
        spaces-=2
        console.log(row);
    }
}
// printStarSpacePattern4(3);
console.log("   ")
function combinepattern2(n){
    printStarSpacePattern3(3);
    printStarSpacePattern4(3);
}
combinepattern2(3);

console.log("   ")


function printStarSpacePattern5(n){
    let space=2 * (n-1);
    for(let i=1;i<=2*n-1;i++){
        let row='';
        let stars=i
        if(i>n)stars=2*n-i;
        for(let j=1;j<=stars;j++){
            row+="*"
        }
        for(let j=1;j<=space;j++){
            row+=" "
        }
        for(let j=1;j<=stars;j++){
            row+="*"
        }
        console.log(row);
        if(i<n) space -=2;
        else space +=2;
    }
}
printStarSpacePattern5(3)