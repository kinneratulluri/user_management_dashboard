import React, { useState, useEffect } from 'react';
import './UserList.css';
import Pagination from '../Pagination/Pagination';
import UserForm from '../UserForm/UserForm'; // Import the UserForm component
import { toast } from 'react-toastify'; // Import the toast function from react-toastify

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [isAddingUser, setIsAddingUser] = useState(false); // State for showing/hiding the form
    const [editingUser, setEditingUser] = useState(null); // State to track the user being edited
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.map((user) => ({ ...user, id: user.id }))); // Ensure unique IDs
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Failed to fetch users. Please try again later.");
            }
        };

        fetchUsers();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleAddUser = async (newUser) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {  // Use correct API URL for adding a user
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            if (!response.ok) {
                throw new Error(`Error adding user: ${response.status}`);
            }
            const data = await response.json();
            setUsers([...users, data]);
            setIsAddingUser(false); // Hide the form after adding
            toast.success("User created successfully!"); // Success toast for creation
        } catch (err) {
            console.error("Error adding user:", err);
            setError("Failed to add user. Please try again later.");
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { // Use correct API URL for deleting
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Error deleting user: ${response.status}`);
            }
            setUsers(users.filter((user) => user.id !== id));
            toast.error("User deleted successfully!"); // Error toast for deletion
        } catch (err) {
            console.error("Error deleting user:", err);
            setError("Failed to delete user. Please try again later.");
        }
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setIsAddingUser(true); // Show the form in edit mode
    };

    const handleUpdateUser = async (updatedUser) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, {  // Use correct API URL for updating
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            if (!response.ok) {
                throw new Error(`Error updating user: ${response.status}`);
            }
            const data = await response.json();
            setUsers(users.map((user) => (user.id === data.id ? data : user)));
            setEditingUser(null);
            setIsAddingUser(false);
            toast.info("User updated successfully!"); // Info toast for update
        } catch (err) {
            console.error("Error updating user:", err);
            setError("Failed to update user. Please try again later.");
        }
    };

    return (
        <div className="user-list">
            {error && <div className="error-message">{error}</div>} {/* Display error message */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name.split(' ')[0]}</td>
                            <td>{user.name.split(' ')[1]}</td>
                            <td>{user.email}</td>
                            <td>{user.company.name}</td> {/* Use company name as the department */}
                            <td>
                                <button onClick={() => handleEditUser(user)}>Edit</button> {/* Edit button */}
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Conditionally render the UserForm */}
            {isAddingUser && (
                <UserForm
                    onAddUser={handleAddUser}
                    onUpdateUser={handleUpdateUser}
                    editingUser={editingUser}
                    setEditingUser={setEditingUser}
                />
            )}
            {!isAddingUser && <button onClick={() => setIsAddingUser(true)}>Add User</button>}

            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default UserList;