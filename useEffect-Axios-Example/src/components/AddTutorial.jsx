import { useState } from "react";
import axios from "axios";
const AddTutorial = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit=(e)=> {
    e.preventDefault();
    postTutorial({title,description})
  }; 
  const postTutorial = async(newTutorial)=> {
try {
    await  axios.post(import.meta.env.VITE_APP_URL,newTutorial )
} catch (error) {
  console.log(error)
}
  }

  return (
    <div>
      <h1 className="container text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter your title"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Enter your description"
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
     
    </div>
  );
};

export default AddTutorial;
