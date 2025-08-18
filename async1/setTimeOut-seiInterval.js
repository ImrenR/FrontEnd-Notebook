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

setTimeout(()=>{
  console.log("first")
},3000); // yazi 3 sn sonra gelir consola