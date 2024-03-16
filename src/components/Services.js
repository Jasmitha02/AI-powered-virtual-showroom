import React from 'react';
function Services() {
  const redirectmaintain=()=>{
    if(localStorage.getItem('islogged')==='true'){
      window.location.href="/#/maintain";
    } 
    else{
      window.location.href='/#/login';
    }
  }
  const redirectrepair=()=>{
    if(localStorage.getItem('islogged')==='true'){
      window.location.href="/#/repair";
    } 
    else{
      window.location.href='/#/login';
    }
  }
  const redirectupgrade=()=>{
    if(localStorage.getItem('islogged')==='true'){
      window.location.href="/#/upgrade";
    } 
    else{
      window.location.href='/#/login';
    }
  }
  return (
    <div className="container mt-4">
      <h1 className="text-center yellow">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 "style={{backgroundColor:"#ffac3c"}}>
        <div className="card-body" >
              <h5 className="card-title" style={{color:"#282c4c"}}>Car Maintenance</h5>
              <p className="card-text" style={{color:"#282c4c"}}>
                We offer comprehensive car maintenance services such that your
                vehicle in top condition.
              </p>
               <button class="btn btn-mute" style={{ color: "#ffac3c", backgroundColor: "#282c4c" }}onClick={redirectmaintain}>Book  Maintainence</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4" style={{backgroundColor:"#ffac3c"}}>
            <div className="card-body">
              <h5 className="card-title" style={{color:"#282c4c"}}>Car Repairs</h5>
              <p className="card-text" style={{color:"#282c4c"}}>
                Our skilled technicians provide high-quality car repair
                services to get you back on the road.
              </p>
            <button className="btn btn-mute" style={{ color: "#ffac3c", backgroundColor: "#282c4c" }}onClick={redirectrepair}>Book a Repair</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4" style={{backgroundColor:"#ffac3c"}}>
            <div className="card-body">
              <h5 className="card-title" style={{color:"#282c4c"}}>Car Upgrades</h5>
              <p className="card-text" style={{color:"#282c4c"}}>
                Enhance your car's performance and appearance with our premium
                upgrade services.
              </p>
           <button class="btn btn-mute" style={{ color: "#ffac3c", backgroundColor: "#282c4c" }}onClick={redirectupgrade} >Book a Upgrade</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;