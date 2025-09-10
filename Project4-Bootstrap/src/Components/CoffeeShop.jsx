const CoffeeShop = () => {
  const employees = [
    {
      name1: "Melanie",
      lastName: "Costa",
      dateOfBirth: "1987",
      salary: 25000,
      job: "developer",
    },
    {
      name1: "Ebru",
      lastName: "Jovan",
      dateOfBirth: "1989",
      salary: 2000,
      job: "developer",
    },
    {
      name1: "Muge",
      lastName: "Pinto",
      dateOfBirth: "2000",
      salary: 2300,
      job: "developer",
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
                <img src="./about.jpg" alt=""/>
            
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
    </div>
  );
};

export default CoffeeShop;
