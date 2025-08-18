// *****************************************************
                  // FETCH API
// ****************************************************
 
//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arama birimidir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//! JS ortaminda en cok kullanilan Asenkron islem basinda gelmektedir.
//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//! throw ile hata firlatirsak kodumuz o satirda durur.
//! kodumuzu durdurmak istemezsek diger sayfadaki kodlari kullaniriz.

// fetch("https://api.github.com/users").then((res)=>res.json())
// javascript object notasyon da goster yani console log ta yazdirmada object array olarak goster

fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri))
// jsona cevir dedim ondan sonra veriyi ekrana bastirdim ve 30 tane array icinde objectlerim gelmis oldu


