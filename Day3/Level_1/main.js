// Declaring different variables of different data types
let firstName = 'Abinash'
let lastName = 'Samal'
let country = 'India'
let city = 'Dhenkanal'
let age = 30
let isMarried = false
let year =2022

console.log(firstName, lastName, country, city, age, isMarried)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof age)
console.log(typeof country)
console.log(typeof city)
console.log(typeof isMarried)
console.log(typeof year)

console.log(10==10)

console.log(parseInt(9.8)==10)

let x;
x=1
x='1'
x==[1]
console.log(1=='1')
console.log(1==[1])
console.log('1'==[1])

console.log(1==='1')
console.log(1===[1])
console.log('1'===[1])

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')

let py='python'
let jar='jargon'
console.log(py.length==jar.length)

console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4===4))

const now = new Date()
console.log(now.getFullYear())

console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())


const allSeconds= Date.now()
console.log(allSeconds)