import Common from '../Common/Common';
import Navbar from '../Navbar/Navbar';
import FunFacts from '../FunFact/FunFact';
import './AboutUs.css';
const AboutUs = () => {
    return <>
        <Navbar />
        <Common title='About Us'></Common>
        <div id='line'></div>
        <FunFacts></FunFacts>
        <div id='line'></div>
        <div className='fun-facts'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left-content">
                            <h2>Our Commitment<em> to you</em></h2>
                            <p>We believe in going the extra mile for our customers. Enjoy flexible rental options, competitive rates, and hassle-free booking. Our dedicated team is always ready to assist you with any questions or requests.
                                <br /><br />From compact city cars for urban adventures to spacious SUVs for family vacations, we have the perfect vehicle to suit your needs. Our fleet is meticulously maintained to guarantee your safety and comfort.</p>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="count-area-content">
                                    <div className="count-digit">100000</div>
                                    <div className="count-title">Miles driven</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="count-area-content">
                                    <div className="count-digit">1280</div>
                                    <div className="count-title">Happy clients</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="count-area-content">
                                    <div className="count-digit">12</div>
                                    <div className="count-title">Cities</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="count-area-content">
                                    <div className="count-digit">26</div>
                                    <div className="count-title">Cars</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div id='line'></div>
    </>
}

export default AboutUs
