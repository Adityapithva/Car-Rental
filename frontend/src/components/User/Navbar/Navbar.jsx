import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return <>
        <header className="d-flex flex-wrap justify-content-center py-3 border-bottom header">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="../../../public/images/logo.png" className="logo"/>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/home" className="nav-link" aria-current="page">Home</Link></li>
                <li className="nav-item"><Link to="/fleet" className="nav-link">Fleet</Link></li>
                <li className="nav-item"><Link to="/aboutus" className="nav-link">About Us</Link></li>
                <li className="nav-item"><Link to="/team" className="nav-link">Team</Link></li>
                <li className="nav-item"><Link to="/contactus" className="nav-link">Contact Us</Link></li>
                <li className="nav-item"><Link to="/myrentals" className="nav-link">My Rentals</Link></li>
            </ul>
        </header>
    </>
}
export default Navbar;