console.log("Hi from index.js")

//* with default export
import sayHi, { timeOfStudy } from "./myModules"

//* destructiong export
import { sumThem,increase,decrease,myName } from "./myModules"

console.log(sumThem(4,9));
console.log(timeOfStudy);
console.log(increase(5));
console.log(decrease(2)); 
console.log(myName)