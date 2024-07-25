import Header from '../Header/Header';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './ViewUsers.css';
const ViewUsers = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const response = await axios.get('http://localhost:3000/viewusers');
                if(response.status === 200){
                    setUsers(response.data);
                }
            }catch(err){
                console.log(err);
            }
        };
        fetchUsers();
    },[]);
    return <>
        <Header></Header>
        <div className='userContainer'>
            {users.map((user) => {
                if(user.role !== 'admin'){
                    return (
                        <div className='userCard' key={user._id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.role}</p>
                        </div>
                    );
                }
            })}
        </div>
    </>
}
export default ViewUsers;