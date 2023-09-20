//1. 
let student1 = {
    name: 'a',
    grade: 9,
}
let student2 = {
    name: 'a',
    grade: 9,
}

function objectEqual(obj1, obj2){
    objKeys1 = Object.keys(obj1)
    objKeys2 = Object.keys(obj2)

    if(objKeys1.length !== objKeys2.length){
        return false
    } else {
        for(let i = 0; i < objKeys1.length; i++){
            if(objKeys1[i] !== objKeys2[i]){
                return false
            }
            if(obj1[objKeys1[i]] !== obj2[objKeys2[i]]){
                return false
            }
        }
        return true
    }
}

console.log(objectEqual(student1, student2));

//3. 
let XIIA1 = [
    {name: 'Kai', age: 19, division: 'Science'},
    {name: 'Andrew', age: 18, divison: 'Science'},
    {name: 'Calvin', age: 18, division: 'Science'},
    {name: 'Max', age: 18, division: 'Social'}
]
let XIIS2 = [
    {name: 'Jason', age: 19, division: 'Social'},
    {name: 'Calvin', age: 21, division: 'Social'},
    {name: 'Max', age: 18, division: 'Social'}
]
let XII = XIIA1.concat(XIIS2)
let noDuplicates = []

for(let i = 0; i < XII.length; i++){
    let isDuplicate = false
    for(let j = 0; j < XII.length; j++){
        if(objectEqual(XII[i], XII[j]) && i !== j){
            isDuplicate = true
        }
    }
    if(isDuplicate === false){
        noDuplicates.push(XII[i])
    }
}

console.log(objectEqual(XIIA1[3], XIIS2[2]));
console.log(noDuplicates);
//2. 


// //2. 
// let objA = {
//     a : 1,
//     b : 2
// }
// let objB = {
//     a : 1,
//     c : 3
// }

// let duplicates = []

// function toArray(obj){
//     return Object.keys(obj).map(function(key){
//         return key, obj[key];
//     });
// }

// console.log(toArray(objA));
// console.log(toArray(objA));

// function intersect(callback, obj1, obj2){
//     arr1 = callback(obj1)
//     arr2 = callback(obj2)
//     for(let i = 0; i < Object.keys(obj1).length; i++){
//         for(let j = 0; j < Object.keys(obj2).length; j++){
//             if(arr1[i] === arr2[i] && i !== j){
//                 duplicates.push(arr1[i])
//             }
//         }
//     }
//     return duplicates
// }

// console.log(intersect(toArray, objA, objB));

// //3. 
// let senikersku = [
//     { brand: 'Nike', model: 'AF1', color: 'white' },
//     { brand: 'Adidas', model: 'Yeezy', color: 'black' },
//     { brand: 'Nike', model: 'Jordan', color: 'red' }
// ];

// let luxeculture = [
//     { brand: 'Nike', model: 'AF1', color: 'white' },
//     { brand: 'Adidas', model: 'Yeezy', color: 'black' },
//     { brand: 'Nike', model: 'AirMax', color: 'brown' }
// ];

// function removeDuplicates(arr1, arr2) {
//     let combined = arr1.concat(arr2);
//     let noDuplicates = [];

//     for (const obj of combined) {
//         if (!isDuplicate(noDuplicates, obj)) {
//             noDuplicates.push(obj);
//         }
//     }
//     return noDuplicates;
// }

// function isDuplicate(arrayname, check) {
//     for (const obj of arrayname) {
//         if (sameObject(obj, check)) {
//             return true;
//         }
//     }
//     return false;
// }

// function sameObject(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (const key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(removeDuplicates(senikersku, luxeculture));

// //4. 
// let arrOfObj = [
//     {a: 'b', c: 'd'},
//     {e: 'f', g: 'h'}
// ]

// for(let i = 0; i < arrOfObj.length; i++){
//     let obj = arrOfObj[i]
//     let keys = Object.keys(obj)
//     console.log(obj);
//     console.log(keys);
//     for(let j = 0; j < obj.length; j++){
//         let key = keys[j]
//         let value = obj[key]

//         delete obj[key]
//         obj[value] = key
//     }
// }

// console.log(Object.keys(arrOfObj[0]).length);
// console.log(arrOfObj.length);
// console.log(arrOfObj[0].a);
// console.log(arrOfObj);