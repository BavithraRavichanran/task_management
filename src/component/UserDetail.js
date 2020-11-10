import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function UserDetails(props) {

    // let intitialData = [
    //     { id: "1", name: 'Tania', email: 'floppydiskette@gmam', password: '56565' },
    //     { id: "2", name: 'Craig', email: 'siliconeidolon@gmail', password: '545454' },
    //     { id: "3", name: 'Ben', email: 'benisphere@gmail', password: '545454' },
    // ]
    const [users, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('https://5eddf15de36dd000166c7bf8.mockapi.io/users');
            console.log("result", result)
            setData(result.data);
        };
        GetData();
    }, []);

    // let usersData;
    // if (props.location.state) {
    //     usersData = props.location.state.users;
    // } else {
    //     usersData = intitialData
    // }
    // const [users, setUsers] = useState(usersData)

    const addUser = user => {
        props.history.push({
            pathname: '/adduser',
            state: { users }
        })

    }

    const editUser = user => {
        props.history.push({
            pathname: '/adduser',
            currentUser: user,
            // state: { users }
        })
    }
    const deleteUser = id => {
        axios.delete(`https://5eddf15de36dd000166c7bf8.mockapi.io/users/${id}`)
            .then((result) => {
                setData(users.filter(user => user.id !== id))

            });
               };

    return (<div >
        <h2>User Details</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="success" onClick={() => editUser(user)}>Edit</Button>
                                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>))
                ) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )}
            </tbody>
        </Table>

        <Button variant="primary" onClick={addUser}>Add User</Button>

    </div>)
}
export default UserDetails;