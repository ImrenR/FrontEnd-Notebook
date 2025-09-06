import { useState } from "react";
import axios from "axios";
const AddTutorial = ({ getTutorial }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postTutorial({ title, description });
    setDescription("");
    setTitle("") // bunu etkin hale cevirmek icin value={} eklemek zorundayiz
    }
    
 

  const postTutorial = async (newTutorial) => {
    try {
      await axios.post(import.meta.env.VITE_APP_URL, newTutorial);
    } catch (error) {
      console.log(error);
    } finally {
      getTutorial();
    }
  };

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
