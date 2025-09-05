
import axios from "axios";
const User = () => {

const getUser =async ()=> {
try{ const result = await axios.get("https://randomuser.me/api/")
 console.log(result.data.results)}
 catch (error){
  console.log(error)
 }
}

getUser();

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