//1. 
let result = ''
let n = 4
let counter = 1
for(let i = 1; i <= n; i++){
    for(let j = 0; j < i; j++){
        result = result + counter
        counter++
    }
    result = result + '\n' 

}
console.log(result);

//2.
function FizzBuzz(str) {
    return str.replace(str, 'FizzBuzz');
}
function Fizz(str) {
    return str.replace(str, 'Fizz');
}
function Buzz(str) {
    return str.replace(str, 'Buzz');
}
n = 20;
let stringI = '';
let hasil2 = '';

for (let i = 1; i <= n; i++) {
    stringI = i.toString();
    if (i % 3 === 0 && i % 5 === 0) {
        stringI = FizzBuzz(stringI);
    } else if (i % 3 === 0) {
        stringI = Fizz(stringI);
    } else if (i % 5 === 0) {
        stringI = Buzz(stringI);
    }
    hasil2 = hasil2 + ' ' + stringI;
}
console.log(hasil2);

//3.
let BMI, category
let height = 1.73
let weight = 70

function getBMI(height, weight){
    BMI = Math.floor(weight / Math.pow(height, 2))
    if(BMI < 18.5){
        category = 'underweight'
    } else if(BMI < 25){
        category = 'optimal'
    } else if(BMI < 30){
        category = 'overweight'
    } else if(BMI > 30){
        category = 'obese'
    }
    result = 'Your BMI is ' + BMI + ', you are ' + category
return result
}
console.log(getBMI(height, weight));

//4. 
let arr = [1, 5, 7, 13, 12, 20, 9, 30, 24, 2, 5, 4, 10, 8, 32, 53, 19]
let newarray = []
let size = arr.length
console.log(size);
for(let i = 0; i < size; i++){
    even(i)
    // if(arr[i] % 2 === 0){
    //     // arr.splice(i, 1)
    //     newarray.push(arr[i])
    } 
console.log(newarray);

function even(i){
    if(arr[i] % 2 === 0){
        // arr.splice(i, 1)
        newarray.push(arr[i])
    }
}
//5. 
let str = 'universitas ciputra surabaya'
arr = []
arr = splitarray(str)
console.log(arr);

function splitarray(str){
    return str.split(' ')
}
// for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) === ' '){
//         newstring = str.substring(0, i)
//         arr.push(' ' + newstring)
//         newstring = str.replace(newstring, '')
//     }
// }
// console.log(newstring);
// console.log(arr + ' ' +newstring);

//6. 
let hasil = ''
let stock = ''
let baju = [
    ['Jaket', 20, 150000],
    ['Kaos', 20, 75000],
    ['Celana', 5, 250000]
]
for(let i = 0; i < baju.length; i++){
    for(let j = 0; j < baju[i].length; j++){
        if(baju[i][1] < 10){
            stock = 'akan habis'
        } else {
            stock = 'cukup'
        }
    }
    hasil = hasil + baju[i][0] + ' harga ' + baju[i][2] + " stock " + stock + '\n'
}
console.log(hasil);

