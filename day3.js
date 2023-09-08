//1.
let result = ''
let hasil = ''
let answer = ''
let jawaban = ''
let akhire = ''
let input = 7
let limit = 20
for(let i = 1; i <= limit; i++){
    console.log(input * i);
    akhire = akhire + input + ' x ' + i + ' = ' + input * i + '\n  '
}
console.log(akhire);
//2. 
let word = 'malam'
let reverse = ''
let arraylength = word.length
console.log(arraylength);
for(let i = arraylength - 1; i > -1; i--){
    console.log(word.charAt(i));
    jawaban = jawaban + word.charAt(i)
}
console.log(jawaban);
if(word === jawaban){
    console.log("palindrome");
} else {
    console.log("not palindrome");
}
//3. 
let cm = 1
let km = cm / 1000
console.log(km + ' km');

//4. 
let money = 1000
let rp = 'Rp.' + money + ',00'
console.log(rp);

//5. 
let str = 'hello world'
let search = 'orl'
let cut = str.replace(search, '')
console.log(cut);

//6. 
str = 'benedict kai suhanda'
let uppercase = str.charAt(0).toUpperCase()
str = str.replace(str.charAt(0), uppercase);
for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' '){
        let isNowUpperCase = (str.charAt(i+1).toUpperCase())
        str = str.replace(str.charAt(i+1), isNowUpperCase)
    }
}
console.log(str);

//7. 
str = 'purwadhika'
reverse = ''
arraylength = str.length
console.log(arraylength);
for(let i = arraylength - 1; i > -1; i--){
    console.log(str.charAt(i));
    result = result + str.charAt(i)
}
console.log(result);

//8. 
function isUpperCase(a){
    return a == a.toUpperCase() && a != a.toLowerCase()
}
str = 'The QuiCk BrOwN Fox'
arraylength = str.length
console.log(arraylength);
let isNowUppercase, isNowLowerCase
for(let i = 0; i < arraylength; i++){
    if(isUpperCase(str.charAt(i))){
        str.charAt(i).toLowerCase
        console.log(str.charAt(i).toLowerCase());
        hasil = hasil + str.charAt(i).toLowerCase()
        
    } else {
        str.charAt(i).toUpperCase
        console.log(str.charAt(i).toUpperCase());
        hasil = hasil + str.charAt(i).toUpperCase()
    }
    console.log(str.charAt(i));
    
}
console.log(hasil);

//9.
let a = 9
let b = 6
let big = 0
if(a > b){
    big = a
} else {
    big = b
}
console.log(big);

//10. 
let x = 34
let y = 23
let z = 41
let biggest, middle, smallest
if(x > y && x > z){
    biggest = x
    if(y > z){
        middle = y
        smallest = z
    } else {
        middle = z
        smallest = y
    }
} else if (y > x && y > z){
    biggest = y
    if(x > z){
        middle = x
        smallest = z
    } else {
        middle = z
        smallest = x
    }
} else if(z > x && z > y){
    biggest = z
    if(x > y){
        middle = x
        smallest = y
    } else {
        middle = y
        smallest = z
    }
}
console.log(biggest, middle, smallest);

//11.
input = false
if(typeof input === 'string'){
    console.log('1');
} else if(typeof input === 'number'){
    console.log('2');
} else {
    console.log('3');
}

//12. 
let char = 'a'
str = 'an apple a day keeps the doctor away'
arraylength = str.length
for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === char){
        answer = str.replaceAll(char, '*')
    }
}
console.log(answer);
