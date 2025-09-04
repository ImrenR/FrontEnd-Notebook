import { useState } from "react";

const FormEvents = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [remember, setRemember] = useState(false);
  const [country, setCountry] = useState("");


  const handleSubmit = (e)=> {
    e.preventDefault()
  }
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={() => setName()}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
        </div>
        <div className="col-sm-10">
          <input
            onChange={() => setPassword()}
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="col-sm-2 col-form-label">
            Date
          </label>
        </div>
        <div className="col-sm-10">
          <input
            onChange={() => setDate()}
            type="datetime-local"
            className="form-control"
            id="date"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="col-sm-2 col-form-label">
            Country
          </label>
          <select
            onChange={() => setCountry()}
            id="country"
            className="form-select"
          >
            <option selected>Countries</option>
            <option value="Portekiz">Portugal</option>
            <option value="Ispanya">Spain</option>
            <option value="Turkiye">Turkey</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={e => setRemember(e)}
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
