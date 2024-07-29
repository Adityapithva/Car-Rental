/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SingleCar.css';
import Booking from '../Booking/Booking';

const SingleCar = ({ car }) => {
    const [isBooking, setIsBooking] = useState(false);

    const handleBooking = async () => {
        setIsBooking(true);
    };

    const handleBookingComplete = () => {
        setIsBooking(false);
    };

    return (
        <div className="cardd">
            {isBooking ? (
                <Booking carId={car._id} onBookingComplete={handleBookingComplete} carRate={car.rate}/>
            ) : (
                <>
                    <div className="card-image">
                        <img src={`http://localhost:3000/${car.image}`} alt={car.name} id="img" />
                    </div>
                    <div className="category">
                        <p>Name: {car.name}</p>
                        <p>Fuel Type: {car.fuelType}</p>
                        <p>Transmission: {car.transmission}</p>
                        <p>Seating Capacity: {car.seatingCapacity}</p>
                        <p>Rate per day: {car.rate}/-</p>
                        <button className='btn btn-success' onClick={() => handleBooking()}>Book Now</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleCar;
