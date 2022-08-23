//2
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

console.log(countries.sort());

//3
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(webTechs.sort());

console.log(mernStack.sort());

//4
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesWithLand);

//5
lngth = 0;
 let longest;
for (i = 0; i < countries.length; i++) {
  if (countries[i].length > lngth) {
    lngth = countries[i].length;
    longest = countries[i];
  }
}
console.log(longest);

//6
const countriesToFirstFourChar= countries.map((country) =>country.slice(0,4))
console.log(countriesToFirstFourChar);

//7
const countriesMoreThanTwoCHar=countries.filter((country) =>country.length > 2);
console.log(countriesMoreThanTwoCHar);

//8
const reverseCountries= countries.map((country) => country.split('').reverse().join(''));
console.log(reverseCountries);

//9 
