import React from "react";
import Car1 from "./images/car1.jpg";
import Car2 from "./images/car2.jpg";
import Car3 from "./images/car3.png";
import Car4 from "./images/car4.jpg";
function Home() {
  return (
    <div>
    <div className="container-fluid mb-3">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Car1} alt="car1" className="me-2 d-block w-100" style={{maxHeight:"90vh"}} />
          </div>
          <div className="carousel-item">
            <img src={Car2} alt="car2" className="me-2 d-block w-100" style={{maxHeight:"90vh"}} />
          </div>
          <div className="carousel-item">
            <img src={Car3} alt="car3" className="me-2 d-block w-100"style={{maxHeight:"90vh"}} />
          </div>
          <div className="carousel-item">
            <img src={Car4} alt="car4" className="me-2 d-block w-100"style={{maxHeight:"90vh"}} />
          </div>
          
        </div>
        <button class="carousel-control-prev"  type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button"   data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
      </div>
    </div>
    </div>

  );
}

export default Home;
