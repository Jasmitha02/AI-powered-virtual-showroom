import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import CarForm from "./CarForm";

function Modify() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        img6: "",
        price: "",
        year: "",
       carName:"",
       model:"",
       topSpeed:"",
       enginetype:"",
       enginecapacity:"",
       milage:""

    });
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        Axios.get("https://backendss-uvix.onrender.com/carRoute/update-car/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const {
                        img1,
                        img2,
                        img3,
                        img4,
                        img5,
                        img6,
                        price,
                        year,
                       carName,
                       model,
                       topSpeed,
                       enginetype,
                       enginecapacity,
                       milage
                    } = res.data;
                    setInitialValue({
                        img1,
                        img2,
                        img3,
                        img4,
                        img5,
                        img6,
                        price,
                        year,
                       carName,
                       model,
                       topSpeed,
                       enginetype,
                       enginecapacity,
                       milage
                    });
                } else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id]);

    const handleSubmit = (event) => {
    event.preventDefault();
        const data = {
            img1: newData[0],
            img2: newData[1],
            img3: newData[2],
            img4: newData[3],
            img5: newData[4],
            img6: newData[5],
            price: newData[6],
            year: newData[7],
            model:newData[9],
            carName:newData[8],
            topSpeed:newData[10],
            enginetype:newData[11],
            enginecapacity:newData[12],
            milage:newData[13]
        };
        Axios.put("https://backendss-uvix.onrender.com/carRoute/update-car/" + id, data)
            .then((res) => {
                if (res.status === 200){
                    alert("Record updated successfully");
                    window.location.href="/#/list";
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    const getState = (childData) => {
        setNewData(childData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <CarForm
                getState={getState}
                img1Value={initialValue.img1}
                img2Value={initialValue.img2}
                img3Value={initialValue.img3}
                img4Value={initialValue.img4}
                img5Value={initialValue.img5}
                img6Value={initialValue.img6}
                priceValue={initialValue.price}
                yearValue={initialValue.year}
                carNameValue={initialValue.carName}
                modelValue={initialValue.model}
                topSpeedValue={initialValue.topSpeed}
                enginetypeValue={initialValue.enginetype}
                enginecapacityValue={initialValue.enginecapacity}
                milageValue={initialValue.milage}
            >
                Modify Car
            </CarForm>
        </form>
    )
}

export default Modify;
