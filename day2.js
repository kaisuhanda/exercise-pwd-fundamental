//1.
let celcius = 18
let fahrenheit = (9/5)*celcius + 32
console.log(fahrenheit);

//2. 
let number = 123
let type = ''
if(number % 2 == 0){
    type = 'even'
} else {
    type = 'odd'
}
console.log(type);

//3. 
let n = 11
type = ''
if(n === 0 || n === 1 || n === 2){
    type = 'prime'
} else {
for(let i = 2; i < n; i++){
    let modulus = n % i
    if(modulus === 0){
        type = 'not prime'
        break;
    } else {
        type = 'prime'
    }
}
}
console.log(type);

//4. 
number = 0
n = 4
for(let i = 0; i <= n; i++){
    number += i
    console.log(number);
}
console.log(number);

//5. 
number = 1
n = 9
for(let i = 1; i <= n; i++){
    number *= i
}
console.log(number);

//6. 
n = 3
let n0 = 1
let n1 = 1
let fn
for(let i = 2; i < n; i++){
    fn = n0 + n1
    n0 = n1
    n1 = fn
}
console.log(fn);

//7. 
let result = ''
n = 9
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(j % 2 === 0){
            result = result + '# '
        } 
        else {
            result = result + '* '
        }
    }
    result = result + '\n'
} 
console.log(result);

//8. 
result = ''
n = 5
for(let i = 0; i < n; i++){
    for(let j = 0; j < i; j++){
        result = result + '0'
    }
    result = result + '1 \n' 

}
console.log(result);