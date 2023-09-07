//1.
let length = 10
let width = 9
let luas = length * width
console.log("area : " + luas);

//2.
let perimeter = (2 * length) + (2 * width)
console.log("perimeter" + perimeter);

//3.
let radius = 7
let area = Math.round(Math.PI * Math.pow(radius, 2))
let c = Math.round(2 * Math.PI * radius)
let d = radius * 2
console.log("area : " + area + ", circumference : "  + c + ", diameter : " + d);
//4. 
let angleA = 56
let angleB = 45
let angleC = 180 - angleA - angleB
console.log(angleC + " degrees")

//5. 
let date1 = new Date('2004-07-22')
let date2 = new Date('2023-09-05')
msDiff = date2 - date1
let daysDiff = Math.floor(msDiff / 86400000)
console.log('Difference : ' + daysDiff);

//6. 
let days = 366
let years = Math.floor(days/365)
let sisadays = days % 365
let months = Math.floor(sisadays/30)
let sisaDaysAkhir = sisadays - (months * 30)
console.log(years + " years, " + months + " months, " +  sisaDaysAkhir + " days");




