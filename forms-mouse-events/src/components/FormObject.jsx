const FormObject = () => {

  const [info, setInfo] = useState({name: "", password: "", country: ""})
  const {name, password, country} = info
  
  const handleInfo =(e)=> setInfo({...info,[e.target.id]:e.target.value})
  
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      name: ${name}
      password : ${password}
      country : ${country}

      
      `);
  };

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
            onChange={handleInfo}
            type="text"
            className="form-control"
            id="name"
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
        </div>
        <div className="col-sm-10">
          <input
            onChange={handleInfo}
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="col-sm-2 col-form-label">
            Country
          </label>
          <select
            onChange={handleInfo}
            id="country"
            className="form-select"
            value={country}
          >
            <option selected>Countries</option>
            <option value="Portekiz">Portugal</option>
            <option value="Ispanya">Spain</option>
            <option value="Turkiye">Turkey</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormObject;
