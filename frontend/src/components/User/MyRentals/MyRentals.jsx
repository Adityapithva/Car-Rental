import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Common from '../Common/Common';
import './MyRentals.css';

const MyRentals = () => {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        // Fetch the rentals for the logged-in user
        const fetchRentals = async () => {
            try {
                const response = await axios.get('http://localhost:3000/myrentals', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setRentals(response.data);
                console.log(response.data);
            } catch (err) {
              console.error(err); // Log error for debugging
            }
        };
        fetchRentals();
    }, []);

    return (
        <div>
            <Navbar />
            <Common title='My Rentals' />
            <div id='line'></div>
            <div className="rentals-container">
                {rentals.length === 0 ? (
                    <p>No rentals found</p>
                ) : (
                    <div className="rentals-list">
                        {rentals.map(rental => (
                            <li key={rental._id} className="rental-item">
                                <h3>{rental.carId.name}</h3>
                                <img src={`http://localhost:3000/${rental.carId.image}`} alt={rental.carId.name} width="100" />
                                <p>Price per day: {rental.carId.rate}/-</p>
                                <p>Booking Dates: {new Date(rental.startDate).toLocaleDateString()} - {new Date(rental.endDate).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </div>
                )}
            </div>
            <div id='line'></div>
        </div>

    );
};

export default MyRentals;
