//1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  //1*
  /** 
  const userWithMaxSkills = users => Object.entries(users)
  .reduce((res, [username, data]) => {
      if(data.skills.length > res.maxSkills){
        return {
          maxSkills: data.skills.length,
          user: {
            [username]: data
          }
        }
      }
      return res
  }, 
   { 
    maxSkills: -1,
    user: undefined
   }
  ).user
  console.log(userWithMaxSkills(users))

  //1**
  const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);
  
  console.log(result);
  */

 //2

const userWithFiftyPlusPoints= Object.values(users).filter((user) => user.points>=50)

console.log(userWithFiftyPlusPoints);

//3
const mernStack= Object.values(users).filter((user) => user.skills.includes ('React'));
console.log(mernStack);

//4
const keys = Object.keys(users)
console.log(keys);

//5
const values= Object.values(users);
console.log(users);

//6
const newObject= Object.assign({},users);
console.log(newObject);

//7