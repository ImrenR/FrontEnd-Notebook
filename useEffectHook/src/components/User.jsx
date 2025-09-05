import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState(null); {/*ilk renderde state degeri initial  
    deger olacagi icin hata almamak icin ya state e initial deger verilmeli (null)
     ya da optional chaning ?  kontrolu yapmaliyiz asagida yaptigim gibi*/}
 // const getUser = ()=> {
  //  axios
  //  .get("https://randomuser.me/api/")
  //  .then((result)=>console.log(result.data.results[0]))
  //  .catch((error)=> console.log(error))
  //  }
  // }
  const getUser = async () => {
    try {
      const result = await axios.get("https://randomuser.me/api/");
      setUserData(result.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []); // api ya istek atma ve run once on mount //! fetch ile axios benzer //! async-await ile then-catch benzer

  return (
    <div className="text-center">
      
      {userData ? (
       
       <>
          <img src={userData.picture.large}  alt="" />
          <p>Hi My name is {userData.name.first}</p>
          <h2>Username: {userData.login.username}</h2>
          <h4>Email :{userData.email}</h4>
          <h5>Birthdate: {new Date(userData.dob.date).toLocaleDateString()}</h5>
          <h5>City: {userData.location.city}</h5>
          <h5>Phone: {userData.phone}</h5>
          <button className="btn btn-warning"
          onClick={getUser}>New User</button>
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default User;
