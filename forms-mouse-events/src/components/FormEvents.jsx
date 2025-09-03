const FormEvents = () => {
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h2>FORM EVENTS</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
        </div>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="col-sm-2 col-form-label">
            Country
          </label>
          <select id="country" className="form-select">
            <option selected>Countries</option>
            <option value="1">Portugal</option>
            <option value="2">Spain</option>
            <option value="3">Turkey</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkChecked"
          />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormEvents;
