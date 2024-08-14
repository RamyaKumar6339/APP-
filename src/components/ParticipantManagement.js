
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ParticipantManagement() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/participants/', {
        headers: {
          Authorization: `Bearer ${token}`, // Add Bearer token here
        },
      });
      
      setParticipants(response.data);
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>First Name</th>
            <th style={styles.th}>Last Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Date of Birth</th>
            <th style={styles.th}>Tournament</th>
          </tr>
        </thead>
        <tbody>
          {participants.length > 0 ? (
            participants.map(p => (
              <tr key={p.id}>
                <td style={styles.td}>{p.first_name}</td>
                <td style={styles.td}>{p.last_name}</td>
                <td style={styles.td}>{p.email}</td>
                <td style={styles.td}>{new Date(p.date_of_birth).toLocaleDateString()}</td>
                <td style={styles.td}>{p.tournament}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={styles.td} colSpan="5">No participants available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const Header = () => (
  <header style={styles.header}>
    <h2>Participant Management</h2>
  </header>
);

const styles = {
  container: {
    padding: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
    borderBottom: "2px solid #ddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    // textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
};

export default ParticipantManagement;
