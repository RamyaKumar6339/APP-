
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Inline CSS styling
const containerStyle = {
  padding: '20px',
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  fontSize: '2rem',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px',
//   textAlign: 'left',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
  marginTop: '20px',
};

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student data from the API
    axios.get('http://localhost:8000/api/students/')
      .then(response => {
        setStudents(response.data);
      })
      .catch(err => {
        setError('Failed to fetch student data');
        console.error(err);
      });
  }, []);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        Student Details
      </header>
      {error && <p style={errorStyle}>{error}</p>}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Class</th>
            <th style={thStyle}>Joined At</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={tdStyle}>{student.name}</td>
              <td style={tdStyle}>{student.email}</td>
              <td style={tdStyle}>{student.class_name}</td>
              <td style={tdStyle}>{new Date(student.joined_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
