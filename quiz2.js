//1.
let budget = 10
let keyboard = [3, 1]
let usb = [5, 2, 8]

function getMoney(keyboards, drives, b){
let combined = 0
let combinations = []

let keyboardSorted = keyboards.sort(function(a, b){
    return a - b
})
let usbSorted = drives.sort(function(a, b){
    return a - b
})

let combines = false

for(let i = 0; i < keyboardSorted.length; i++){
    for(let j = 0; j < usbSorted.length; j++){
        if(keyboardSorted[i] + usbSorted[j] <= b){
            combined = keyboardSorted[i] + usbSorted[j]
            combinations.push(combined)
            combines = true
        }
    } 
}

if(combines === false){
    combinations.push(-1)
}
let result = combinations.sort(function(a, b){
    return a - b
})
return result[result.length - 1]
}

console.log(getMoney(keyboard, usb, budget));

//2. 
let catA = 3
let catB = 2
let mouseC = 2

function catMouse(x, y, z){
let distanceA = Math.abs(z - x)
let distanceB = Math.abs(z - y)

if(distanceA !== distanceB){
    if(distanceA < distanceB){
        return 'Cat A'
    } else {
        return 'Cat B'
    }
} else {
    return 'Mouse C'
}
}

//3. 
let h = [1, 2, 3, 1, 2, 4, 1, 2, 1, 1, 4, 2, 3, 1, 3, 1, 1, 2, 4, 2, 1, 3, 4, 3, 2, 1]
let word = 'gilbert'

function rectangleArea(h, word){
let letters = []
let letter = 'a'
let letterHeight = 0
let result = 0
let heights = []
for(let i = 0; i < word.length; i++){
    letter = word.charAt(i)
    letters.push(letter)
    console.log(letter);
}
console.log(letters);
for(let i = 0; i < letters.length; i++){
    if(letters[i] === 'a'){
        letterHeight = h[0]
        heights.push(letterHeight)
    } else if(letters[i] === 'b'){
        letterHeight = h[1]
        heights.push(letterHeight)
    } else if(letters[i] === 'c'){
        letterHeight = h[2]
        heights.push(letterHeight)
    } else if(letters[i] === 'd'){
        letterHeight = h[3]
        heights.push(letterHeight)
    } else if(letters[i] === 'e'){
        letterHeight = h[4]
        heights.push(letterHeight)
    } else if(letters[i] === 'f'){
        letterHeight = h[5]
        heights.push(letterHeight)
    } else if(letters[i] === 'g'){
        letterHeight = h[6]
        heights.push(letterHeight)
    } else if(letters[i] === 'h'){
        letterHeight = h[7]
        heights.push(letterHeight)
    } else if(letters[i] === 'i'){
        letterHeight = h[8]
        heights.push(letterHeight)
    } else if(letters[i] === 'j'){
        letterHeight = h[9]
        heights.push(letterHeight)
    } else if(letters[i] === 'k'){
        letterHeight = h[10]
        heights.push(letterHeight)
    } else if(letters[i] === 'l'){
        letterHeight = h[11]
        heights.push(letterHeight)
    } else if(letters[i] === 'm'){
        letterHeight = h[12]
        heights.push(letterHeight)
    } else if(letters[i] === 'n'){
        letterHeight = h[13]
        heights.push(letterHeight)
    } else if(letters[i] === 'o'){
        letterHeight = h[14]
        heights.push(letterHeight)
    } else if(letters[i] === 'p'){
        letterHeight = h[15]
        heights.push(letterHeight)
    } else if(letters[i] === 'q'){
        letterHeight = h[16]
        heights.push(letterHeight)
    } else if(letters[i] === 'r'){
        letterHeight = h[17]
        heights.push(letterHeight)
    } else if(letters[i] === 's'){
        letterHeight = h[18]
        heights.push(letterHeight)
    } else if(letters[i] === 't'){
        letterHeight = h[19]
        heights.push(letterHeight)
    } else if(letters[i] === 'u'){
        letterHeight = h[20]
        heights.push(letterHeight)
    } else if(letters[i] === 'v'){
        letterHeight = h[21]
        heights.push(letterHeight)
    } else if(letters[i] === 'w'){
        letterHeight = h[22]
        heights.push(letterHeight)
    } else if(letters[i] === 'x'){
        letterHeight = h[23]
        heights.push(letterHeight)
    } else if(letters[i] === 'y'){
        letterHeight = h[24]
        heights.push(letterHeight)
    } else if(letters[i] === 'z'){
        letterHeight = h[25]
        heights.push(letterHeight)
    } 
}

heights.sort(function(a, b){
    return a - b
})

let rHeight = heights[heights.length - 1]
let rWidth = word.length
let rArea = rWidth * rHeight

return rArea
}

console.log(rectangleArea(h, word));


//4. 
function timeToWords(h, m) {
    let hWord, mWord
    if (m === 0) {
        hWord = hNumberToWord(h) + " o' clock"
    } else if (m === 15) {
        hWord = "quarter past " + hNumberToWord(h)
    } else if (m === 30) {
        hWord = "half past " + hNumberToWord(h)
    } else if (m === 45) {
        hWord = "quarter to " + hNumberToWord(h + 1)
    } else if (m === 59) {
        hWord = "one minute to " + hNumberToWord(h + 1)
    } else if (m === 1) {
        hWord = "one minute past " + hNumberToWord(h)
    } else if (m < 30) {
        hWord = mNumberToWord(m) + " minutes past " + hNumberToWord(h)
    } else {
        hWord = mNumberToWord(60 - m) + " minutes to " + hNumberToWord(h + 1)
    }
    return hWord
}

function hNumberToWord(h) {
    const hourNumber = [
        "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve"
    ]
    return hourNumber[h - 1]
}

function mNumberToWord(m) {
    const minuteNames = [
        "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
        "twenty"
    ]

    if (m <= 20) {
        return minuteNames[m - 1]
    } else {
        return "twenty " + minuteNames[m - 21]
    }
}






