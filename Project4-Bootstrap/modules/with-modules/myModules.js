console.log("Hi from myModules.js");

//! named export

export const timeOfStudy = 40; // ana sayanin kullanabilmesi icin export etmek onemli
export function sumThem(s1, s2) {
  return s1 + s2;
}

//************************************ */
let counter = 5;

const increase = (x) => (counter += x);

const decrease = (x) => (counter -= x);

const myName = "imren";

export { increase, decrease, myName };

//* Butun sayfanin tamimini export etme yontemi sadece bir kez yapilabilir

function sayHi() {
  console.log("Hi");
}

export default sayHi; // bu sekilde export edince butun sayfa export olur increase,myName
// tek tek export etmek zorunda degilsin
