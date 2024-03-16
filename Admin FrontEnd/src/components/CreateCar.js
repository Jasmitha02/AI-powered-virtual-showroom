import React, { useState } from "react";
import Axios from "axios";
import CarForm from "./CarForm";

function CreateCar() {
  const [arr, setArr] = useState([]);

  const getState = (childdata) => {
    setArr(childdata);
  };

  const handleSubmit = (event) => {
  event.preventDefault();
    const data = {
      img1: arr[0],
      img2: arr[1],
      img3: arr[2],
      img4: arr[3],
      img5: arr[4],
      img6: arr[5],
      price: arr[6],
      year: arr[7],
      carName: arr[8],
      model: arr[9],
      topSpeed:arr[10],
      enginetype:arr[11],
      enginecapacity: arr[12], 
      milage:arr[13]
    };
    

    Axios.post("https://backendss-uvix.onrender.com/carRoute/add-car", data)
          .then((res) => {
            if (res.status === 200) {
              alert("Record added");
              window.location.href="/#/list";
            } else {
              alert("Failed to add record");
            }
          })
          .catch((err) => alert("Error: " + err));
      
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CarForm getState={getState}
          img1Value=""
          img2Value=""
          img3Value=""
          img4Value=""
          img5Value=""
          img6Value=""
          priceValue=""
          yearValue=""
          carNameValue=""
          modelValue=""
          topSpeedValue=""
          enginetypeValue=""
          enginecapcityValue=""
          milage=""
          >Create Car</CarForm>
        
       
      </form>
    </div>
  );
}

export default CreateCar;
