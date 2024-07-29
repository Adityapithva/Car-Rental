import { useRef, useState } from 'react';
import './SignIn.css';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

const SignIn = () => {
    const name = useRef('');
    const email = useRef('');
    const password = useRef('');
    const [selectedRole, setSelectedRole] = useState(''); // Removed default value

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedRole) {
            alert('Please select a role (User)');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/register', {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
                role: selectedRole, 
            });

            if (response.status === 201) {
                alert('User registered successfully');
                name.current.value = '';
                email.current.value = '';
                password.current.value = '';
                setSelectedRole('');
                <Navigate to='/login'></Navigate>;
            }
        } catch (err) {
            alert('Error registering user');
        }
    };

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-title">Create an Account</p>
                    <div className="input-container">
                        <input type="text" placeholder="Enter name" ref={name} />
                    </div>
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
                                name="role" 
                                value="user"
                                checked={selectedRole === 'user'} 
                                onChange={setSelectedRole}
                            />
                            <span className="name">User</span>
                        </label>
                    </div>
                    <button type="submit" className="submit">
                        Sign Up
                    </button>
                    <p className="signup-link">
                        Already have account?
                        <Link to="/login">Log In</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignIn;
