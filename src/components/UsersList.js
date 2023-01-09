import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import UserDataService from "../services/users.services";

const UserList = ({ getUserId }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const data = await UserDataService.getAllUsers();
        console.log(data);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const deleteHandler = async (id) => {
        await UserDataService.deleteUser(id);
        getUsers();
    }

    return (
        <>
            <div className="mb-2">
                <Button variant="dark edit" onClick={getUsers}>
                    Refresh List
                </Button>
            </div>

            {/* <pre>{JSON.stringify(users, undefined, 2)}</pre>} */}

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default UserList;