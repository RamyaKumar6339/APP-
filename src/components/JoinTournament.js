
import React, { useState } from 'react';
import axios from 'axios';

const JoinTournament = () => {
  const [formData, setFormData] = useState({
    tournament: '',
    first_name: '',
    last_name: '',
    email: '',
    date_of_birth: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    try {
      // Send the token in the Authorization header
      await axios.post('http://localhost:8000/api/participants/', formData, {
        headers: {
          'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0MTM2MTcxLCJpYXQiOjE3MjM1MzEzNzEsImp0aSI6IjNkMzM5M2E4NTA0MzQ3Y2NhZTk5YjA1MzEyY2ZiMGM4IiwidXNlcl9pZCI6MX0.SCG4GUkv3umHnNYHYZ7oskoRC1p4yq68TVVZ2H03S7M"
          }`,
        },
      });
      setSuccessMessage('Successfully joined the tournament!');
      setErrorMessage('');
      setFormData({
        tournament: '',
        first_name: '',
        last_name: '',
        email: '',
        date_of_birth: '',
      });
    } catch (error) {
      console.error('There was an error!', error);
      setErrorMessage('Failed to join the tournament. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleCloseMessage = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <div style={styles.container}>
      <h2>Join Tournament</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Select Tournament:<br />
          <select
            name="tournament"
            value={formData.tournament}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select a tournament</option>
            <option value="tournament1">Spring Chess Open</option>
            <option value="tournament2">Summer Chess Classic</option>
            <option value="tournament3">Autumn Chess Classic</option>
            <option value="tournament4">Winter Chess Trophy</option>
            <option value="tournament5">Spring Invitational Tournament</option>
            <option value="tournament6">International Chess Showdown</option>
            <option value="tournament7">Holiday Chess Challenge</option>
            {/* Add more tournament options here */}
          </select>
        </label>
        <label>
          First Name:<br />
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Last Name:<br />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Date of Birth:<br />
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.submitButton}>
          Join Tournament
        </button>
      </form>
      {(successMessage || errorMessage) && (
        <div style={styles.messageContainer}>
          {successMessage && (
            <div style={styles.successMessage}>
              {successMessage}
              <button style={styles.closeButton} onClick={handleCloseMessage}>×</button>
            </div>
          )}
          {errorMessage && (
            <div style={styles.errorMessage}>
              {errorMessage}
              <button style={styles.closeButton} onClick={handleCloseMessage}>×</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '98%',
    marginTop: '0px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    width: '90%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  submitButton: {
    width: '100%',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
  },
  messageContainer: {
    marginTop: '10px',
  },
  successMessage: {
    color: 'green',
    fontSize: '16px',
    position: 'relative',
    paddingRight: '30px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '16px',
    position: 'relative',
    paddingRight: '30px',
  },
  closeButton: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    color: '#000',
    cursor: 'pointer',
  },
};

export default JoinTournament;
