//  Promise daha cok tercih edilir. Bir promise ile tamamlanabilir ya da bir sebeple (hata) iptal edilebilir.
// Bu durumlar then() ve catch () metotlari ile yakalanabilir.

//! then() catch () metotlari promise dondururler
//! Zincirleme (chain) olarak kullanilabilirler.


const person = {name: "Kagan", surname: "Bilir"};

new Promise ((resolve, reject)=>{
  //if databasenden  veriler duzgun geldiyse

  if(true) {
    // if (false)
    resolve(person);
  
  } else {
    reject (new Error("promise basarisiz"));
  }
})
.then((response)=> console.log(response))
.catch((error)=> console.log(error))