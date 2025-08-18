//*******************. ASYNC- AWAIT *********************** */



//? Async-await ECMAScript 2017. ile JS diline eklemistir.
//? ASlinda promise yapisinin syntax olarak basitlestirilmis halidir.

//! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async hale getirmek icin fonksiyon keyword nun onune async keyword u eklenir.
//* Bir async fonksiyon icerisinde await keyword u ile yapilan istegin cevabinin beklenmesi saglanir.
//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkroon kod yazmayi mumkun kilar.
//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun 
//* durdurulmasi saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi
//* devam eder.

//! JS try anahtar kelimesi kod blogundaki kodlari calisma zamaninda test etmek icin kullanilir
//! JS finally anahtar kelimesi hata olusmasi veya olusmamasi durumunda (her durumda) calisacak kodlari 
//! yazdirmak icin kullanilir.

//*************************************************************************************************************************************************************************************************/
//* ASAGIDAKI ORNEGIN ACIKLAMASI     : 

//? 1- getData () fonksiyonumuz var asagida ve onu fonksiyon sonunda cagirdik, biliyoruz ki fonksiyon cagirilmadan(invoke)
//? calismaz!
 
//? 2- Database den verigetirmemiz gerekiyor ne yapariz ? : 
//! fetch ile verileri cekeriz bu sirada diger kodlar beklemesin diye onune await deriz
//! await in syntax i neydi async await ti. fonksiyona bunun bir asenkron oldugunu async yi=> () onune getirirek belirtiriz.
 
//? 3- verilere bekle dedik, fonksiyona kafan karismasin bu async yazarak belirttik. ondan sonra
//? verileri jsona cevirerek onlari bir dizi ve obje olarak bastiririz ama bunlarin 
//? onune de await demek zorundayiz : await res.json()

//? 4- getData fonskiyonun icerisine verileri dondermek icin bir fonksiyon cagiririz 
//?  ekranaBastir (data) bu cagirilan fonksiyonu onun altinda ayri olarak belirtip verileri dondeririz

//? 5- ekranaBastir(data) fonksiyonunda data icerisine gireriz ( fetch ile cagirdigimiz veriler)
//? jsonla diziye cevirlen veriler array metodlariyla kolaylikla donderilebilir
//! data.forEach ya da data.filter or map ile icine girer bir suslu acariz
//* hmtl sayfasi bizim kokumuz oradan bakariz hangi elemente bastiracaksak onu seceriz
//* const abc = document.querySelector("section").innerHTML += `` diyerek ( + nin onemi
//* gelen ilk veri gitmesin ard arda bastirsin sirayla diyedir)
//* bakctickten sonra icinde nasil bir gorunum saglamak istiyorsak h1 img h2 elementlerini
//* yazar ${} yardimiyla ve verideki degerleri bilerek data.forEach e verilen function ismiyle
//* ${item.image} html elementlerinin icine bastirmis oluruz


const defaultImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMona_Lisa_%2528Prado%2529&psig=AOvVaw2EPWZy8IWsnfBsniHVS_vh&ust=1755626753567000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjNy9f5lI8DFQAAAAAdAAAAABAE"
const getData=async()=>{ // await derken fonksiyon onune async oldugunu belirtmek gerekir

 const rest = await fetch("https://api.tvmaze.com/search/shows?q=girls"); // fetch ile verleri cek. verileri cekerken sure gecebilir, beklerken bizi bekletme kendin bekle demek icin await demek lazim basina

const data = await rest.json(); // array geldi bu sekilde

ekranaBastir(data)

}

getData()

const ekranaBastir = (data)=>{
 data.forEach((item)=>{
 document.querySelector("section").innerHTML +=`

  <h1>${item.show.name}</h1

  <img src=${item.show.image?.medium || defaultImage} alt="show" />
  
  `
 })
}