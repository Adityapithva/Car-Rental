import Header from "../Header/Header";
import './AddCar.css';
import { IoIosAddCircle } from "react-icons/io";
import { useRef } from "react";
import axios from 'axios';
const AddCar = () => {
    let name = useRef('');
    let fuelType = useRef('');
    let transmission = useRef('');
    let seatingCapacity = useRef('');
    let image = useRef('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/addcar',{
                name:name.current.value,
                fuelType:fuelType.current.value,
                transmission:transmission.current.value,
                seatingCapacity:seatingCapacity.current.value,
                image: image.current.files[0],
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(response){
                alert('Car added successfully');
                name.current.value = '';
                fuelType.current.value = '';
                transmission.current.value = '';
                seatingCapacity.current.value = '';
                image.current.value = '';
            }
        }catch(err){
            console.log(err);
        }
    }
    return <>
        <Header></Header>
        <div className="formContainer" onSubmit={handleSubmit}>
            <form className="form">
                <p className="form-title">Add Car from here...</p>
                <div className="input-container">
                    <input type="text" placeholder="Enter car name" ref={name}/>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Enter fuel type" ref={fuelType}/>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Enter transmission" ref={transmission}/>
                </div>
                <div className="input-container">
                    <input type="number" placeholder="Enter seating capacity" ref={seatingCapacity}/>
                </div>
                <div className="input-container">
                    <input type="file" accept="image/*" ref={image}/>
                </div>
                <button type="submit" className="submit">
                <IoIosAddCircle size={22}/>
                </button>
            </form>
        </div>
    </>
}
export default AddCar;