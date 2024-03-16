import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

function ItemDetails() {
  const [arr, setArr] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    carName: "",
    model: "",
    price: "",
    year: "",
    topSpeed:"",
    enginetype:"",
    enginecapacity:"",
    milage:""
  });
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://backendss-uvix.onrender.com/useRoute/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const { img1, img2, img3, img4, img5, img6, carName, model, price, year ,topSpeed,enginetype,enginecapacity,milage} = res.data;
          setArr({ img1, img2, img3, img4, img5, img6, carName, model, price, year ,topSpeed,enginetype,enginecapacity,milage});
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((err) => alert(err));
  }, [id]);

const redirecttopay=()=>{
  if(localStorage.getItem('islogged')==='true'){
    console.log(id);
    window.location.href='/#/pay/'+id;
  } 
  else{
    window.location.href='/#/login';
  }
}
  return (
    <div className="container">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type of="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={arr.img1} alt="car1" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img2} alt="car2" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img3} alt="car3" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img4} alt="car4" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img5} alt="car5" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img6} alt="car6" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="text-center my-3" style={{backgroundColor:"#ffac3c",color:"#282c4c"}}>
        <h2>{arr.carName}</h2>
        <div className="d-flex justify-content-center mb-3">
  <div>
    <table style={{ borderSpacing: "40px" }}>
      <tr>
        <th>Model</th>
        <th></th>
        <th>Year</th>
        
      </tr>
      <tr>
        <td>{arr.model}</td>
        <td></td>
        <td>{arr.year}</td>
      </tr>
      <tr>
        <th>Top Speed</th><td></td>
        <th>Engine Type</th>
      </tr>
      <tr>
        <td>{arr.topSpeed}</td><td></td>
        <td>{arr.enginetype}</td>
      </tr>
      <tr>
        <th>Engine Capacity</th><td></td>
        <th>Milage</th>
      </tr>
      <tr>
        <td>{arr.enginecapacity}</td><td></td>
        <td>{arr.milage}</td>
      </tr>
      <tr>
        <td colSpan="3"><hr/></td>
      </tr>
      <tr>
        <td></td>
        <th>Price</th>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>₹{arr.price}</td>
        <td></td>
      </tr>
    </table>
  </div>
</div>
        <div >
          <Link to="/shop" className="btn btn-mute m-2" style={{ backgroundColor: "#282c4c", color: "#ffac3c" }}>
            Go Back
          </Link>
          <button className="btn btn-mute m-2" style={{ backgroundColor: "#282c4c", color: "#ffac3c" }} onClick={redirecttopay}>Pay</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;