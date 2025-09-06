import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState , useEffect} from "react";
const Home = () => {
  const [tutorials, setTutorials] = useState([]) //! data bir array icinde oldugundan ve map ile calisacagimizdan dolayi
  // console.log(tutorials);

  const getTutorial = async () => {
    try {
      const { data } = await axios.get(import.meta.env.VITE_APP_URL);
     setTutorials(data)  
    } catch (error) {
      console.log(error);
    }
    //! then & catch method
  //   axios
  //   .get(import.meta.env.VITE_APP_URL)
  //   .then((res)=>console.log(res.data))
  //   .catch((error)=>console.log(error))
  };

  useEffect(() => {
    getTutorial();
  },[]);
  
  
  return (
    <div>
      <AddTutorial getTutorial= {getTutorial}/>
      <TutorialList tutorials = {tutorials} getTutorial= {getTutorial}/>
    </div>
  );
};

export default Home;
