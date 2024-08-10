import FunFacts from '../FunFact/FunFact';
import Navbar from '../Navbar/Navbar';
import './Main.css';
const Main = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <div className="overlay">
                    <h1 className='text'>WELCOME TO <span id='title'>CAR-RENTAL</span></h1>
                    <p className='text'>our journey starts here. Discover a wide range of cars available for rent at unbeatable prices. Whether youre looking for a compact car for city driving, a luxury vehicle for a special occasion, or an SUV for a family trip, weve got you covered.</p>
                </div>
            </div>
            <div id='line'></div>
            <FunFacts></FunFacts>
            <div id='line'></div>
        </>
    );
};

export default Main;