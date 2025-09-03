const FormEvents = () => {
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h2>FORM EVENTS</h2>
      </div>
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </form>
      <form action="">
        <label for="inputPassword5" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
        />
      </form>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkDefault"
        />
        <label class="form-check-label" for="checkDefault">
          Check me out
        </label>
      </div>
      <input class="btn btn-primary" type="submit" value="Submit"></input>
    </div>
  );
};

export default FormEvents;
