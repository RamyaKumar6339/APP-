import React, { useState } from 'react';

const AddUser = ({ isOpen, onClose, onSave }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSave = () => {
        const newUser = { name, email, role };
        onSave(newUser);
        setName('');
        setEmail('');
        setRole('');
    };

    if (!isOpen) return null;

    return (
        <div style={styles.modal}>
            <div style={styles.modalContent}>
                <h3>Add User</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleSave} style={styles.saveButton}>Save</button>
                <button onClick={onClose} style={styles.cancelButton}>Cancel</button>
            </div>
        </div>
    );
};

const styles = {
    modal: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '40px ',
        borderRadius: '4px',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    saveButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '10px',
    },
    cancelButton: {
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

export default AddUser;
