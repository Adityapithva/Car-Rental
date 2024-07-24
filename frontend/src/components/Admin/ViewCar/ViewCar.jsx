import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from 'axios';
import './ViewCar.css';

const ViewCar = () => {
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

    return (
        <>
            <Header />
            <div className="car-container">
                {cars.map((car) => (
                    <div className="card" key={car._id}>
                        <div className="image">
                            <img src={`http://localhost:3000/${car.image}`} alt={car.name} />
                        </div>
                        <div className="content">
                            <a href="#">
                                <span className="title">
                                    {car.name}
                                </span>
                            </a>
                            <p className="desc">
                                Fuel Type: {car.fuelType}
                            </p>
                            <p className="desc">
                                Transmission: {car.transmission}
                            </p>
                            <p className="desc">
                                Seating Capacity: {car.seatingCapacity}
                            </p>
                            <a className="action" href="#">
                                Find out more
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ViewCar;
