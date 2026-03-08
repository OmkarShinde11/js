// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function main() {
  console.log("Start");
  const data = await fetchData();
  console.log(data);
  console.log("End");
}
main();
console.log('Omkar');

// console.log('A');
// setTimeout (() => console.log('B'), 0)
// Promise.resolve(). then(() => console.log('C'));
// console.log('D');

// Convert the following Promise chain into async/await: 
// fetchData().
// then(res => process(res)).
// then(final => console.log(final));


// async function random(){
//     try{
//         let data=await fetchData();
//         let finalRes=process(data);
//         console.log(finalRes);
//     }catch(err){
//         console.log(err);
//     }
// }

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         resolve('Omkar');
//     })
// };

// function process(data){
//     return `My Name is ${data}`;
// }
// random();

// const p1 = new Promise(res => setTimeout(() => res('A'), 300));
// const p2 = new Promise(res => setTimeout(() => res('B'), 100));
// Promise.race([p1, p2]).then((res)=>console.log(res));

// function counter() {
//  let count = 0;
// return function () {
//   count++;   
//  console.log(count);
//   };
// }
// const c1 = counter();
// c1();
// c1();
// const c2 = counter();
// c2();


// @Component({
//   selector: 'app-test',
//   template: `<p>{{message}}</p>`
// })
// export class TestComponent implements OnInit, OnChanges {
//   @Input() data = 'Angular';
//   message = 'Init';

//   constructor() {
//     console.log('constructor');
//   }

//   ngOnChanges() {
//     console.log('ngOnChanges');
//   }

//   ngOnInit() {
//     console.log('ngOnInit');
//   }
// }



// @Component({
//   selector: 'app-view',
//   template: `<p #para>Hello</p>`
// })
// export class ViewComponent implements OnInit, AfterViewInit {
//   @ViewChild('para') para!: ElementRef;

//   ngOnInit() {
//     //   console.log(`In ngOnChanges ${this.para}`) 
//     console.log('In AfterViewInit:', this.para.nativeElement.textContent);
//     // Error:Cannot read properties of undefined.
//   }

//   ngAfterViewInit() {
//     console.log('In AfterViewInit:', this.para.nativeElement.textContent);
//   }
// }


{/* <li *ngFor="let item of items;let i=index ">{{heavyComputation(item) }}</li> */}

{/* <p *ngIf="true" *ngFor="let i of [1,2,3]">{{i}}</p> */}

// sort the array by last letter of word
let arr=["apple","banana","custard","pineapple"];

function sortlastChar(arr){
    arr.sort((a,b)=>{
        const first=a[a.length-1];
        const second=b[b.length-1];
        return first.localeCompare(second);
    });
    console.log(arr);
    return arr;
};

sortlastChar(arr);



















