console.log("Hi from index.js")

//* with default export
// import sayHi, { timeOfStudy } from "./myModules"
//or
import sayHi,{ // 1. you can change the name of sayHi as Osman doesnt matter
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
console.log(sayHi);

sayHi(); //1.