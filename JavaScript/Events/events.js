//** DOM EVENTS */

//? NOTES : 
//? Dom sayesinde JS, HTML olaylari ile etkilesim halinde olabilir. 
//? Ornegin kullanici bir HTML elemanina tikladiginda ( bir olay meydana geldiginde) bir jS kodu calistirilabilir.
//? HTML olaylari icin bir cok ornek verilebilir. 
//! Kullanici fareyi tikladiginda (onclick)
//! Bir web sayfasi yuklendiginde (onload)
//! Fare bir elemanin uzerine geldiginde (onmouseover)
//? Ayrildiginda (onmouseout)
//! Bir elemanin icerigi degistiginde (onchange)
//! bir HTML formu gonderildiginde (onsubmit)

//** DOM EVENTLERI KULLANMA YONTEMI */

//? HTML sayfasinda herhangi bir ekleme yapmaksizin sadece js ile olaylari kontrol ederek 

//* Ornek : 
 
document.querySelector('.header').onmouseover = function () {
  document.querySelector(".header").style.color = 'blue';
};

document.querySelector(".header").onmouseout = function () {
  document.querySelector('.header').style.color = "black";
}

//? addEventListener() metodu ile javascript kodunda Olay tanimlayarak

//! Syntax : element.addEventListener(olay,funcktion, useCapture)

//* Ornek : 

document.querySelector(".header").addEventListener('mouseover',function (){
document.querySelector(".header").style.color = 'blue';
});

document.querySelector(".header").addEventListener('mouseout',function (){
document.querySelector(".header").style.color = 'black';
});

//** EVENT TANIMLAMALARI */

//* mouse h2 elementinin uzerine geldiginde tetiklenir

h2.onmouseover = function(){
  h2.classList.add('red','center')
}

//*mouse h2 elementinden ayrildiginda tetiklenir

h2.onmouseout = function (){
  h2.classList.remove ('red', 'center')
}