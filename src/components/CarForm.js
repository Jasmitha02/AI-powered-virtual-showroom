
import React, { useState,useEffect } from "react";
function CarForm (props){
    const[img1,setImg1]=useState('');
    const[img2,setImg2]=useState('');
    const[img3,setImg3]=useState('');
    const[img4,setImg4]=useState('');
    const[img5,setImg5]=useState('');
    const[img6,setImg6]=useState('');
    const[price,setPrice]=useState('');
    const[year,setYear]=useState('');
    const[carName,setCarName]=useState('');
    const[model,setModel]=useState('');
    const[topSpeed,setTopSpeed]=useState('');
    const[enginetype,setEnginetype]=useState('');
    const[enginecapacity,setEnginecapacity]=useState('');
    const[milage,setMilage]=useState('');


    const arr=[img1,img2,img3,img4,img5,img6,price,year,carName,model,topSpeed,enginetype,enginecapacity,milage];
    const handleClick=()=>{
      props.getState(arr);
    }
    useEffect(()=>{
        setImg1(props.img1Value);
        setImg2(props.img2Value);
        setImg3(props.img3Value);
        setImg4(props.img4Value);
        setImg5(props.img5Value);
        setImg6(props.img6Value);
        setPrice(props.priceValue);
        setYear(props.yearValue);
        setModel(props.modelValue);
        setCarName(props.carNameValue);     
        setTopSpeed(props.topSpeedValue);
        setEnginetype(props.enginetypeValue);
        setEnginecapacity(props.enginecapacityValue);
        setMilage(props.milageValue);


    },[props.img1Value,props.img2Value,props.img3Value,props.img4Value,props.img5Value,props.img6Value,props.priceValue,props.yearValue,props.carNameValue,props.modelValue,props.topSpeedValue,props.enginetypeValue,props.enginecapacityValue,props.milageValue]);
   
    return(
        <div class="m-5" >
            
            <div class="mb-3">
            <label for="img1" class="form-label"> Img1:</label>
            <input defaultValue={props.img1Value} type="text" class="form-control"onChange={(event)=>setImg1(event.target.value)}placeholder="Enter Img1 URL" id="img1"/>
        </div>
        <div class="mb-3">
            <label for="img2" class="form-label"> Img2:</label>
            <input defaultValue={props.img2Value} type="text" class="form-control"onChange={(event)=>setImg2(event.target.value)}placeholder="Enter Img2 URL" id="img2"/>
        </div><div class="mb-3">
            <label for="img3" class="form-label"> Img3:</label>
            <input defaultValue={props.img3Value} type="text" class="form-control"onChange={(event)=>setImg3(event.target.value)}placeholder="Enter Img3 URL" id="img3"/>
        </div><div class="mb-3">
            <label for="img4" class="form-label"> Img4:</label>
            <input defaultValue={props.img4Value}type="text" class="form-control"onChange={(event)=>setImg4(event.target.value)}placeholder="Enter Img4 URL" id="img4"/>
        </div>
        <div class="mb-3">
            <label for="img5" class="form-label"> Img5:</label>
            <input defaultValue={props.img5Value} type="text" class="form-control"onChange={(event)=>setImg5(event.target.value)}placeholder="Enter Img5 URL" id="img5"/>
        </div>
        <div class="mb-3">
            <label for="img6" class="form-label"> Img6:</label>
            <input defaultValue={props.img6Value} type="text" class="form-control"onChange={(event)=>setImg6(event.target.value)}placeholder="Enter Img6 URL" id="img6"/>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label"> Price:</label>
            <input defaultValue={props.priceValue} type="text" class="form-control"onChange={(event)=>setPrice(event.target.value)}placeholder="Enter Price " id="price"/>
        </div>
        <div class="mb-3">
            <label for="year" class="form-label"> Year:</label>
            <input defaultValue={props.yearValue}type="text" class="form-control"onChange={(event)=>setYear(event.target.value)}placeholder="Enter Year" id="year"/>
        </div>
        <div class="mb-3">
            <label for="carname" class="form-label"> Brand:</label>
            <input defaultValue={props.carNameValue} type="text" class="form-control"onChange={(event)=>setCarName(event.target.value)}placeholder="Enter Brand" id="carname"/>
        </div><div class="mb-3">
            <label for="model" class="form-label"> Model:</label>
            <input type="text"  defaultValue={props.modelValue} class="form-control"onChange={(event)=>setModel(event.target.value)}placeholder="Enter Model" id="model"/>
        </div>
        <div class="mb-3">
            <label for="speed" class="form-label"> Top Speed:</label>
            <input type="text"  defaultValue={props.topSpeedValue} class="form-control"onChange={(event)=>setTopSpeed(event.target.value)}placeholder="Enter Top Speed" id="speed"/>
        </div>
        <div class="mb-3">
            <label for="tyepe" class="form-label"> Engine Type:</label>
            <input type="text"  defaultValue={props.enginetypeValue} class="form-control"onChange={(event)=>setEnginetype(event.target.value)}placeholder="Enter Engine Type" id="type"/>
        </div>
        <div class="mb-3">
            <label for="capacity" class="form-label"> Engine Capacity:</label>
            <input type="text"  defaultValue={props.enginecapacityValue} class="form-control"onChange={(event)=>setEnginecapacity(event.target.value)}placeholder="Enter Engine Capcity" id="capcity"/>
        </div>
        <div class="mb-3">
            <label for="milage" class="form-label"> Milage:</label>
            <input type="text"  defaultValue={props.milageValue} class="form-control"onChange={(event)=>setMilage(event.target.value)}placeholder="Enter Milage" id="milage"/>
        </div>
        
        <button onClick={handleClick} class="btn btn-mute"style={{ backgroundColor: "#ffac3c", color: "#282c4c" }} type="submit">{props.children}</button>
        </div>
    )
}
export default CarForm;