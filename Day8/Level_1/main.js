//1
const dog = {
  name: "Dolar",
  legs: 4,
  color: "Brown",
  bark: ["woofwoof"],

  getDogInfo: function () {
    return `${this.name},  ${this.color}, ${this.legs}, ${this.bark}, ${this.breed}`
  }
  
};

console.log(dog.name);
console.log(dog.color);
console.log(dog.legs);
console.log(dog.bark);

dog.breed='Indie';

//**-- */
const copyDog = Object.assign({}, dog)
console.log(copyDog)

