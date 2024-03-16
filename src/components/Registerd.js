import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Registered() {
  const [arr, setArr] = useState({
    carName: "",
    model: "",
    price: "",
    img1: ""
  });
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://backendss-uvix.onrender.com/useRoute/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const { carName, model, price, img1 } = res.data;
          setArr({ carName, model, price, img1 });
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  return (
    <div className="container text-center mt-4 text-light">
      <h1 style={{color: "#ffac3c"}}>You have successfully registered!</h1>
      <h2 style={{color: "#ffac3c"}}>Details</h2>
      <img
        src={arr.img1}
        alt={arr.carName}
        className="img-fluid d-block mx-auto mt-3 w-100"
      />
      <div className="my-2 px-2 py-2" style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>
        <h3>{arr.carName}</h3>
        <p className="fs-5">Model: {arr.model}</p>
        <p className="fs-5">Price: {arr.price}</p>
      </div>
    </div>
  );
}

export default Registered;