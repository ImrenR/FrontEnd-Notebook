//!  Important notes : 
//?  Asenkron Proglamlama, bir alt gorevin uygulamanin asil Threadinden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel 
//? programlama teknigidir. Bu alt gorev tamamlandiginda(basariyla ya basarisiz)
//? asil thread bu konuda bilgilendirir. Asenkron proglamlama, uygulamalarin
//? performansinin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir
//?  Ozellikle bir API den veya veritabanindan veri cekme, Giric/Cikis
//? islemleri, dosya okuma/yazma islemleri gibi zaman tuketen kodlarda ASYNC 
//? Proglamlama kullanilmasi cok onemlidir.

// Asenkron (1 seferlik calisan) setTimeOut

// setTimeout(()=>{
//   console.log("first")
// },3000); // yazi 3 sn sonra gelir consola
 
// console.log("Hello") // Once hello yu print eder ardindan 3 sn sonra first gelir

// setTimeout(()=>{
//   console.log("Imren")
// },2000) // ikinci yazilacak olan burasidir 2sn oldugu icin


//! Notes : 
//*Asenkron( setInterval, clearInterval) belli araliklarla 
// durulana kadar devam eder. mesela 1 dk da doviz kurunu guncellemek
// icin kullanilabilir.
//******************************************************** */


//? setInterval non-blocking (kod burada takili kalmaz alttaki kodlarda calisir)

let sayac= 0


const inter= setInterval(()=>{

  console.log(++sayac)

  if(sayac == 7){
    clearInterval(inter)
  }
},1000)