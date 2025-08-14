const myInput = document.getElementById("btn");
console.log(myInput);

myInput.value = 'SUBMIT';

// GETELEMENTBYTAGNAME //

const allLi = document.getElementsByTagName('li');

console.log(allLi); // HTML Collection

console.log(allLi[0].textContent);

allLi[2].textContent = "javascript";

//! array-like grubunda direkt array methodlari burada kullanilamaz.
//? Array like gruplarini nasil array a cevirebiliriz. spread le

//? SPREAD :

const arrAllLi = [...allLi];
console.log(arrAllLi)

arrAllLi.forEach((li)=> li.style.color = 'red')


//? Array.from ()

console.log(Array.from(allLi))
Array.from(allLi).map((li)=>li.style.background= "pink")
//!------------------------------------------------------------------------------!//