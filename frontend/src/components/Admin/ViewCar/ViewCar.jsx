import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from 'axios';
import './ViewCar.css';
import { MdDelete, MdEdit } from "react-icons/md";

const ViewCar = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingCar, setEditingCar] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        fuelType: '',
        transmission: '',
        seatingCapacity: '',
        rate: ''
    });

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cars');
                if (response.status === 200) {
                    setCars(response.data);
                }
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        fetchCars();
    }, []);

    const deleteCar = async (carId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/cars/${carId}`);
            if (response.status === 200) {
                setCars(cars.filter(car => car._id !== carId));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const editCar = (car) => {
        setEditingCar(car);
        setEditFormData({
            name: car.name,
            fuelType: car.fuelType,
            transmission: car.transmission,
            seatingCapacity: car.seatingCapacity,
            rate: car.rate
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/cars/${editingCar._id}`, editFormData);
            if (response.status === 200) {
                setCars(cars.map(car => car._id === editingCar._id ? response.data : car));
                setEditingCar(null);
                alert('Car edited successfully')
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleCloseEdit = () => {
        setEditingCar(null);
    };

    return (
        <>
            <Header />
            <div className="car-container">
                {loading ? <h2>Loading...</h2> : 
                    cars.length === 0 ? <h2>Nothing to show here...</h2> :
                    cars.map((car) => (
                        <div className="cardd" key={car._id}>
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
                                <button className="btn btn-primary" onClick={() => editCar(car)}><MdEdit /></button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {editingCar && (
                <div className="edit-modal">
                    <div className="edit-modal-content">
                        <h2>Edit Car</h2>
                        <form onSubmit={handleEditSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={editFormData.name}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label>
                                Fuel Type:
                                <input
                                    type="text"
                                    name="fuelType"
                                    value={editFormData.fuelType}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label>
                                Transmission:
                                <input
                                    type="text"
                                    name="transmission"
                                    value={editFormData.transmission}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label>
                                Seating Capacity:
                                <input
                                    type="number"
                                    name="seatingCapacity"
                                    value={editFormData.seatingCapacity}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label>
                                Rate per day:
                                <input
                                    type="number"
                                    name="rate"
                                    value={editFormData.rate}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <button type="submit">Save</button>
                            <button type="button" onClick={handleCloseEdit}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ViewCar;
