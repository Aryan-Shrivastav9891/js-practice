let name= 'aryan'
let repo=50

// console.log(name+repo);

console.log(`this is my strong ${name} and my repo count is ${repo} `);

const mygame=new String('aryan shrivastav')
console.log(mygame.__proto__)
console.log(mygame.length)
console.log(mygame.toUpperCase())
console.log(mygame.charAt(2))
console.log(mygame.indexOf('y'))

const newstring=mygame.substring(1,3)
console.log(newstring)

const url="http://hetesh.com/hetesh%20chodu";

console.log(url.replace('%20' , '-'))

console.log(mygame.split(' ' ));