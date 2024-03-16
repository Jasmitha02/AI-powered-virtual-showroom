import React, { useState, useEffect } from "react";
import Axios from "axios";

function Maintain() {
  const [arr1, setArr1] = useState([]);

  useEffect(() => {
    Axios.get("https://backendss-uvix.onrender.com/maintainRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr1(res.data);
        } else {
          return Promise.reject("Error in Axios request");
        }
      })
      .catch((err) => {
        console.error("Error in Axios request", err);
      });
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
            {arr1.map((item1) => (
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

export default Maintain;
