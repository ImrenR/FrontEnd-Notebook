// Silinidirin hacimini bulunuz

let h = 6;
let r = 8;

const hacim = (h, r) => Math.floor(Math.PI * r * r * h);
console.log(hacim(h, r));

// Verilen sayiya kadar asal sayilari bulma

const asal = (num) => {
  if (num < 2) {
    console.log("Bu sayiya kadar bir asal sayi bulunamadi");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (i === 2) {
      console.log(i);
    }else {
      let entry=true // flag kullanimi
      for (let j=2; j<i; j++){
        if (i%j===0){
          entry=false;
          break
        }
      }
      entry ? console.log(i) : "";
    }
  }
}
asal(10)
