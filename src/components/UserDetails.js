
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isAddButtonHover, setIsAddButtonHover] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleAddUser = async () => {
        try {
            const newUser = { name, email, password };
            const response = await axios.post('http://localhost:8000/api/users/create/', newUser);

            console.log('User added successfully:', response.data);
            fetchUsers();
            setIsAddModalOpen(false);
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setIsEditModalOpen(true);
    };

    const handleUpdateUser = async () => {
        try {
            const updatedUser = { name, email, password };
            await axios.put(`http://localhost:8000/api/users/${selectedUser.id}/update/`, updatedUser);

            console.log('User updated successfully');
            fetchUsers();
            setIsEditModalOpen(false);
            setSelectedUser(null);
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteClick = async (userId) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${userId}/delete/`);

            console.log('User deleted successfully');
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <button style={styles.backButton} onClick={handleBack}>
                    <FaArrowLeft />
                </button>
                <h2 style={styles.headerTitle}>Admin</h2>
            </header>
            <div style={styles.headerContent}>
                <h2>User Details</h2>
                <button
                    style={isAddButtonHover ? { ...styles.addButton, ...styles.addButtonHover } : styles.addButton}
                    onMouseEnter={() => setIsAddButtonHover(true)}
                    onMouseLeave={() => setIsAddButtonHover(false)}
                    onClick={() => setIsAddModalOpen(true)}
                >
                    Add User
                </button>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>ID</th>
                        <th style={styles.tableHeader}>username</th>
                        <th style={styles.tableHeader}>Email</th>
                        <th style={styles.tableHeader}>Password</th>
                        <th style={styles.tableHeader}>Edit</th>
                        <th style={styles.tableHeader}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} style={styles.tableRowHover}>
                            <td style={styles.tableCell}>{user.id}</td>
                            <td style={styles.tableCell}>{user.username}</td>
                            <td style={styles.tableCell}>{user.email}</td>
                            <td style={styles.tableCell}>{user.password}</td>
                            <td style={styles.tableCell}>
                                <button style={styles.editButton} onClick={() => handleEditClick(user)}>Edit</button>
                            </td>
                            <td style={styles.tableCell}>
                                <button style={styles.deleteButton} onClick={() => handleDeleteClick(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isAddModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>Add User</h2>
                        <form>
                            <div style={styles.formGroup}>
                                <label>Username:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <button type="button" style={styles.saveButton} onClick={handleAddUser}>
                                Save
                            </button>
                            <button type="button" style={styles.cancelButton} onClick={() => setIsAddModalOpen(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>Edit User</h2>
                        <form>
                            <div style={styles.formGroup}>
                                <label>Username:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <button type="button" style={styles.saveButton} onClick={handleUpdateUser}>
                                Update
                            </button>
                            <button type="button" style={styles.cancelButton} onClick={() => setIsEditModalOpen(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
       
        height:'90px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        backgroundColor:'#333'
    },
    backButton: {
        marginRight: '550px',
        padding: '5px 10px',
        cursor: 'pointer'
    },
    headerTitle: {
        color:'white',
        fontSize: '24px',
        margin: 0,
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    addButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    addButtonHover: {
        backgroundColor: '#45a049',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    tableHeader: {
        padding: '10px',
        backgroundColor: '#f2f2f2',
        // textAlign: 'left',
        borderBottom: '1px solid #ddd',
    },
    tableCell: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    },
    editButton: {
        padding: '5px 10px',
        backgroundColor: '#2196F3',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    deleteButton: {
        padding: '5px 10px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '4px',
        width: '400px',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '90%',
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    saveButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '10px',
    },
    cancelButton: {
        padding: '10px 20px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    tableRowHover: {
        cursor: 'pointer',
    }
};

export default UserDetails;
