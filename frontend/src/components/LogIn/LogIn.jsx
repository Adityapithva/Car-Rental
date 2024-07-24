import '../SignIn/SignIn.css';
import { useState,useRef } from 'react';
import axios from 'axios';
const LogIn = () => {
    let email = useRef('');
    let password = useRef('');
    let name = useRef('');
    const [selectedRole,setSelectedRole] = useState('');
    const [message,setMessage] = useState('');
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value); // Update state on radio button change
    };


    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/login',{
                name:name.current.value,
                email:email.current.value,
                password:password.current.value,
                role:selectedRole,
            });
            if(response.status === 200){
                setMessage('Login successful');
                localStorage.setItem('token',response.data.token);
            }
        }catch(err){
            setMessage('Invalid credentials');
            console.log(err);
        }
    }
    return <>
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Login to your Account</p>
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
                    Login
                </button>
                {message && <p>{message}</p>}
                <p className="signup-link">
                    no account?
                    <a href="">Sign Up</a>
                </p>
            </form>
        </div>
    </>
}
export default LogIn;