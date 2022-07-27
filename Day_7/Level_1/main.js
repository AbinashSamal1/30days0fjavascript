//1
function printFullName() {
  let firstName = "Abinash";
  let lastName = "Samal";
  let space = " ";
  let fullName = firstName + space + lastName;

  console.log(fullName);
}
printFullName();

//2
function printMyName() {
  let firstName = "Abi";
  let lastName = "Sam";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printMyName());

//3
function addTwoNumbers() {
  let numOne = 21;
  let numTwo = 23;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

//4
function areaOfRectangle() {
  let l = 20;
  let b = 30;
  let area = l * b;
  console.log(area);
}
areaOfRectangle();

//5
function perimeterOfRectangle() {
  let l = 25;
  let b = 20;
  let perimeter = 2 * (l + b);
  console.log(perimeter);
}
perimeterOfRectangle();

//6
function volumeOfRect() {
  let l = 30;
  let b = 25;
  let h = 10;
  let volume = l * b * h;
  console.log(volume);
}
volumeOfRect();

//7
function areaOFCIrcle() {
  const PI = 3.14;
  let r = 10;
  let areaOFCIrcle = PI * r * r;

  return areaOFCIrcle;
}
console.log(areaOFCIrcle());

//8
function circumference() {
  const PI = 3.14;
  let r = 10;
  let circumference = 2 * PI * r;
  return circumference;
}
console.log(circumference());

//9
function density() {
  let mass = 30;
  let volume = 60;
  let density = mass / volume;
  return density;
}
console.log(density());

//10

function speed() {
  distanceTravelled = 300;
  timeTaken = 120;
  let speed = distanceTravelled / timeTaken;
  return speed;
}
console.log(speed());

//11
function weight() {
  let mass = 98;
  const gravity = 9.8;
  let weight = mass / gravity;
  return weight;
}
console.log(weight());

//12
function convertCelciusToFahrenheit() {
  let oC = 37;
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelciusToFahrenheit());

//13

let h = prompt("Enter Height");
let w = prompt("Enter Weight");

let bmi = (w / (h * h)) * 100 * 100;
console.log(bmi);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal Weight");
} else if (bmi > 24.9 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

//14
  let month=prompt('enter Month')

  if(month>=1 && month<=3){
    console.log('Spring')
  }
  else if(month>3 && month <=5){
    console.log('Summer')
  }
  else if(month>5 && month <=8){
    console.log('Autumn')
  }
  else if(month>8 && month <=12){
    console.log('Winter')
  }

  //15
  function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(0,10,5));
console.log(max_of_three(0,-10,-2));
