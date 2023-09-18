//1. 
Grades = [73, 67, 38, 33]

function RoundOff(originalGrades){
    modifiedGrades = []
    for(let i = 0; i < originalGrades.length; i++){
        if(originalGrades[i] >= 38){
            if(originalGrades[i] % 5 >= 3){
                modifiedGrades.push(Math.ceil(originalGrades[i] / 5) * 5)
            } else {
                modifiedGrades.push(originalGrades[i])
            }
        } else {
            modifiedGrades.push(originalGrades[i])
        }
    }
    return modifiedGrades
}

console.log(RoundOff(Grades));


//2. 
let time = '12:00:00 AM'

function TimeConversion(s){
    let newTime = '';
    let FinalTime = '';
    
    if (s.slice(-2) === 'PM' && s.substring(0, 2) !== '12') {
        newTime = parseInt(s.substring(0, 2)) + 12;
    } else if (s.slice(-2) === 'AM' && s.substring(0, 2) === '12') {
        newTime = '00';
    } else {
        newTime = s.substring(0, 2);
    }
    FinalTime = newTime + s.substring(2, 8);
    
    return FinalTime;
}

console.log(TimeConversion(time));

//3. 
let abc = [3, 3, 2, 1, 3]
let allDuplicates = []
let duplicates = []

for(let i = 0; i < abc.length; i++){
    for(let j = 0; j < abc.length; j++){
        if(abc[i] === abc[j] && i !== j){
            console.log(abc[i]);
            allDuplicates.push(abc[i])
            break
        }
    }
}
console.log(allDuplicates);
for(let i = 0; i < allDuplicates.length; i++){
    for(let j = 0; j < allDuplicates.length; j++){
        if(allDuplicates[i] === allDuplicates[j] && i !== j){
            mostDuplicates = allDuplicates.splice(i, 1)
            console.log(mostDuplicates);
        }
    }
}
console.log(mostDuplicates);
for(let i = 0; i < abc.length; i++){
    if(abc[i] === mostDuplicates[0]){
        duplicates.push(abc[i])
    }
}
duplicates

//4. 
let input = 12

function Divisors(input){
let inputToString = input.toString()
let inputToArray = []
let result = []
let inputVar = ''
for(let i = 0; i < inputToString.length; i++){
    inputVar = inputToString.charAt(i)
    inputToArray.push(inputVar)
}
for(let i = 0; i < inputToArray.length; i++){
    if(input % inputToArray[i] === 0){
        result.push(inputToArray[i])
    }
}
return result.length
}

console.log(Divisors(input));


