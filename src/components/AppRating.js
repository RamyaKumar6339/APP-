import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppRating() {
  const [rating, setRating] = useState('');
  const [userRating, setUserRating] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchAverageRating();
  }, []);

  const fetchAverageRating = async () => {
    try {
      const response = await axios.get('/api/ratings/');
      setAverageRating(response.data.averageRating);
    } catch (error) {
      console.error('Error fetching average rating:', error);
    }
  };

  const handleSubmit = async () => {
    if (!rating || rating < 1 || rating > 5) {
      alert('Please provide a rating between 1 and 5');
      return;
    }

    try {
      await axios.post('/api/ratings/', { rating });
      fetchAverageRating(); // Refresh average rating
      setRating('');
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Rate Our App</h2>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rate (1-5)"
        style={styles.input}
        min="1"
        max="5"
      />
      <button onClick={handleSubmit} style={styles.button}>
        Submit Rating
      </button>
      <div style={styles.averageRating}>
        <h3>Average Rating: {averageRating.toFixed(1)}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  averageRating: {
    marginTop: "20px",
  }
};

export default AppRating;
