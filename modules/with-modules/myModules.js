console.log("Hi from myModules.js");

//! named export

export const timeOfStudy = 40;
export function sumThem(s1, s2) {
  return s1 + s2;
}

let counter = 5;

const increase = (x) => (counter += x);

const decrease = (x) => (counter -= x);

const myName = "imren";

export { increase, decrease, myName };

//* default export
function sayHi() {
  console.log("Hi");
}

export default sayHi;
