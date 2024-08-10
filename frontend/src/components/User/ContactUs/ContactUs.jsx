import Navbar from "../Navbar/Navbar";
import Common from "../Common/Common";
import './ContactUs.css';
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <Common title='Contact Us' />
            <div id='line'></div>
            <div className="contact-information">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-item">
                                <FaPhone className="p" />
                                <h4>Phone</h4>
                                <p>+91 333 4040 5566</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <MdMarkEmailRead className="m" />
                                <h4>Email</h4>
                                <p>contact@company.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <FaLocationDot className="l" />
                                <h4>Location</h4>
                                <p>1234 Elm Street, Suite 567</p>
                                <p>Cityville, Gujarat, ZIP Code</p>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='line'></div>
        </>
    );
}

export default ContactUs;
