import { useRef, useState } from 'react';
import './SignIn.css';
import axios from 'axios';

const SignIn = () => {
    const name = useRef('');
    const email = useRef('');
    const password = useRef('');
    const [selectedRole, setSelectedRole] = useState(''); // State for the selected role
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedRole) {
            setMessage('Please select a role (User or Admin)');
            return; // Prevent submission if no role is selected
        }

        try {
            const response = await axios.post('http://localhost:3000/register', {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
                role: selectedRole, // Use the selectedRole state variable
            });

            if (response.status === 201) {
                setMessage('User registered successfully');
                name.current.value = '';
                email.current.value = '';
                password.current.value = '';
                setSelectedRole(''); // Clear selected role after successful registration
            }
        } catch (err) {
            setMessage('Error registering user');
        }
    };

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value); // Update state on radio button change
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
                        Sign Up
                    </button>
                    {message && <p>{message}</p>}
                    <p className="signup-link">
                        Already have account?
                        <a href="">Log In</a>
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignIn;
