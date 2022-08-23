//3
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
countries.forEach((element) => console.log(element));

//4
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((element) => console.log(element));

//5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((element) => console.log(element));

//6
countriesToUpperCase = countries.map((countries) => countries.toUpperCase());
console.log(countriesToUpperCase);

//7
countriesLength = countries.map((countries) => countries.length);
console.log(countriesLength);

//8
const numSquare = numbers.map((num) => num * num);
console.log(numSquare);

//9
const nameToUpperCase = names.map((names) => names.toUpperCase());
console.log(nameToUpperCase);

//10
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const correspondingPrice = products.map((item) => {
  const container = {};
  container[item.product] = item.price;
  return container;
});
console.log(correspondingPrice);

//10
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);

console.log(countriesContainingLand);

//12
const CountriesWithSixChar = countries.filter(
  (country) => country.length === 6
);
console.log(CountriesWithSixChar);

//13
const CountriesWithSixPlusChar = countries.filter(
  (country) => country.length >= 6
);
console.log(CountriesWithSixPlusChar);

//14

//15

//17
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//18
const northEuropeanCountries = countries.reduce((acc, cur) => acc + cur);
console.log(northEuropeanCountries, " are North European Countries");

//19

//20
const checkNames = names.some((names) => names.length > 7);
console.log(checkNames);

//21
const checkCountryNames = countries.every(
  (country) => countries.includes("land") == true
);
console.log(checkCountryNames);

//22
const firstCountryWithSixChar = countries.find(
  (countries) => countries.length == 6
);
console.log(firstCountryWithSixChar);

//23
const res = countries.findIndex((countries) => {
  countries.length === 6;
  return countries;
});
console.log(res);

//24
const result = countries.findIndex(countries=> countries==='Norway')
console.log(result);

//25
const rs = countries.findIndex(countries=> countries==='Russia')
console.log(rs);

result = countries.reduce(function (countries, val, index) {
  var comma = countries.length ? " and " : "";
  return countries + comma + val;
});
console.log(result);