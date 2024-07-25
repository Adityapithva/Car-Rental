import Navbar from "../Navbar/Navbar";
import Common from "../Common/Common";
import { useState,useEffect } from "react";
import axios from 'axios';
import SingleCar from "../SingleCar/SingleCar";
import './Fleet.css';
const Fleet = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const fetchCars = async() => {
            try{
                const response = await axios.get('http://localhost:3000/cars');
                if(response.status === 200){
                    setCars(response.data);
                }
            }catch(err){
                console.log(err);
            }
        };
        fetchCars();
    },[])
    return <>
        <Navbar></Navbar>
        <Common title='Fleet'></Common>
        <div className="fleetContainer">
            {cars.map((car) => {
                return <SingleCar car={car} key={car._id}></SingleCar>
            })}
        </div>
    </>
}
export default Fleet;