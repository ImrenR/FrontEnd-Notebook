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

 
//? Chain yapisi

// fetch("https://api.github.com/users").then((res)=>res.json())
// javascript object notasyon da goster yani console log ta yazdirmada object array olarak goster

// fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri))
// jsona cevir dedim ondan sonra veriyi ekrana bastirdim ve 30 tane array icinde objectlerim gelmis oldu


//!console.log a bastirmak degil de divlere yazdirsin fonksiyonla dersek 
//!console.og yerine bir fonksiyon yazdik


fetch("https://api.github.com/users") // database e istek at
.then((res)=>res.json())             // sonra gelenlerin sadece Json kismini istiyorum yani dizi obje her neyse
.then((veri)=>ekranaBastir (veri));  // o dizi kismini al ve ekranaBastir funksiyonuna gonder
                                    // ekranaBastir metodu cagrilmis oldu.
const ekranaBastir=(data)=>{
  // console.log(data);

  data.forEach(({login,avatar_url,node_id})=>{
    document.querySelector("section").innerHTML += `
    
<h1>${login}</h1>
<img src=${avatar_url} width="300px"/>
<h3>${node_id}</h3>    
    
    `
  })
}

// data,res ve veri isimleri onemli degil tamami da ayni olabilir.

