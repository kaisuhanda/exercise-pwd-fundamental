//1. 
n = 9
socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function totalPairs(n, ar){
arrays = []
noDuplicates = []
pairs = []
let total = 0

ar = ar.sort(function(a, b){
    return a - b
})
for(let i = 0; i < n; i++){
    if(!noDuplicates.includes(ar[i])){
        noDuplicates.push(ar[i])
    }
}
pairs = noDuplicates.map(function(value){
    return []
})
for(let value of ar){
    let i = noDuplicates.indexOf(value)
    pairs[i].push(value)
}
for(let i = 0; i < pairs.length; i++){
    total = total + Math.floor(pairs[i].length / 2)
}
return total
}
console.log(totalPairs(n, socks));

//2. 
n = 6
let k = 3
let ar = [1, 3, 2, 6, 1, 2]


function totalSums(n, k, r){
let sum = 0
let sums = []
for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        let sum = ar[i] + ar[j]
        if(sum % k === 0){
            sums.push(sum)
        }
    }
}
return sums.length
}

console.log(totalSums(n, k, ar));

//3. 

