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

//** GETELEMENTBYCLASSNAME */

const myClassName = document.getElementsByClassName("list");
console.log(myClassName);

myClassName[0].innerText = "HTML DERSLERI";


document.getElementsByClassName("item-list")[0].style.color = 'blue';


//** QUERYSELECTOR */

//! Query selector ile id, class , tag secilebilir. 
//! Bu akista gordugu ilk elementi secer.

//? id ile secmek icin 

console.log(document.querySelector('#btn'));

//? class ile secmek icin 

console.log(document.querySelector('.item-list'))

//? tag ile secmek icin 

console.log(document.querySelector('li')) // ilk gordugu elementi secer

const myItem = document.querySelector('main section.item-list h3')

//** QUERYSELECTORALL */

//! Bir nodelist dondurur. Nodelist dahili olarak bir foreach barindirir.