import Header from '../Header/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewUsers.css';
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
const ViewUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/viewusers');
                if (response.status === 200) {
                    setUsers(response.data);
                    console.log(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchUsers();
    }, []);

    const deleteUser = async(userId) => {
        try{
            const response = await axios.delete(`http://localhost:3000/viewusers/${userId}`);
            if(response.status === 200){
                setUsers(users.filter(user => user._id != userId));
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <Header />
            <div className='container mt-4'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            .filter(user => user.role !== 'admin')
                            .map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><MdOutlinePersonRemoveAlt1 size={25} onClick={() => deleteUser(user._id)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewUsers;
