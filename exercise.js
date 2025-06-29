// Objects.
let obj = {
    name: 'Omkar',
    City: 'Mumbai',
    State: ''
}
// How to iterate over a JavaScript object
for (let i in obj) {
    console.log(obj[i]);
}
//Find the length of a JavaScript object
function findLength(obj) {
    return Object.keys(obj).length;
}

console.log(findLength(obj));

// How to remove a key from JavaScript object
// Note in javascript object have key and value and key alternative name is property
function remove(obj) {
    for (let i in obj) {
        if (obj[i] == '') delete obj[i];
    }
    return Object.keys(obj);
};
// alternative way 

let filteredObj = Object.keys(obj).filter(el => el != 'State');
console.log(filteredObj);
console.log(remove(obj));

// How to add an object to an array in JavaScript
let arr = [1, 2, 3];
let obj2 = { random: 'randomText' };
// arr.push(obj2); 
arr = [...arr, obj2]; //using rest operator.
console.log(arr);

// How to create an object from the given key-value pairs using JavaScript

// basic way
let firstKey = 0;
let firstKeyValue = "GeeksforGeeks";
let secondKey = 1;
let secondKeyValue = "Hello JavaScript";
let thirdKey = 2;
let thirdKeyValue = "Hello React";

let object = {};
object[firstKey] = firstKeyValue;
object[secondKey] = secondKeyValue;
object[thirdKey] = thirdKeyValue;
console.log(object);

// using custom function
const keys = [0, 1, 2];
const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];

function createObj() {
    let obj = {};
    values.forEach((el, index) => {
        obj[keys[index]] = el;
    })
    return obj;
};

console.log(createObj());

// Converting a Map to an Object

const map = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const mapobj = Object.fromEntries(map);
console.log(mapobj);

// How to rename object key in JavaScript
let oldObj = {
    'oldKey': 'random'
};

let newKeyObj = Object.assign({}, { newKey: oldObj['oldKey'] });
console.log(newKeyObj);

//How to convert JS object to JSON string in jQuery/JavaScript
console.log(JSON.stringify(obj));

// add proprty using object.assign
let object_new = {
    name: 'Omkar'
}

let updatedObj = Object.assign(object_new, { 'City': 'Mumbai' });
console.log(updatedObj);

// How To get a key of object by it's value.

function findKey(obj, value) {
    let key = '';
    for (let i in obj) {
        if (obj[i] == value) {
            key = i;
        }
    }
    return key;
}
console.log(findKey(obj, 'Omkar'));

// alternative Way 
function searchKey(obj, value) {
    return Object.keys(obj).find(el => obj[el] == value);
}
console.log(searchKey(obj, 'Omkar'));

// How to modify an object’s property in an array of objects in JavaScript

const a1 = [
    { a: '1', b: '2' },
    { c: '2', d: '4' },
    { c: '2', d: '4' },
    { a: '1', b: '2' }
];

function removeduplicateObj(a) {
    let arr = [];
    return a.filter(el => {
        let s = JSON.stringify(el);
        if (!arr.includes(s)) {
            arr.push(s);
            return true;
        }
        return false
    })
}
console.log(removeduplicateObj(a1));

// Convert an array to an object in JavaScript
let objArr = [1, 2, 3, 4];
let objRock = {};
objArr.forEach((el) => {
    objRock[el] = el;
})
console.log(objRock);

// using Object.assign
let asObj = Object.assign({}, objArr);
console.log(asObj);

//How to push an object into another object in JavaScript
let obj_1 = { name: 'Omkar' };
let obj_2 = { city: 'Mumbai' };
let mergObj = Object.assign(obj_1, obj_2);
console.log(mergObj);

// How to push an array into the object in JavaScript
let stateArr = ['Mahashatra', 'UP', 'Kashmir'];
let modObj = Object.assign(mergObj, { state: stateArr });
console.log(modObj);


//How to group objects in an array based on a common property into an array of arrays in JavaScript
let groupedArr = [
    { category: 'fruit', name: 'Apple' },
    { category: 'fruit', name: 'Banana' },
    { category: 'vegetable', name: 'Carrot' },
    { category: 'vegetable', name: 'Spinach' },
    { category: 'grain', name: 'Rice' }
];
function groupedObjects(arr) {
    let catArr = [];
    let outerArray = [];
    arr.forEach(el => {
        if (!catArr.includes(el.category)) catArr.push(el.category);
    });
    catArr.forEach((el) => {
        let result = arr.filter(ele => ele.category == el);
        outerArray.push(result);
    })

    return outerArray;
};
console.log(groupedObjects(groupedArr));


// How to compare arrays of objects in JavaScript
let arrObj1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

let arrObj2 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
let arrObj3 = [
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
];

function compareArrObj(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};

console.log(compareArrObj(arrObj1, arrObj3));

// How to sort an array of objects by property values

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);
console.log(items);

let convertObj = {
    id: 1,
    name: 'Alice',
    age: 25
};

//How to convert an object to an array of key-value pairs in JavaScript
function convertArray(obj) {
    let result = [];
    for (let i in obj) {
        result.push([i, obj[i]]);
    }
    return result;
}
console.log(convertArray(convertObj));

// How to append an object as a key-value in an existing object in JavaScript

let Object1 = {
    Name: "Poojitha",
    Age: 20,
};

let Object2 = {
    Occupation: "Content Writer",
};

Object.assign(Object1, Object2);
console.log(Object1);

// How to get the class name of an object in JavaScript
class Person{
    constructor(){
    }

    getClassName(){
        return this.constructor.name;
    }
}

let className= new Person();
console.log(className.getClassName());

// How to swap key and value of JSON element using JavaScript
let objKey={name:'Omkar',age:23,gender:'Male'};

function swapObj(obj){
    let result={};
    for(let i in obj){
        result[obj[i]]=i;
    }
    return result;
}
console.log(swapObj(objKey));

// How to clone a object

let cloneObj=Object.assign({},objKey);
console.log(cloneObj);

// How to get the last item of JavaScript object
function lastItemObj(obj){
    let key=Object.keys(obj)
    key=key[key.length-1];
    return {[key]:obj[key]};
}
console.log(lastItemObj(objKey));

function sumOfTwo(arr,target){
    let obj={};
    let result=[];
    arr.forEach((el,index)=>{
        if(!obj.hasOwnProperty(target-el)){
            obj[el]=index;
        }
        else{
            result=[obj[target-el],index];
        }
    });
    console.log(result);
    return result;
}
sumOfTwo([2,7,11,15],9);
sumOfTwo([3,2,4],6);
sumOfTwo([3,3],6);


// You are given a 0-indexed string array words.

// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:

// isPrefixAndSuffix(str1, str2) returns true if str1 is both a 
// prefix
//  and a 
// suffix
//  of str2, and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.

// Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.

 

// Example 1:

// Input: words = ["a","aba","ababa","aa"]
// Output: 4
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
// i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
// i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
// i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
// Therefore, the answer is 4.
// Example 2:

// Input: words = ["pa","papa","ma","mama"]
// Output: 2
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("pa", "papa") is true.
// i = 2 and j = 3 because isPrefixAndSuffix("ma", "mama") is true.
// Therefore, the answer is 2.  
// Example 3:

// Input: words = ["abab","ab"]
// Output: 0
// Explanation: In this example, the only valid index pair is i = 0 and j = 1, and isPrefixAndSuffix("abab", "ab") is false.
// Therefore, the answer is 0.

function compareString(words){
    let count=0;
    for(let i=0;i<words.length;i++){
        if(words[i]==undefined) break;
        for(let j=i;j<words.length;j++){
            if(words[j+1]==undefined) break;
            if(isPrefixSuffix(words[i],words[j+1]))count++;
        }
    }
    console.log(count);
    return count;
}

function isPrefixSuffix(outer,inner){
    if(inner.startsWith(outer) && inner.endsWith(outer)) return true;
    return false;
}

compareString(["a","aba","ababa","aa"]);
compareString(["pa","papa","ma","mama"]);
compareString(["abab","ab"]);


// string.indexOf()
function strMatch(arr){
    let result=[];
    let duplicate=[];
    for(let i=0;i<arr.length;i++){
        duplicate.push(arr[i]);
        for(let j=0;j<arr.length;j++){
            if(!duplicate.includes(arr[j])){
                if(arr[j].indexOf(arr[i])!=-1){
                    if(!result.includes(arr[i]))result.push(arr[i]);
                }
            }
        }
        duplicate=[];
    }
    console.log(result);
    return result;
}
strMatch(["mass","as","hero","superhero"]);
strMatch(["leetcode","et","code"]);
strMatch(["blue","green","bu"]);
strMatch(["leetcoder","leetcode","od","hamlet","am"])


function ShiftLetter(str,arr){
    let chars=str.split('');  // here i split the string because string are immutable and arrays are mutable
    arr.forEach((inner)=>{
        if(inner[2]==0){
            for(let i=inner[0];i<=inner[1];i++){
                let charCode=chars[i].charCodeAt(0)-1;
                if(chars[i]=='a'){
                    chars[i]='z';
                    
                }else{
                    chars[i]=String.fromCharCode(charCode);
                }
            }
        }
        else{
            for(let i=inner[0];i<=inner[1];i++){
                let charCode=chars[i].charCodeAt(0)+1;
                if(chars[i]=='z'){
                    chars[i]='a';

                }else{
                    chars[i]=String.fromCharCode(charCode);
                }
            }
        }
    })
    console.log(chars.join(''));
    return chars.join('')
}
ShiftLetter('abc',[[0,1,0],[1,2,1],[0,2,1]]);
ShiftLetter('dztz',[[0,0,0],[1,1,1]]);


// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

 

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.
function countPrefix(arr,str){
    let counter=0;
    arr.forEach((ele)=>{
        // if(ele.startsWith(str))counter++;
        if(ele.substr(0,str.length)==str)counter++
    })
    console.log(counter);
    return counter;
}

countPrefix(["pay","attention","practice","attend"],'at');
countPrefix(["leetcode","win","loops","success"],'code');


// Find median of an array (check array is odd or even base on that find out median)
function median(arr1,arr2){
    let result=[...arr1,...arr2].sort((a,b)=>a-b);
    let median;
    console.log(result);
    if(result.length%2!==0){
        median=result[Math.floor(result.length/2)];
    }
    else{
        median=(result[(Math.floor(result.length/2)-1)]+result[Math.floor(result.length/2)])/2;
    }
    console.log(median)
    return median
}

median([1,3],[2]);
median([1,2],[3,4]);

// You are given two string arrays words1 and words2.

// A string b is a subset of string a if every letter in b occurs in a including multiplicity.

// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.

// Return an array of all the universal strings in words1. You may return the answer in any order.

 

// Example 1:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
// Output: ["apple","google","leetcode"]
function findSubset(arr1,arr2){
    let str=arr2.join('');
    let result=[];
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]);
        for(let j=0;j<str.length;j++){
            if(arr1[i].includes(str[j])){
                if(!result.includes(arr1[i]))
                result.push(arr1[i]);
            }
            else{
                result.pop(arr1[i]);
                break;
            }
        }
    }
    console.log(result);
    return result
}




function findAdvanceSubset(arr1,arr2){
    // find arr2 max freq
    let result=[];
    const maxFreq={};
    for(let i of arr2){
        const freqEachWord=getFreq(i);
        for(let j in freqEachWord){
            maxFreq[j]=Math.max(maxFreq[j]||0 ,freqEachWord[j]);
        }
    }
    console.log(maxFreq);

    // find freq of each word in arr1

    for(let current of arr1){
        const freqCurrEachWord=getFreq(current);
        result.push(current);
        // console.log(freqCurrEachWord);

        // here loop on maxFreq and check with freqCurrEachWord 
        for(let char in maxFreq){
            if((freqCurrEachWord[char]|| 0) < maxFreq[char]){
                result.pop(current);
                break;
            }
        }
    }
    console.log(result);
    return result;
}

function getFreq(word){
    let freq={};
    for(let i of word){
        freq[i]=(freq[i] || 0)+1
    }
    return freq;
}

findSubset(["amazon","apple","facebook","google","leetcode"], ["e","o"]);
findSubset(["amazon","apple","facebook","google","leetcode"], ["l","e"]);
findSubset(["amazon","apple","facebook","google","leetcode"], ["lo",'eo']);
findAdvanceSubset(["amazon","apple","facebook","google","leetcode"], ["e","oo"])



function largest(arr){
    arr=arr.map(String);
    arr.sort((a,b)=>a+b > b+a ? -1:1);
    if(arr[0]==0) return "0";
    return arr.join('');
}
largest([3, 30, 34, 5, 9]);
largest(["0","0"]);



// Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.
// Example 1:
// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
// Example 2:

// Input: s = "leetcode", k = 3
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.
// Example 3:

// Input: s = "true", k = 4
// Output: true
// Explanation: The only possible solution is to put each character in a separate string.
function kString(str,k){
    let freq={};
    let oddCount=0;
    for(let s of str){
        freq[s]=(freq[s] || 0)+1
    };
    for(let i in freq){
        if(freq[i]%2!==0)oddCount++
    }

    if(k>str.length) return false;
    if(oddCount>k) return false;
    return true;
}
kString('annabelle',2);
kString('leetcode',3);
kString('true',4);
