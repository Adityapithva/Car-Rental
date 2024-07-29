/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import axios from 'axios';
import './Booking.css';
import { FcCancel } from "react-icons/fc";

const Booking = ({ carId, onBookingComplete, carRate }) => {
    let startDate = useRef('');
    let endDate = useRef('');
    const [totalPrice, setTotalPrice] = useState(0);

    const calculatePrice = () => {
        const start = new Date(startDate.current.value);
        const end = new Date(endDate.current.value);
        const timeDiff = Math.abs(end - start);
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        setTotalPrice(days * carRate);
    };
    const handleBook = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            const response = await axios.post(`http://localhost:3000/bookcar/${carId}`, {
                carId,
                startDate: startDate.current.value,
                endDate: endDate.current.value
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            alert(response.data.message);
            if (response.status === 201) {
                startDate.current.value = '';
                endDate.current.value = '';
                onBookingComplete();
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Error occurred during booking');
            }
            console.error(error);
        }
    };

    return (
        <>
            <form className="booking-form" onSubmit={handleBook}>
                <label>
                    Start Date:
                    <input
                        type="date"
                        ref={startDate}
                        onChange={calculatePrice}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        ref={endDate}
                        onChange={calculatePrice}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </label>
                <p>Total Price: {totalPrice}</p>
                <button type="submit" className="btn btn-success">Book Now</button>
            </form>
            <p className="mt-3" onClick={onBookingComplete}><FcCancel size={25} /></p>
        </>
    );
};

export default Booking;
