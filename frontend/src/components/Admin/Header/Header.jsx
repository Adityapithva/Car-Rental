import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return <>
        <header className="d-flex flex-wrap justify-content-center py-3 border-bottom header">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="../../../../public/images/logo.png" className="logo"/>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
                <li className="nav-item"><Link to="/viewcar" className="nav-link">View Cars</Link></li>
                <li className="nav-item"><Link to="/addcar" className="nav-link">Add Cars</Link></li>
                <li className="nav-item"><a href="#" className="nav-link">View Users</a></li>
            </ul>
        </header>
    </>
}
export default Header;