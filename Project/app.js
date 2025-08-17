const gelirInput = document.querySelector("#gelirInput");
const ekle = document.querySelector("#ekle");
const ekleFormu = document.querySelector("#ekleFormu");
const gelirGoster = document.querySelector("#gelirGoster");
// let gelirler =localStorage.getItem("gelirim") ||0; // 5. islem : 4. islemde girilen inputlarin gorunmesi icin getItem deriz
// girilen inputlar maalesef 5. islemde yan yana string olarak gelir 9006004000 gibi bunu onlemek ve toplanarak geldigini gormek icin JSON.parse diyelim
let gelirler = JSON.parse(localStorage.getItem("gelirim")) || 0;
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  // gelirler = Number(gelirInput.value) // 1. islem = burada sadece girilen ilk deger gorunur ama toplanmaz
  gelirler = gelirler + Number(gelirInput.value); // 2. islem = gelirleri toplariz
  gelirGoster.textContent = gelirler; // 3. islem = 2.islemden sonra income table da gelirler toplanarak gelmis olur
  localStorage.setItem("gelirim", gelirler); // 4.islem girilen verileri kaydetmek istiyorsak ve application da bu verileri gormek istiyorsak localStorage setItem deriz
  // 4. islemden sonra application da girilen butun incomelar toplanarak gelir ve gorunur ama girilen inputlar gorunmez
});

//******************** EXPENSES FORM ********************************* */

const harcamaFormu = document.querySelector("#harcama-formu");
const tarih = document.querySelector("#tarih");
const miktar = document.querySelector("#miktar");
const harcamaAlani = document.querySelector("#harcamaAlani");
let harcamaListesi = JSON.parse(localStorage.getItem("harcamam")) || [];

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  const yeniHarcama = {
    tarih: tarih.value,
    miktar: Number(miktar.value), //! sayi verilerinde NUMBER i sakin unutma !!!
    information: harcamaAlani.textContent,
    id: new Date().getTime(), // benzersiz olmasi icin, bu ne icin gerekir , ilerde silmek icin id yi hemen bulabilmek icin
  };

  harcamaListesi.push(yeniHarcama);
  //  localStorage.setItem("harcamam",yeniHarcama) Yeni harcama ile locaStorage e gonderirsem ne olur : ?
  // Harcamam application da [object] seklinde cikar , objecti bunu kabul etmez
  // objeyi cevirebilemek icin stringe JSON.stringify kullanilmamiz lazim
  localStorage.setItem("harcamam", JSON.stringify(harcamaListesi));
  //! asagidakini engellemek icin yukarida bir array olusturuldu ve yeni gelenler pushlandi
  //localStorage.setItem("harcamam",JSON.stringify(yeniHarcama))
  // JSON.stringify ile de harcamam benim application da string seklinde gorundu
  // Ama burada girilen butun yeniu harcamalar bu sekilde depolanmaz. depolamak icin array a cevirip dondurmek gerekir
  //
});

