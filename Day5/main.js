//1
let arr = [];
console.log(arr);

//2
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

//3
console.log("No. of numbers:", numbers.length);

//4
let names = ["Abi", "Sam", "Raj", "Tuhin", "Mahendra"];
let firstIndex = names[0];
let lastIndex = names.length - 1;
let lastName = names[lastIndex];

let mid = Math.floor(names.length / 2);
let middleIndex = names[mid];

console.log(firstIndex);
console.log(lastName);

console.log(middleIndex);

//5
mixedDataType = [7, 1, "Neel", "Abi", 3.14, 0.88];
console.log(mixedDataType.length);

//6
let itCompanies = ["Facebook", "Google", "Apple", "IBM", "Oracle", "Amazon"];

//7
console.log(itCompanies);

//8
console.log("No. of Companies:", itCompanies.length);

//9
firstIndex = itCompanies[0];
console.log(firstIndex);

lastIndex = itCompanies.length - 1;
lastCompany = itCompanies[lastIndex];
console.log(lastCompany);

middleCompany = Math.floor(itCompanies.length / 2);
middleIndex = itCompanies[middleCompany];
console.log(middleIndex);

//10
console.log(itCompanies.slice(0, itCompanies.length));

let i = 0;

//using while loop
while (i < itCompanies.length) {
  console.log(itCompanies[i]);
  i++;
}
//using for lopp
for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

//11
 let companies=itCompanies.toString();
companies=companies.toUpperCase();
console.log(companies.split(','))

//12
let sentence='Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies'
sentence=sentence.split()
console.log(sentence)

//13
company=companies.includes('Jio');
if (company==false) {
    console.log('not found')
}

//14

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

//17
itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
console.log(itCompanies.slice(0,3));

//18
console.log(itCompanies.splice(itCompanies.length-3,itCompanies.length))

//19
