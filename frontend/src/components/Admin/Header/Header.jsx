import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
const Header = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return <>
    
        <header className="d-flex flex-wrap justify-content-center py-3 border-bottom header">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="../../../../public/images/logo.png" className="logo"/>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/viewcar" className="nav-link">View Cars</Link></li>
                <li className="nav-item"><Link to="/addcar" className="nav-link">Add Cars</Link></li>
                <li className="nav-item"><Link to="/viewusers" className="nav-link">View Users</Link></li>
                <li className="nav-item"><Link to="/viewrentals" className="nav-link">View Rentals</Link></li>
                <li className="nav-item"><Link className="nav-link" onClick={handleLogOut}>Logout <IoMdLogOut /></Link></li>
            </ul>
        </header>
    </>
}
export default Header;