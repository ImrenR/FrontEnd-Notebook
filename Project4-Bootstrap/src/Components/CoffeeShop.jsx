

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
            <img 
            src="/coffee-cup.png"
              
             style={{width: "50px"}}
            />
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
                <a className="nav-link text-white active" aria-current="page" href="#">
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
        <div className="carousel-indicators">
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
            <img
            src="/slider1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <em>Welcome to the our coffeeshop</em>
              <h1 className="display-1 fw-bolder">Cafe Shop</h1>
              <p className="fs-5">your favorite coffee daily lives..</p>
              <div className="btn-container">
                <button className="btn rounded-pill fw-bold me-3">Our Story</button>
                <button className="btn rounded-pill fw-bold me-3">Check Menu</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
            src="/slider2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <em>Welcome to the our coffeeshop</em>
              <h1 className="display-1">Cafe Shop</h1>
              <p>your favorite coffee daily lives..</p>
              <div className="btn-container">
                <button>Our Story</button>
                <button>Check Menu</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
            src="/slider3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <em>Welcome to the our coffeeshop</em>
              <h1 className="display-1">Cafe Shop</h1>
              <p>your favorite coffee daily lives..</p>
              <div className="btn-container">
                <button>Our Story</button>
                <button>Check Menu</button>
              </div>
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
    </div>
  );
};

export default CoffeeShop;
