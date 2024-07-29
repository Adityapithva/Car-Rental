import Navbar from "../Navbar/Navbar";
import Common from "../Common/Common";
import { useState, useEffect } from "react";
import axios from 'axios';
import SingleCar from "../SingleCar/SingleCar";
import './Fleet.css';
const Fleet = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cars');
                if (response.status === 200) {
                    setCars(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchCars();
    }, []);
    return <>
        <Navbar></Navbar>
        <Common title='Fleet'></Common>
        <div id='line'></div>
        <div className="dropdown mt-3" style={{'margin-left':'80px'}}>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter based on
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item"><input type="text" placeholder="Enter fuel type"></input></a></li>
                    <li><a className="dropdown-item"><input type="number" placeholder="Enter seating capacity"></input></a></li>
                    <li><a className="dropdown-item"><input type='number' placeholder="Rate upto"></input></a></li>
                </ul>
            </div>
        <div className="fleetContainer">

            {cars.map((car) => {
                return <SingleCar car={car} key={car._id}></SingleCar>
            })}
        </div>
        <div id='line'></div>
    </>
}
export default Fleet;