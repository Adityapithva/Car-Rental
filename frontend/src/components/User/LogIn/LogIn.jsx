import '../SignIn/SignIn.css';
import { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    let email = useRef('');
    let password = useRef('');
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();
    const [message,setMessage] = useState('');
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value); // Update state on radio button change
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email.current.value,
                password: password.current.value,
                role: selectedRole,
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                if (response.data.user.role === 'admin') {
                    navigate('/dashboard', { replace: true });
                } else {
                    navigate('/home', { replace: true });
                }
            }
        } catch (err) {
            console.log(err);
            setMessage(err.response.data.message); 
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Login to your Account</p>
                {message}
                <div className="input-container">
                    <input type="email" placeholder="Enter email" ref={email} />
                    <span></span>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Enter password" ref={password} />
                </div>
                <div className="radio-inputs">
                    <label className="radio">
                        <input
                            type="radio"
                            name="role" // Ensure all radio buttons share the same name for group behavior
                            value="user"
                            checked={selectedRole === 'user'} // Set checked based on state
                            onChange={handleRoleChange}
                        />
                        <span className="name">User</span>
                    </label>
                    <label className="radio">
                        <input
                            type="radio"
                            name="role"
                            value="admin"
                            checked={selectedRole === 'admin'} // Set checked based on state
                            onChange={handleRoleChange}
                        />
                        <span className="name">Admin</span>
                    </label>
                </div>
                <button type="submit" className="submit">
                    Login
                </button>
                <p className="signup-link">
                    No account?
                    <Link to="/">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default LogIn;
