import Axios from "axios";
import{Link} from "react-router-dom";
function ShopList(props) {
    const { _id, carName, model, year, price, img1,topSpeed,enginecapacity,enginetype,milage} = props.obj;
    

     
    const handleClick = () =>{
      Axios.delete("https://backendss-uvix.onrender.com/carRoute/delete-car/" + _id )
      .then((res)=>{
          if(res.status === 200){
              alert("Record deleted successfully");
              window.location.reload();
          }
          else
              Promise.reject();
      })
      .catch((err)=>alert(err));
  }

    return (
       
        <div className="col-md-6 my-2" >
            <div className="card"style={{ backgroundColor: "#ffac3c", color: "#282c4c",minHeight: "38vh", minWidth: "300px" }}>
              <img className="card-img-top" src={img1} alt={carName} />
              <div className="card-body">
                <h2 className="card-text text-center">{carName}</h2>
              <div>
    <table style={{ borderSpacing: "40px" }}>
      <tr>
        <th>Model</th>
        <th></th>
        <th>Year</th>
        
      </tr>
      <tr>
        <td>{model}</td>
        <td></td>
        <td>{year}</td>
      </tr>
      <tr>
        <th>Top Speed</th><td></td>
        <th>Engine Type</th>
      </tr>
      <tr>
        <td>{topSpeed}</td><td></td>
        <td>{enginetype}</td>
      </tr>
      <tr>
        <th>Engine Capacity</th><td></td>
        <th>Milage</th>
      </tr>
      <tr>
        <td>{enginecapacity}</td><td></td>
        <td>{milage}</td>
      </tr>
      <tr>
        <td colSpan="3"><hr/></td>
      </tr>
      <tr>
        <td></td>
        <th>Price</th>
      </tr>
      <tr>
        <td></td>
        <td>₹{price}</td>
        <td></td>
      </tr>
    </table>
  </div><div class="me-2">

                <button onClick={handleClick} class="text-light btn btn-danger ">Delete</button>
                <Link class="text-decoration-none text-light mx-3" to={"/modify/" + _id}>
<button class="btn btn-success">
    Edit
</button>
</Link>
</div>
              </div>
            </div>
          </div>
    )
}
export default ShopList;