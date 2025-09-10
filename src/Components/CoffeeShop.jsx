const CoffeeShop = () => {
  const employees = [
    {
      name1: "Alex",
      lastName: "Costa",
      dateOfBirth: "1987",
      salary: 25000,
      job: "developer",
      img: "/our-team-1.jpg",
    },
    {
      name1: "Luis",
      lastName: "Jovan",
      dateOfBirth: "1989",
      salary: 2000,
      job: "developer",
      img: "/our-team-2.jpg",
    },
    {
      name1: "Muge",
      lastName: "Pinto",
      dateOfBirth: "2000",
      salary: 2300,
      job: "developer",
      img: "/our-team-3.jpg",
    },
    {
      name1: "Rua",
      lastName: "Pinto",
      dateOfBirth: "2000",
      salary: 2300,
      job: "developer",
      img: "/our-team-4.jpg",
    },
    {
      name1: "Marta",
      lastName: "Pinto",
      dateOfBirth: "2000",
      salary: 2300,
      job: "developer",
      img: "/our-team-5.jpg",
    },
    {
      name1: "Joao",
      lastName: "Pinto",
      dateOfBirth: "2000",
      salary: 2300,
      job: "developer",
      img: "/our-team-6.jpg",
    },
  ];

  const ourMenu = [
    {
      img: "/menu-1.png",
      type: "dalgona",
    },
    {
      img: "/menu-2.png",
      type: "cappuccino",
    },
    {
      img: "/menu-3.png",
      type: "cappuccino with chocolate",
    },
    {
      img: "/menu-4.png",
      type: "turkish coffee",
    },
    {
      img: "/menu-5.png",
      type: "espresso",
    },
    {
      img: "/menu-6.png",
      type: "coffee",
    },
  ];

  const food = [
    {
      imgs: "/1_steak.webp",
      type: "Steak",
    },
    {
      imgs: "/2_gigerbread.webp",
      type: "Giger Bread",
    },
    {
      imgs: "/3_summer-squash-pizza.webp",
      type: "Pizza",
    },
    {
      imgs: "/4_peanut-butter.webp",
      type: "Peanut Butter",
    },
  ];
  const desert = [
    {
      imgs: "/1_corn-cake.webp",
      type: "Corn Cake",
    },
    {
      imgs: "/2_gigerbread.webp",
      type: "Giger Bread",
    },
    {
      imgs: "/3_Grape_almond.webp",
      type: "Grape Almond Desert",
    },
    {
      imgs: "/4_LemonMeringue.webp",
      type: "Lemon Meringue",
    },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container fw-bold rounded-5">
          <a className="navbar-brand" href="#">
            <img src="/coffee-cup.png" style={{ width: "50px" }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Our Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators w-100 p-5 g-3">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/slider1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="hero">
                <em>Welcome to the our coffeeshop</em>
                <h1 className="display-1 fw-bolder">Cafe Shop</h1>
                <p className="fs-5">your favorite coffee daily lives..</p>
                <div className="btn-container">
                  <button className="btn rounded-pill fw-bold me-3">
                    Our Story
                  </button>
                  <button className="btn rounded-pill fw-bold me-3">
                    Check Menu
                  </button>
                </div>
              </div>

              <div className="black rounded-5"></div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/slider2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="hero">
                <em>Welcome to the our coffeeshop</em>
                <h1 className="display-1 fw-bolder">Cafe Shop</h1>
                <p className="fs-5">your favorite coffee daily lives..</p>
                <div className="btn-container">
                  <button className="btn rounded-pill fw-bold me-3">
                    Our Story
                  </button>
                  <button className="btn rounded-pill fw-bold me-3">
                    Check Menu
                  </button>
                </div>
              </div>

              <div className="black rounded-5"></div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/slider3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="hero">
                <em>Welcome to the our coffeeshop</em>
                <h1 className="display-1 fw-bolder">Cafe Shop</h1>
                <p className="fs-5">your favorite coffee daily lives..</p>
                <div className="btn-container">
                  <button className="btn rounded-pill fw-bold me-3">
                    Our Story
                  </button>
                  <button className="btn rounded-pill fw-bold me-3">
                    Check Menu
                  </button>
                </div>
              </div>

              <div className="black rounded-5"></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About Us */}
      <section id="about" className="py-5">
        <h1 className="text-center">About Us</h1>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col col-sm-12 col-md-6">
              <div className="image-container mt-5 rounded-5 overflow-hidden">
                <img src="./about.jpg" alt="" />

                <div className="about-info d-flex  flex-column justify-content-end p-3 ">
                  <h4 className="fw-bold">We start since 2019</h4>
                  <p className="fs-6">Best in Dublin</p>
                </div>
              </div>
            </div>
            <div className="col  col-sm-12 col-md-6 my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident necessitatibus molestiae nulla dolore ex consequuntur
              non explicabo! Excepturi fugiat labore accusamus, sequi doloribus,
              deleniti iste, voluptate sunt cumque laboriosam illo!
            </div>
          </div>
        </div>
      </section>
      {/* Meet People */}
      <div className="people">
        <div className="people-header text-center text-white">
          <em>Creative Barista</em>
          <h2>Meet People</h2>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            {employees.map((item, index) => {
              const { name1, img, lastName, dateOfBirth, salary, job } = item;
              return (
                <div
                  key={index}
                  className="col col-xs-12 col-sm-6 col-m-4 col-lg-3 col-xl-2"
                >
                  <div className="card">
                    <img src={img} alt="" />
                    <div className="card-body">
                      <h2 className="lead">
                        {name1} {lastName}
                      </h2>
                      <h3 className="fs-6 text-muted text-capitalize">{job}</h3>
                      <p className="blockquote mb-0">
                        Some quick example text tp build on the card title and
                        make up the bulk of the cads content.
                      </p>
                      <footer></footer>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Our menu */}

      <section className="menu py-5">
        <div className="menu-header text-center">
          <h2>OUR MENU</h2>
          <div className="container p-5">
            <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active bg-dark"
                  id="pills-coffee-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-coffee"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Coffee
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link bg-dark"
                  id="pills-food-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-food"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Food
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link bg-dark"
                  id="pills-desert-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-desert"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Desert
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-coffee"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}
              >
                <div className="row">
                  {ourMenu.map((item, i) => {
                    const { img, type } = item;
                    return (
                      <div key={i} className="col-md-6 col-lg-3">
                        <a href="">
                          <img src={img} alt="" className="w-100" />
                        </a>
                        <h6 className="text-center text-capitalize">{type}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-food"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                <div className="row">
                  {food.map((item, i) => {
                    const { imgs, type } = item;
                    return (
                      <div key={i} className="col-md-6 col-lg-3">
                        <a href="">
                          <img src={imgs} className="w-100" />
                        </a>
                        <h6 className="text-center text-capitalize">{type}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-desert"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex={0}
              >
                <div className="row">
                  {desert.map((item, i) => {
                    const { imgs, type } = item;
                    return (
                      <div key={i} className="col-md-6 col-lg-3">
                        <a href="">
                          <img src={imgs} alt="" className="w-100" />
                        </a>
                        <h6 className="text-center text-capitalize">{type}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-form">
          <h1 className="text-center text-white">CONTACT</h1>
        </div>
        <div className="container text-white">
          <div className="row ">
            <div className="col-12 col-md-6">
              <form className="row g-3 ">
                <div className="col-md-6">
                  <label htmlFor="inputname4" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname4"
                    placeholder="Imren"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="imrenrahbay@gmail.com"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Porto"
                  />
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatingTextarea"
                    placeholder="Enter your comments"
                    style={{ height: "100px" }}
                  ></textarea>
                 
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-6">
              <iframe
              className="rounded-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192238.4603445828!2d-8.786417076841914!3d41.162331075674906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e28c5e9a77%3A0x7f08405ee8a1e44f!2sLivraria%20Lello!5e0!3m2!1spt-PT!2spt!4v1757532276642!5m2!1spt-PT!2spt"
                width="100%"
                height="450"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeShop;