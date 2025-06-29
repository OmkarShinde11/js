let object1={
    name:'Omkar',
    city:'Mumbai',
    getIntro:function(){console.log(this.name+' from '+ this.city )}
}

let object2={
    name:'Aditya',
    // city:'Pune'
};

// object2.__proto__=object1;

Object.setPrototypeOf(object2,object1);  // here inherit the properties of object1 into object2
// Object.setPrototypeOf(object which inherit the properties of other object,object which have thier properties and which give the properties to other object)

console.log(object2.city);
// console.log(object1.city)