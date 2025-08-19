console.log("Hi from index.js")

//* with default export
// import sayHi, { timeOfStudy } from "./myModules"
//or
import sayHi,{
increase,
decrease,
sumThem as topla,
myName,
timeOfStudy
} from "./myModules";



console.log(topla(4,9));
console.log(timeOfStudy);
console.log(increase(5));
console.log(decrease(2)); 
console.log(myName);
console.log(sayHi)