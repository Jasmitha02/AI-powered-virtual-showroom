import Axios from "axios";
import { useState, useEffect } from "react";

function Orders() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://backendss-uvix.onrender.com/userRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
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
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         {
            arr.map((item)=>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.carName}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                </tr>
            ))
         }
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
