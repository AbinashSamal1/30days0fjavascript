let b=20
let h=10

const areaOfTriangle=0.5*b*h
console.log(areaOfTriangle)

let sideA=5
let sideB=4
let sideC=3
const trianglePerimeter=sideA+sideB+sideC
console.log(trianglePerimeter)

let l=30
let w=20
const rectangleArea=l*w
const perimeterRectangle= 2*(l+w)
console.log(rectangleArea,perimeterRectangle)

const pi=3.14
let r= 5
const circleArea=pi*r*r
const circleCircumference=2*pi*r
console.log(circleArea,circleCircumference)

let x=10
const yIntercept=2*x-2
console.log(yIntercept)

let y1=2
y2=2
x1=6
x2=10
const m=(y2-y1)*(x2-x1)
console.log(m)

let xA= -3
const y= xA*xA + 6*xA + 9
console.log(y)

//9
let ratePerHour=28
hours=40
const weeklyEarnig= ratePerHour * hours
console.log(weeklyEarnig)

//11

let firstName='Abinash';
let secondName='Samal';

if (firstName.length > secondName.length) {
    console.log("Your first name Abinash longer than family name Samal.");
}

//12
let myAge = 250;
let yourAge = 25;
console.log(
  myAge > yourAge
    ? `I am ${myAge} years older than you.`
    : `I am ${myAge} years younger than you`
);

//13
let birthyear = prompt("enter birthyear");
now = new Date();
let age = now.getFullYear() - birthyear;
console.log(age);

console.log(
  age > 18
    ? `You are ${age}. You are old enough to drive`
    : `You are ${age}. You will be allowed to drive after ${18 - age} years.`
);

//14
let numberofyears = prompt("enter numberofyears");
let day = numberofyears * 365;
let hour = day * 24;
 minutes = hour * 60;
let seconds = minutes * 60;
console.log(seconds);
console.log(`You lived ${seconds} seconds.`);

//15
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours1 = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${year}-${month}-${date} ${hours1}:${minutes}`)

console.log(`${date}-${month}-${year} ${hours1}:${minutes}`)

console.log(`${date}/${month}/${year} ${hours1}:${minutes}`)


