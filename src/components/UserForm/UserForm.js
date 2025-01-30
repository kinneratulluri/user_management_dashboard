import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm = ({ onAddUser, onUpdateUser, editingUser, setEditingUser }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",  // Department will be editable as text input
    });

    useEffect(() => {
        if (editingUser) {
            setFormData({
                firstName: editingUser.name.split(' ')[0],
                lastName: editingUser.name.split(' ')[1],
                email: editingUser.email,
                department: editingUser.company.name || "",  // Fetch department from company.name
            });
        } else {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                department: "",  // Default to empty string
            });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, department } = formData;
        if (!firstName || !lastName || !email || !department) {
            alert("Please fill in all fields.");
            return;
        }

        if (editingUser) {
            onUpdateUser({ ...editingUser, name: `${firstName} ${lastName}`, email, company: { name: department } });
        } else {
            onAddUser({ name: `${firstName} ${lastName}`, email, company: { name: department } });
        }
        setFormData({ firstName: "", lastName: "", email: "", department: "" });
        setEditingUser(null);
    };

    return (
        <div className="user-form">
            <h2>{editingUser ? "Edit User" : "Add User"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{editingUser ? "Update" : "Add"}</button>
                {editingUser && (
                    <button type="button" onClick={() => setEditingUser(null)}>
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
};

export default UserForm;