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
