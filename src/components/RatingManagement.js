
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function RatingManagement() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/ratings/'); // Adjust URL if needed
        setRatings(response.data.ratings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, []);

  if (loading) return <p>Loading ratings...</p>;
  if (error) return <p>Error fetching ratings: {error}</p>;

  return (
    <div style={styles.container}>
      <h2>User Ratings</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Rating</th>
            <th style={styles.th}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {ratings.length > 0 ? (
            ratings.map(rating => (
              <tr key={rating.id}>
                <td style={styles.td}>{rating.id}</td>
                <td style={styles.td}>{rating.rating}</td>
                <td style={styles.td}>{new Date(rating.created_at).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={styles.td}>No ratings available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "20px",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
};

export default RatingManagement;

//     borderBottom: "2px solid #ddd",
//     padding: "10px",
//     textAlign: "left",
//   },
//   td: {
//     borderBottom: "1px solid #ddd",
//     padding: "10px",
//   },
// };

// export default RatingManagement;
