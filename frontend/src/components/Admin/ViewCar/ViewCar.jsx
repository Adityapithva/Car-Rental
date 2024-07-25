import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from 'axios';
import './ViewCar.css';
import { MdDelete } from "react-icons/md";
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


    const deleteCar = async(carId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/cars/${carId}`);
            if (response.status === 200) {
                setCars(cars.filter(car => car._id!== carId));
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <Header />
            <div className="car-container">
                {cars.map((car) => {
                    return <div className="cardd" key={car._id}>
                        <div className="card-image">
                            <img src={`http://localhost:3000/${car.image}`} alt={car.name} id="img" />
                        </div>
                        <div className="category">
                            <p>Name: {car.name}</p>
                            <p>Fuel Type: {car.fuelType}</p>
                            <p>Transmission: {car.transmission}</p>
                            <p>Seating Capacity: {car.seatingCapacity}</p>
                            <p>Rate per day: {car.rate}/-</p>
                            <button className="btn btn-danger" id='abtn' onClick={() => deleteCar(car._id)}><MdDelete /></button>
                        </div>
                    </div>
                })}
                {cars.length === 0 && <h2>Nothing to show here...</h2>}
            </div>
        </>
    );
}

export default ViewCar;
