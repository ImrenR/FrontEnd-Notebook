const AddTutorial = () => {
  return (
    <div>
      <h1 className="container text-danger">Add Your Tutorial</h1>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter your title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Enter your description"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </form>
     
    </div>
  );
};

export default AddTutorial;
