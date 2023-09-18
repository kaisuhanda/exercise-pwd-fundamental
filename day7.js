//1. 
let student1 = {
    grade: 9,
    name: 'a',
}
let student2 = {
    name: 'b',
    grade: 9,
    age: 14
}

console.log(Object.keys(student1));
function getProperties(student){
    attributes = Object.keys(student)
    let result = ''
    for(const key of attributes){
        result = result + key + ' '
    }
    return result
}
console.log(getProperties(student1));
function compare(callback, obj1, obj2){
    if(callback(obj1) === callback(obj2)){
        return true
    } else {
        return false
    }
}

console.log(compare(getProperties, student1, student2));

//2. 
let objA = {
    a : 1,
    b : 2
}
let objB = {
    a : 1,
    c : 3
}

let duplicates = []

function toArray(obj){
    return Object.keys(obj).map(function(key){
        return key, obj[key];
    });
}

console.log(toArray(objA));
console.log(toArray(objA));

function intersect(callback, obj1, obj2){
    arr1 = callback(obj1)
    arr2 = callback(obj2)
    for(let i = 0; i < Object.keys(obj1).length; i++){
        for(let j = 0; j < Object.keys(obj2).length; j++){
            if(arr1[i] === arr2[i] && i !== j){
                duplicates.push(arr1[i])
            }
        }
    }
    return duplicates
}

console.log(intersect(toArray, objA, objB));

//3. 
let senikersku = [
    { brand: 'Nike', model: 'AF1', color: 'white' },
    { brand: 'Adidas', model: 'Yeezy', color: 'black' },
    { brand: 'Nike', model: 'Jordan', color: 'red' }
];

let luxeculture = [
    { brand: 'Nike', model: 'AF1', color: 'white' },
    { brand: 'Adidas', model: 'Yeezy', color: 'black' },
    { brand: 'Nike', model: 'AirMax', color: 'brown' }
];

function removeDuplicates(arr1, arr2) {
    let combined = arr1.concat(arr2);
    let noDuplicates = [];

    for (const obj of combined) {
        if (!isDuplicate(noDuplicates, obj)) {
            noDuplicates.push(obj);
        }
    }
    return noDuplicates;
}

function isDuplicate(arrayname, check) {
    for (const obj of arrayname) {
        if (sameObject(obj, check)) {
            return true;
        }
    }
    return false;
}

function sameObject(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log(removeDuplicates(senikersku, luxeculture));

//4. 


