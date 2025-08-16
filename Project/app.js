const gelirInput = document.querySelector("#gelirInput")
const ekle = document.querySelector("#ekle")
const ekleFormu = document.querySelector("#ekleFormu")
const gelirGoster = document.querySelector("#gelirGoster")
ekleFormu.addEventListener("submit", (e)=>{
  e.preventDefault()
  gelirler =gelirler + Number(gelirInput.value)
  gelirGoster.textContent=gelirler
})