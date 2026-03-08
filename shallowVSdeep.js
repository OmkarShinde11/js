// Shallow Copy:
// A shallow copy creates a new object but only one level deep — it copies references of nested objects, not their actual values.

// so because of reference if i change value inside nested object then it change that nested object which present into original object.

let obj={name:'omkar',address:{location:'Mumbai'}};

let shallow={...obj};
shallow.name='Sid';
console.log(obj.name);
console.log(shallow.name);

shallow.address.location='Pune';
console.log(obj.address.location);
console.log(shallow.address.location);

// Deep Copy
// A deep copy creates a completely new object and recursively copies all nested objects and arrays, so the new object is fully independent from the original.

// let obj={name:'Omkar',address:{location:'Mumbai'}};
// let deep=JSON.parse(JSON.stringify(obj));
// console.log(deep);

// deep.name='Sid';
// console.log(obj.name);
// console.log(deep.name);

// deep.address.location='Pune';
// console.log(obj.address.location);
// console.log(deep.address.location);