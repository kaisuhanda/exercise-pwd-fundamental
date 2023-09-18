//1.
let arr = [10, 6, 13, 5]
let arr2 = [21, 78, 43, 18, 62]
function statistics(arrayname){
    let smallest = arrayname[0]
    let biggest = arrayname[0]
    let avg = 0

    for(let i = 0; i < arrayname.length ; i++){
        if(arrayname[i] <= smallest){
            smallest = arrayname[i]
        }
        if(arrayname[i] >= biggest){
            biggest = arrayname[i]
        }
    }
    for(let i = 0; i < arrayname.length; i++){
        avg = (avg + arrayname[i])
    }

    avg = avg/arrayname.length

    return 'Smallest : ' + smallest + '\n' + 'Biggest : ' + biggest + '\n' + 'Average : ' + avg
}

console.log(statistics(arr));

//2. 
let string = ''
let last = ''
let names = ['Kai', 'Gilbert', 'Axel', 'Kezia', 'Eliz', 'Jesselyn']
let numbers = [1, 2, 3, 4, 5, 6]
function sentence(arrayname){
    last = 'and ' + arrayname[arrayname.length - 1]
    console.log(last);
    for(let i = 0; i < arrayname.length - 1; i++){
        string = string + arrayname[i] + ', '
    } 
    return string + last
}
console.log(sentence(numbers));

//3. 
let str = 'universitas ciputra surabaya'
arr = []

function splitarray(str){
    return str.split(' ')
}

console.log(splitarray(str));

//4. 
let numbers1 = [31, 24, 19]
let numbers2 = [17, 8, 26]
let addition = []


function add(arr1, arr2){
    if(numbers1.length === numbers2.length){
        for(let i = 0; i < numbers1.length; i++){
            addition[i] = numbers1[i] + numbers2[i]
        }
    } else {
        console.log('failed. different array length');
    }
    return addition
}

console.log(add(numbers1, numbers2));

//5. 
let words = ['Kai', 'Selena', 'Kelsey']
let input = 'Aileen'
let isDuplicate = false

function checkDuplicate(arrayname, input){
    for(let i = 0; i < arrayname.length; i++){
        if(arrayname[i] === input){
            isDuplicate = true
        } 
    }
        if(isDuplicate === true){
            console.log("failed. input already exists");
        } else {
            arrayname.push(input)
        }
        return arrayname
}
console.log(checkDuplicate(words, input));

//6. 
let oddEven = [21, 43, 24, 18, 9]
let evenOnly = []

function even(arrayname){
    for(let i = 0; i < arrayname.length; i++){
        if(arrayname[i] % 2 === 0){
            evenOnly.push(arrayname[i])
        }
    }
    return evenOnly
}
console.log(even(oddEven));

//7. 
let integers = '5 10 36 24 56 8 18 31'
let limit = 5

function limitArray(arrayname, limit){
let newArr = splitarray(arrayname)
let newerArr = []
for(let i = 0; i < limit; i++){
    newerArr.push(newArr[i])
}
return newerArr
}

console.log(limitArray(integers, limit));

//8. 
let array1 = ['a', 'b', 'c']
let array2 = ['x', 'y', 'z']
function combineArray(arr1, arr2){
    let combined = arr1.concat(arr2)
    return combined
}

console.log(combineArray(array1, array2));

//9. 
let abc = ['a', 'b', 'c', 'b', 'd', 'b']

function countDuplicates(arrayname){
let noDuplicate = []
let duplicate = []
let mostDuplicates = []
let repetitions = 0
let mostRepetitions = 0
let totalRemovals = 0
for(let i = 0; i < arrayname.length; i++){
    repetitions = 0
        for(let j = 0; j < arrayname.length; j++){
        if(arrayname[i] === arrayname[j] && i !== j){
            repetitions++
        }
    }
    if(repetitions > mostRepetitions){
        mostRepetitions = repetitions
        mostDuplicates = [arrayname[i]]
    } else if(repetitions === mostRepetitions && mostDuplicates.indexOf(arrayname[i]) === -1){
        mostDuplicates.push(arrayname[i])
    }
}
totalRemovals = arrayname.length - (mostRepetitions + 1)
return mostDuplicates
}

console.log(countDuplicates(abc));
 
//10.
let ArrA = ['a', 'b', 'c', 'd']
let ArrB = ['a', 'b', 'c', 'e']

function findDifferences(arr1, arr2){
    let differences = []
    if(arr1 === arr2){
        console.log('no differences');
    } else {
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                differences.push(arr1[i])
                differences.push(arr2[i])
            }
        }
    }
    return differences
}
console.log(findDifferences(ArrA, ArrB));

//11. 
//SKIP

//12. 
let digits = [1, 2, 3, 3, 4, 5]

function secondSmallest(arrayname){
    let noDuplicates = []
    for(let i = 0; i < digits.length; i++){
        if(!noDuplicates.includes(digits[i])){
            noDuplicates.push(digits[i])
        }
    }
    let sorted = noDuplicates.sort()
    let second = sorted[1]
    return second
}

console.log(secondSmallest(digits));

//13. 
let mixed = ['a', false, 10, 'pwd', 21, undefined, 30]

function sumNumbers(arrayname){
let sum = 0
for(let i = 0; i < mixed.length; i++){
    if(typeof(mixed[i]) === 'number'){
        sum = sum + mixed[i]
    }
}
return sum
}

console.log(sumNumbers(mixed));

//14. 
let mixedArray = [1, 2, 2, 2, 3, 3, 4, 5]
function duplicateSum(arrayname){
let duplicates = []
let total = 0
for(let i = 0; i < arrayname.length; i++){
    for(let j = 0; j < arrayname.length; j++){
        if(arrayname[i] === arrayname[j] && i !== j){
            duplicates.push(arrayname[i])
            break
        }
    }
}
for(let i = 0; i < duplicates.length; i++){
    total = total + duplicates[i]
}
return total
}
console.log(duplicateSum(mixedArray));

//15. 
let you = 'paper'
let AI = ''

function rockPaperScissors(you){
let AInumber = Math.floor(Math.random(2))
console.log(AInumber);

if(AInumber === 0){
    AI = 'rock'
} 
if(AInumber === 1){
    AI = 'paper'
}
if(AInumber === 2){
    AI = 'scissors'
}

if(you === 'rock'){
    if(AI === 'scissors'){
        return 'you win'
    } else if(AI === 'paper'){
        return 'you lose'
    } else if(AI === 'rock'){
        return 'tie'
    }
} else if(you === 'paper'){
    if(AI === 'rock'){
        return 'you win'
    } else if(AI === 'scissors'){
        return 'you lose'
    } else if(AI === 'paper'){
        return 'tie'
    }
} else if(you === 'scissors'){
    if(AI === 'paper'){
        return 'you win'
    } else if(AI === 'rock'){
        return 'you lose'
    } else if(AI === 'scissors'){
        return 'tie'
    }
}
}

console.log(rockPaperScissors('rock'));