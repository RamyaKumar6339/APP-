// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Replace with your API URL
// const API_URL = 'http://localhost:8000/ratings/';

// const RatingPage = () => {
//   const [ratings, setRatings] = useState([]);
//   const [averageRating, setAverageRating] = useState(0);
//   const [newRating, setNewRating] = useState('');
  
//   useEffect(() => {
//     fetchRatings();
//   }, []);
  
//   const fetchRatings = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setRatings(response.data.ratings);
//       setAverageRating(response.data.average_rating);
//     } catch (error) {
//       console.error('Error fetching ratings:', error);
//     }
//   };
  
//   const handleAddRating = async () => {
//     if (newRating < 1 || newRating > 5) {
//       alert('Rating must be between 1 and 5');
//       return;
//     }
    
//     try {
//       await axios.post(`${API_URL}create/`, { rating: newRating });
//       setNewRating('');
//       fetchRatings();
//     } catch (error) {
//       console.error('Error adding rating:', error);
//     }
//   };
  
//   const handleDeleteRating = async (id) => {
//     try {
//       await axios.delete(`${API_URL}${id}/delete/`);
//       fetchRatings();
//     } catch (error) {
//       console.error('Error deleting rating:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Ratings</h1>
//       <div>
//         <h2>Average Rating: {averageRating.toFixed(1)}</h2>
//         <div>
//           <input
//             type="number"
//             min="1"
//             max="5"
//             value={newRating}
//             onChange={(e) => setNewRating(e.target.value)}
//             placeholder="Rate (1-5)"
//             style={{ padding: '10px', marginRight: '10px' }}
//           />
//           <button onClick={handleAddRating} style={{ padding: '10px' }}>Add Rating</button>
//         </div>
//       </div>
//       <ul>
//         {ratings.map((rating) => (
//           <li key={rating.id}>
//             {rating.rating} (Created at: {new Date(rating.created_at).toLocaleString()})
//             <button
//               onClick={() => handleDeleteRating(rating.id)}
//               style={{ marginLeft: '10px', padding: '5px' }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RatingPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Replace with your API URL
const API_URL = 'http://localhost:8000/ratings/';

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Box = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const AverageRating = styled.h2`
  font-size: 1.5rem;
  color: #444;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 80px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const RatingList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RatingItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #e53935;
  }
`;

const RatingPage = () => {
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [newRating, setNewRating] = useState('');
  
  useEffect(() => {
    fetchRatings();
  }, []);
  
  const fetchRatings = async () => {
    try {
      const response = await axios.get(API_URL);
      setRatings(response.data.ratings);
      setAverageRating(response.data.average_rating);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };
  
  const handleAddRating = async () => {
    if (newRating < 1 || newRating > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }
    
    try {
      await axios.post(`${API_URL}create/`, { rating: newRating });
      setNewRating('');
      fetchRatings();
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  };
  
  const handleDeleteRating = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/delete/`);
      fetchRatings();
    } catch (error) {
      console.error('Error deleting rating:', error);
    }
  };

  return (
    <Container>
      <Box>
      <Title>Ratings</Title>
        <AverageRating>Average Rating: {averageRating.toFixed(1)}</AverageRating>
        <InputGroup>
          <Input
            type="number"
            min="1"
            max="5"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
            placeholder="Rate (1-5)"
          />
          <Button onClick={handleAddRating}>Add Rating</Button>
        </InputGroup>
      </Box>
      <RatingList>
        {ratings.map((rating) => (
          <RatingItem key={rating.id}>
            {rating.rating} (Created at: {new Date(rating.created_at).toLocaleString()})
            <DeleteButton onClick={() => handleDeleteRating(rating.id)}>Delete</DeleteButton>
          </RatingItem>
        ))}
      </RatingList>
    </Container>
  );
};

export default RatingPage;
