import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home = () => {
  const getTutorial = async () => {
    // const url = "https://tutorial-api.fullstack.clarusway.com/";
    try {
      const { data } = await axios.get(import.meta.env.VITE_APP_URL);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
    //! tehn & catch method
  //   axios
  //   .get(import.meta.env.VITE_APP_URL)
  //   .then((res)=>console.log(res.data))
  //   .catch((error)=>console.log(error))
  };
  getTutorial();
  return (
    <div>
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
