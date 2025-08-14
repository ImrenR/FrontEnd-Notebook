//** Notes */

console.log('**CREATE ELEMENT***')


const myli = document.createElement("li");
const textLi = document.createTextNode("GO");

myli.appendChild(textLi);


document.querySelector("ul").appendChild(myli)