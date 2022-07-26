//1
console.log(countries);

console.log(webTechs);

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text);
console.log(text.split(" "));
words=text.split(" ");
console.log(words.length);

//3
const shoppingCart=['Milk', 'Coffee', 'Tea','Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

delete shoppingCart[4];
console.log(shoppingCart);
alert(shoppingCart);

let a=[1,2,3,4,5];
a.splice(2,1,33);
console.log(a);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);