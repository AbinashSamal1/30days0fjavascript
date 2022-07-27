//1
function makeid(length) {
  result = "";
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  charactersLength = characters.length;
  for (i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(makeid(5));
console.log(makeid(15));

//*
let r = (Math.random() + 1).toString(36).substring(7);
console.log(r);

//3
function randomRGB() {
  x = Math.floor(Math.random() * 256);
  y = Math.floor(Math.random() * 256);
  z = Math.floor(Math.random() * 256);
  RGBColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(RGBColor);
}

randomRGB();

//2
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

console.log(random_hex_color_code());

//4
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
console.log(countries);

//5
countries.map((c) => c.length);

//7
let coun = countries.find((a) => a.includes("land"));
console.log(coun);

//8
coun = countries.find((a) => a.includes("ia"));
console.log(coun);

//9
longest = countries.reduce(function (a, b) {
  return a.length > b.length ? a : b;
}, "");
console.log(longest);

//10
minLength = 4;
maxLength = 6;
res = countries.filter(function (countries) {
  if (countries.length > minLength && countries.length < maxLength) {
    return countries;
  }
});

console.log(res);

//11
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
longest = webTechs.reduce(function (a, b) {
  return a.length > b.length ? a : b;
}, "");
console.log(longest);

//12

//13
mernStack = "mernStack";
mern = mernStack.substring(0, 4);
accr=mern.toLocaleUpperCase();
console.log(accr);



//14
  iterate = webTechs.length;
  for (var i = 0; i < iterate; i++) {
      console.log(webTechs[i]);
  }
//15
fruits = ["Banana", "Orange", "Mango", "Lemon"];
for (i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  console.log(fullStack.join())