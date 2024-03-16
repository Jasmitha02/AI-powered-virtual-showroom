import Axios from "axios";
import { useState, useEffect } from "react";

function Repair() {
  const [arr2, setArr2] = useState([]);

  useEffect(() => {
    Axios.get("https://backendss-uvix.onrender.com/repairRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr2(res.data);
        } else {
          return Promise.reject("Error in Axios request");
        }
      })
      .catch((err) => alert(err));
  }, []);

  
    return (
      <div>
        <table
          style={{ maxWidth: "95%", margin: "50px auto" }}
          className="table table-bordered table-striped text-light justify-content-center"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {arr2.map((item1) => (
              <tr key={item1.id}>
                <td>{item1.name}</td>
                <td>{item1.email}</td>
                <td>{item1.mobile}</td>
                <td>{item1.carName}</td>
                <td>{item1.model}</td>
                <td>{item1.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
 
}

export default Repair;
