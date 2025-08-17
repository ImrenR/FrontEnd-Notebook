const gelirInput = document.querySelector("#gelirInput")
const ekle = document.querySelector("#ekle")
const ekleFormu = document.querySelector("#ekleFormu")
const gelirGoster= document.querySelector("#gelirGoster")
// let gelirler =localStorage.getItem("gelirim") ||0; // 5. islem : 4. islemde girilen inputlarin gorunmesi icin getItem deriz
// girilen inputlar maalesef 5. islemde yan yana string olarak gelir 9006004000 gibi bunu onlemek ve toplanarak geldigini gormek icin JSON.parse diyelim 
let gelirler =JSON.parse(localStorage.getItem("gelirim")) ||0;
ekleFormu.addEventListener('submit', (e)=>{
  e.preventDefault()
  // gelirler = Number(gelirInput.value) // 1. islem = burada sadece girilen ilk deger gorunur ama toplanmaz
  gelirler =  gelirler+Number(gelirInput.value) // 2. islem = gelirleri toplariz
  gelirGoster.textContent = gelirler  // 3. islem = 2.islemden sonra income table da gelirler toplanarak gelmis olur
  localStorage.setItem ("gelirim", gelirler) // 4.islem girilen verileri kaydetmek istiyorsak ve application da bu verileri gormek istiyorsak localStorage setItem deriz
// 4. islemden sonra application da girilen butun incomelar toplanarak gelir ve gorunur ama girilen inputlar gorunmez
})





