import { useState, useEffect } from "react";
import axios from "axios";


const User = () => {
 const [userData, setUserData] = useState()

 const getUser = async()=> {
 try{ 
  const result = await axios.get("https://randomuser.me/api/");
 setUserData(result.data.results[0])}
 catch (error){
  console.log(error)
 }
};

useEffect(() => {
  getUser();
}, []) // api ya istek atma ve sonsuz donuden cikma

// const getUser = ()=> {
//  axios
//  .get("https://randomuser.me/api/")
//  .then((result)=>console.log(result.data.results[0]))
//  .catch((error)=> console.log(error))
//  }
// }


//! fetch ile axios benzer
//! async-await ile then-catch benzer

  return (
  <div>
    <img src="" alt="" />
    <p>Hi My name is</p>
    <h2>User name</h2>
    <h4>email</h4>
    <h5>d.tarihi</h5>
    <h5>sehir</h5>
    <h5>tel</h5>
    <button className="btn btn-warning">New User</button>
  </div>
)
}

export default User