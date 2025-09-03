import { useState } from "react";
import UseStateHook from "./UseStateHook";

const DataStorage = () => {
  // const [ad, setAd] = useState("Imren");
  // const [soyad, setSoyad] = useState("Rahbay");
  // const [meslek, setMeslek] = useState("Software Developer");

  //! or else
  const [user, setUser] = useState({ad: "Imren", soyad:"Rahbay", meslek: "Software Dev"
  })



  
  return (
    <div>
      <h2 className="text-center m-2">Working with several data</h2>
      <div className="bg-secondary">
      <p>NAME :{user.ad}</p>
      <p>SURNAME :{user.soyad}</p>
      <p>OCCUPATION :{user.meslek}</p>
      </div>
      <button className="btn btn-primary m-2" onClick={()=> setUser({ad: "Ana", soyad:"Walnut", meslek: "Engineer"})}>
        UPDATE
      </button>
      {/* Sadece adi guncelleyip digerlerini aynen alacaksak, spread ile ekleme yapacagiz */}
       <button className="btn btn-primary m-2" onClick={()=> setUser({...user,ad: "Ana"})}>
        UPDATE NAME
      </button>
      {/* <button className="btn btn-primary m-2" onClick={()=> setAd("j")}>
        UPDATE NAME
      </button>
          <button className="btn btn-primary m-2" onClick={()=>setSoyad("R")}>
        UPDATE SURNAME
      </button>
          <button className="btn btn-primary m-2" onClick={()=>setMeslek("FullStack Dev")}>
        UPDATE OCCUPATION
      </button> */}
    </div>
  );
};

export default DataStorage;
