import Header from "../Header/Header";
import axios from 'axios';
import { useEffect, useState } from "react";
import './ViewRentals.css'; // Add a CSS file for styling

const ViewRentals = () => {
    const [rents, setRents] = useState([]);
    
    useEffect(() => {
        const fetchRents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/rents');
                if (response.status === 200) {
                    setRents(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchRents();
    }, []);

    return (
        <>
            <Header />
            <div className="rentals-container">
                <h2>View Rentals</h2>
                {rents.length === 0 ? (
                    <p>No rentals found</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Car Name</th>
                                <th>User Name</th>
                                <th>Price per Day</th>
                                <th>Booking Dates</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rents.map(rental => (
                                <tr key={rental._id}>
                                    <td>{rental.carId.name}</td>
                                    <td>{rental.userId.name}</td>
                                    <td>{rental.carId.rate}/-</td>
                                    <td>{new Date(rental.startDate).toLocaleDateString()} - {new Date(rental.endDate).toLocaleDateString()}</td>
                                    <td><img src={`http://localhost:3000/${rental.carId.image}`} alt={rental.carId.name} width="100" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default ViewRentals;
