import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopList from "./shoplist";

function Shop() {
  const [arr, setArr] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://project-final-backend-bq77.onrender.com/useRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () =>{
    return arr.map((val,ind)=>{ 
        return <ShopList obj={val}/>
    })
}

  return (
    <div className="container mt-4">
      <div className="row">
        {ListItems()}
      </div>
    </div>
  );
}

export default Shop;
