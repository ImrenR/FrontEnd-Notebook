// Loops- Do while //

// do { yaoilacak islemler
// } while (sart)

let i=1
do{
  console.log(i)
  i++
} while (i<=10)

  let devam= ""

  do{
    let ders=prompt('Dersin adini giriniz:')
    let vize=+prompt('Vize notu gir:')
    let final=+prompt('Final tonunu giriniz:')
    let ortalama= vize*0.4 + final*0.6;

    ortalama>=50 ?
  `${ders} dersinden gectiniz`  :
   `${ders} dersinden kaldiniz`
  
} while (devam=== "E")