//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componentler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code , her renderda çalışır */
//*      Kodlar
//! });

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code, değişkene bağlı olarak update */
//*      Kodlar
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);
import { useState, useEffect } from "react";
const UseEffectHooks = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Imren");
  // useEffect(() => {
  //   console.log("calisti");
  // }, [counter]);

  useEffect(() => {
  
    return () => {
      console.log("4-unmounting")
      console.log("eski uyeligi sonlandir"); // clean up
    };
  }, [name]);

  return (
    <div className="container text-center">
      <h1 className="text-danger">UseEfect Method</h1>
      <h3>COUNT={counter}</h3>
      <h4>{name}</h4>
      <button onClick={() => setCounter(counter + 1)} className="btn btn-info ">
        INC
      </button>
      <button onClick={() => setName("Nikola")} className="btn btn-bg-success">
        BUTTON
      </button>
    </div>
  );
};

export default UseEffectHooks;
