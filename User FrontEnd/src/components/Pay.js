import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import Axios from "axios";
function Pay(props) {
    const [arr, setArr] = useState({
        carName: "",
        model: "",
        price: "",
        year: "",
      });
      const { id } = useParams();
 

      useEffect(() => {
        Axios.get(`https://backendss-uvix.onrender.com/useRoute/${id}`)
          .then((res) => {
            if (res.status === 200) {
              const {  carName, model, price, year } = res.data;
              setArr({  carName, model, price, year });
            } else {
              throw new Error("Failed to fetch data");
            }
          })
          .catch((err) => alert(err));
      }, [id]);
      const [name,setName]=useState('');
      const email=localStorage.getItem("email");
      const [mobile,setMobile]=useState('');
      const handleSubmit = () => {
        const data = {
          name:name,
          email:email,
          mobile:mobile,
          carName: arr.carName,
          model: arr.model,
          price: arr.price,
        };
      
        Axios.post("https://backendss-uvix.onrender.com/userRoute/register", data)
          .then((res) => {
            if (res.status === 200) {
            } else {
              alert("Failed to add record");
            }
          })
          .catch((err) => alert("Error: " + err));
      
      };
      
    return (
      <div class="container justify-content-center">
       <form>
      

        <div class="mb-3">
            <label for="name" class="form-label"> Name:</label>
            <input type="text" class="form-control"onChange={(event)=>setName(event.target.value)}placeholder="Enter Your Name" id="name"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label"> Email:</label>
            <input type="email" class="form-control" defaultValue={localStorage.getItem("email")}placeholder="Enter Your E-mail" id="email" disabled/>
        </div>
        <div class="mb-3">
            <label for="phno" class="form-label"> Mobile:</label>
            <input type="text" class="form-control" onChange={(event)=>setMobile(event.target.value)}placeholder="Enter Your Mobile Number" id="phno"/>
        </div>
        
        <div class="mb-3">
            <label for="car" class="form-label"> Brand:</label>
            <input type="text" class="form-control"defaultValue={arr.carName} id="car" disabled/>
        </div>
        <div class="mb-3">
            <label for="model" class="form-label"> Carname:</label>
            <input type="text" class="form-control"defaultValue={arr.model} id="model" disabled/>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label"> Price:</label>
            <input type="text" class="form-control"defaultValue={arr.price} id="price" disabled/>
        </div>
<Link to={`/registered/${id}`} class="text-decoration-none text-light"> <button onClick={handleSubmit} style={{ backgroundColor: "#ffac3c", color: "#282c4c" }} class="btn btn-mute" type="submit">Submit</button></Link>
    
       </form>
      </div>
    );
  }
  
  export default Pay;