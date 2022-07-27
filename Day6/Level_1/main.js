//1
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 10);

//2
i=0;
while (i < 10) {
    i += 1;
    console.log(i);
  }
//3  
let n = 20
for (let i=0; i<= n; i++){
  console.log(i)
}

//4
n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str += "#";
  }
  str += "\n";
}
console.log(str);

//5
for(let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

//6
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
  console.log(`${i} * ${i} * ${i}= ${i * i * i}`)
}

//7
for(i=0; i<=100; i++){
 
  if(i % 2 == 0){
    console.log(i);
  }
}

//8
for(i=0; i<=100; i++){
  // let's divide the value by 2
  // if the remainder is zero then it's an even number
 
  if(i % 2 == 1){
    console.log(i);
  }
}

//9
const number = parseInt(prompt('Enter a positive Number: '));

sum = 0, i = 1;

// looping from i = 1 to number
while(i <= number) {
    sum += i;
    i++;
}

console.log('The sum of numbers:', sum);

//10

function isEven(n) {
  return n % 2 == 0;
}

function findSum(no) {
  let sum = 0;
  let i = 1;

  while (i <= no) {
    if (isEven(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(findSum(100));

//**
function isOdd(n) {
  return Boolean(n % 2);
}

function findSum(no) {
  let sum = 0;

  for ( i = 0; i < no; i++) {
    if (isOdd(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(findSum(100));

//13
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

//15
console.log(generateString(6))

//14
arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
