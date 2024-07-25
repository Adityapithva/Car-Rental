/* eslint-disable react/prop-types */
import './SingleCar.css';

const SingleCar = ({ car }) => {

    // const handleBooking = async(carId) => {

    // };
    return (
        <div className="cardd">
            <div className="card-image">
                <img src={`http://localhost:3000/${car.image}`} alt={car.name} id="img" />
            </div>
            <div className="category">
                <p>Name: {car.name}</p>
                <p>Fuel Type: {car.fuelType}</p>
                <p>Transmission: {car.transmission}</p>
                <p>Seating Capacity: {car.seatingCapacity}</p>
                <p>Rate per day: {car.rate}/-</p>
                <button className='btn btn-success' onClick={() =>handleBooking(car._id)}>Book Now</button>
            </div>
        </div>
    );
};

export default SingleCar;
