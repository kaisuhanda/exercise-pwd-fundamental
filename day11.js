let word = 'AAZ'
word = word.toLowerCase()
let wordArr = []
let result = 0
let sum1 = 0
let sum2 = 0

for(let i = 0; i < word.length; i++){
    letter = word.charAt(i)
    wordArr.push(letter)
}
for(let i = 0; i < wordArr.length -1; i++){
    sum1 = sum1 + (letterToNumber(wordArr[i]) * Math.pow(26, wordArr.length - 1 - i))
}
sum2 = letterToNumber(wordArr[wordArr.length - 1])
result = sum1 + sum2

console.log(result);
console.log(sum2);
console.log(sum1);

function letterToNumber(letter){
    let letterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    for(let i = 0; i < wordArr.length; i++){
        if(letter === 'a'){
            letterPlace = letterNum[0]
        } else if(letter === 'b'){
            letterPlace = letterNum[1]
            
        } else if(letter === 'c'){
            letterPlace = letterNum[2]
            
        } else if(letter === 'd'){
            letterPlace = letterNum[3]
            
        } else if(letter === 'e'){
            letterPlace = letterNum[4]
            
        } else if(letter === 'f'){
            letterPlace = letterNum[5]
            
        } else if(letter === 'g'){
            letterPlace = letterNum[6]
            
        } else if(letter === 'h'){
            letterPlace = letterNum[7]
            
        } else if(letter === 'i'){
            letterPlace = letterNum[8]
            
        } else if(letter === 'j'){
            letterPlace = letterNum[9]
            
        } else if(letter === 'k'){
            letterPlace = letterNum[10]
            
        } else if(letter === 'l'){
            letterPlace = letterNum[11]
            
        } else if(letter === 'm'){
            letterPlace = letterNum[12]
            
        } else if(letter === 'n'){
            letterPlace = letterNum[13]
            
        } else if(letter === 'o'){
            letterPlace = letterNum[14]
            
        } else if(letter === 'p'){
            letterPlace = letterNum[15]
            
        } else if(letter === 'q'){
            letterPlace = letterNum[16]
            
        } else if(letter === 'r'){
            letterPlace = letterNum[17]
            
        } else if(letter === 's'){
            letterPlace = letterNum[18]
            
        } else if(letter === 't'){
            letterPlace = letterNum[19]
            
        } else if(letter === 'u'){
            letterPlace = letterNum[20]
            
        } else if(letter === 'v'){
            letterPlace = letterNum[21]
            
        } else if(letter === 'w'){
            letterPlace = letterNum[22]
            
        } else if(letter === 'x'){
            letterPlace = letterNum[23]
            
        } else if(letter === 'y'){
            letterPlace = letterNum[24]

        } else if(letter === 'z'){
            letterPlace = letterNum[25]
        } 
    }
    return letterPlace
}


//2. 
let inputArr = [2, 1, 2, 1, 4, 5, 4, 4]
let oddOneOut = []
let duplicates = []

for(let i = 0; i < inputArr.length; i++){
    for(let j = 0; j < inputArr.length; j++){
        if(i !== j && inputArr[i] === inputArr[j]){
            duplicates.push(inputArr[i])
        }
    }
}

inputArr = inputArr.sort(function(a, b){
    return a - b
})

duplicates = duplicates.sort(function(a, b){
    return a - b
})

for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i] !== duplicates[i]){
        oddOneOut.push(inputArr[i])
    } else {
        oddOneOut = []
    }
}

console.log(oddOneOut);

//3. 
let str1 = 'abcb'
let str2 = 'bcab'
let anagram = ''

if(str1.length === str2.length){
str1 = str1.split('')
str2 = str2.split('')
str1.sort()
str2.sort()

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i]){
            anagram = 'Anagram'
        } else {
            anagram = 'Not Anagram'
        }
    }
}

console.log(anagram);

//4. 
let n = 20
let combinations = 0
let combinationsArr = []

combinationsArr[0] = 1
combinationsArr[1] = 2

for(let i = 2; i < n; i++){
    combinationsArr[i] = combinationsArr[i - 1] + combinationsArr[i - 2]
}
combinations = combinationsArr[combinationsArr.length - 1]

console.log(combinations);
