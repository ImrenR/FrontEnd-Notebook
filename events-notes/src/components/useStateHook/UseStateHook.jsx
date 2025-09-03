//** HOOKS ************ */
//! Hooklar fonksiyonel componentler icerisinde stateler kullanmamiza olanak saglayan
//! ozel fonskyonlardir.
//! React 16.8 verisyonu ile gelmistir ve geldikten sonra Class-comp. lerin
//! kullanimi azalmistir.

//? React ta useState, useEffect ve useContext gibi bir cok
//? built-in Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkun

//** Hook Kullanim Kurallari :
//** 1. Ilk olarak import edilmelidir. import {useState} from "react";
//** 2. Hook lar ust seviyede tanimlanmalidir. Yani Hook lar bir
//** dongunun, kosul cumleciginin ve icice fonskiyonlarin icerisinde
//** kullanilmamalidir.
//** Hook' lar sadece React fonksiyonel componentlerin icerisinde cagrilmalidir.
//**  Normal JS fonksiyonlari icerisinde cagrilmamalidir.
//**  (Custom Hook lar icerisinde bir hook cagrilabilir)
//? https://react.dev/reference/react/hooks#state-hooks

import { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(1); //! setCounter bir ayarlayicidir
//? counter useState() ile 1 e tanimlanmistir. Degisiklikler de setCounter la yapilir
  const arttir = () => setCounter(counter + 1); // Boylelikle Dom a basmis olduk

  return (
    <div>
      <h2 className="text-center">USESTATE HOOK</h2>
      <h3> Count:{counter}</h3>
      <button className="btn btn-primary m-2" onClick={arttir}>
        
        Arttir
      </button>
           <button className="btn btn-primary m-2" onClick={()=>setCounter(counter-1)}>
            Azalt
           </button>
    </div>
  );
};

export default UseStateHook;
