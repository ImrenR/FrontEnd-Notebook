const gelirInput = document.querySelector("#gelirInput");
const ekle = document.querySelector("#ekle");
const ekleFormu = document.querySelector("#ekleFormu");
 const gelirGoster = document.querySelector("#gelirGoster");

// let gelirler =sessionStorage.getItem("gelirim") ||0; // 5. islem : 4. islemde girilen inputlarin gorunmesi icin getItem deriz
// girilen inputlar maalesef 5. islemde yan yana string olarak gelir 9006004000 gibi bunu onlemek ve toplanarak geldigini gormek icin JSON.parse diyelim
let gelirler = JSON.parse(sessionStorage.getItem("gelirim")) || 0;

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  // gelirler = Number(gelirInput.value) // 1. islem = burada sadece girilen ilk deger gorunur ama toplanmaz
  gelirler = gelirler + Number(gelirInput.value); // 2. islem = gelirleri toplariz
  // 3. islem = 2.islemden sonra income table da gelirler toplanarak gelmis olur
  sessionStorage.setItem("gelirim", gelirler); // 4.islem girilen verileri kaydetmek istiyorsak ve application da bu verileri gormek istiyorsak sessionStorage setItem deriz
  // 4. islemden sonra application da girilen butun incomelar toplanarak gelir ve gorunur ama girilen inputlar gorunmez
});

//******************** EXPENSES FORM ********************************* */
const tarih = document.querySelector("#tarih");
const miktar = document.querySelector("#miktar");
const harcamaAlani = document.querySelector("#harcamaAlani");
const harcamaFormu = document.querySelector("#harcama-formu");
const harcamaTablosu = document.querySelector("#harcamaTablosu");
let harcamaListesi = JSON.parse(sessionStorage.getItem("harcamam")) || [];

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();

  const yeniHarcama = {
    tarih: tarih.value,
    miktar: Number(miktar.value), //! sayi verilerinde NUMBER i sakin unutma !!!
    aciklama: harcamaAlani.value,
    id: new Date().getTime(), // benzersiz olmasi icin, bu ne icin gerekir , ilerde silmek icin id yi hemen bulabilmek icin
  };

  harcamaListesi.push(yeniHarcama); //  sessionStorage.setItem("harcamam",yeniHarcama) Yeni harcama ile locaStorage e gonderirsem ne olur : ? Harcamam application da [object] seklinde cikar , objecti bunu kabul etmez objeyi cevirebilemek icin stringe JSON.stringify kullanilmamiz lazim
  sessionStorage.setItem("harcamam", JSON.stringify(harcamaListesi));
   harcamalariTablodaGoster(yeniHarcama);
   hesaplaGoster() // cunku burda degisiklik olmasi lazim
  });
  
//! asagidakini engellemek icin yukarida bir array olusturuldu ve yeni gelenler pushlandi
  //sessionStorage.setItem("harcamam",JSON.stringify(yeniHarcama))
  // JSON.stringify ile de harcamam benim application da string seklinde gorundu
  // Ama burada girilen butun yeniu harcamalar bu sekilde depolanmaz. depolamak icin array a cevirip dondurmek gerekir
  //
harcamaListesi.forEach((harcama)=>{
  harcamalariTablodaGoster(harcama)
})

//!*************************** EXPENSES FOR EXPLANATION ****************//
// eger bir dongu olacak ve guncellenecek bir tablo oalcaksa function kullanmamiz gerek

function harcamalariTablodaGoster({id,miktar,tarih,aciklama}) {
  harcamaTablosu.innerHTML += `
  <tr>
              <th scope="row">${aciklama}</th>
              <td>${miktar}</td>
              <td>${tarih}</td>
              <td><i class="fa-solid fa-trash-can text-danger"
              style="cursor:pointer" id= ${id} ></i></td>
            </tr>`;
}
//! ********** SIlME. ISLEMI ***********************/

document.querySelectorAll(".fa-trash-can").forEach((item)=>{
  item.onclick=()=>{
    item.parentElement.parentElement.remove()
    harcamaListesi=harcamaListesi.filter((eleman)=> eleman.id != item.id)
    sessionStorage.setItem("harcamam", JSON.stringify(harcamaListesi))
  }
  hesaplaGoster() //! Ayrica silme isleminin oldugu yerde de yine hesaplaGoster() yapmak gerekiyor cunku silme islemi var guncellemek icin
})


//! ******************** SON LISTE *******************/
const harcamaGoster = document.querySelector("#harcamaGoster")
const kalanGoster = document.querySelector("#kalanGoster")

function hesaplaGoster (){
  const harcamaToplami = harcamaListesi.reduce((toplam,item)=> toplam + item, 0)
  const gelir = JSON.parse(localStorage.getItem("gelirim"))
 gelirGoster.textContent = gelirler; 
 harcamaGoster.textContent= harcamaToplami;
 kalanGoster.textContent= gelirler - harcamaToplami;

}
hesaplaGoster()