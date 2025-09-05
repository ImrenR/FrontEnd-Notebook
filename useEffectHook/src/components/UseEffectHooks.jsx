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
import { useState } from "react";
const UseEffectHooks = () => {


  const [counter, setCounter] = useState(0)
  return (
    <div className="container text-center">
      <h1 className="text-danger">UseEfect Method</h1>
      <h3>COUNT={counter}</h3>
      <button  onClick={()=>setCounter(counter+ 1)} className="btn btn-info ">INC</button>
    </div>
  );
};

export default UseEffectHooks;
