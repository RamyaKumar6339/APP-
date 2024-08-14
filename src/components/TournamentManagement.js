// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TournamentManagement() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [tournaments, setTournaments] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editingTournament, setEditingTournament] = useState(null);

//   useEffect(() => {
//     fetchTournaments();
//   }, []);

//   const fetchTournaments = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/tournaments/');
//       setTournaments(response.data);
//     } catch (error) {
//       console.error('Error fetching tournaments:', error);
//     }
//   };

//   const handleAddOrEdit = async () => {
//     if (editingTournament) {
//       try {
//         const response = await axios.put(`http://localhost:8000/api/tournaments/edit/${editingTournament.id}/`, {
//           name,
//           description,
//           start_date: startDate,
//           end_date: endDate,
//         });
//         setTournaments(tournaments.map(t => (t.id === editingTournament.id ? response.data : t)));
//       } catch (error) {
//         console.error('Error updating tournament:', error);
//       }
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8000/api/tournaments/create/', {
//           name,
//           description,
//           start_date: startDate,
//           end_date: endDate,
//         });
//         setTournaments([...tournaments, response.data]);
//       } catch (error) {
//         console.error('Error adding tournament:', error);
//       }
//     }
//     resetForm();
//     setShowModal(false);
//   };

//   const handleEdit = (tournament) => {
//     setEditingTournament(tournament);
//     setName(tournament.name);
//     setDescription(tournament.description);
//     setStartDate(tournament.start_date);
//     setEndDate(tournament.end_date);
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/tournaments/${id}/`);
//       setTournaments(tournaments.filter(t => t.id !== id));
//     } catch (error) {
//       console.error('Error deleting tournament:', error);
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setDescription('');
//     setStartDate('');
//     setEndDate('');
//     setEditingTournament(null);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h2>Tournament Management</h2>
//         <button onClick={() => setShowModal(true)} style={styles.addButton}>
//           Add Tournament
//         </button>
//       </div>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tournaments.map(t => (
//             <tr key={t.id}>
//               <td>{t.name}</td>
//               <td>{t.description}</td>
//               <td>{t.start_date}</td>
//               <td>{t.end_date}</td>
//               <td>
//                 <button onClick={() => handleEdit(t)} style={styles.editButton}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(t.id)} style={styles.deleteButton}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for adding/editing a tournament */}
//       {showModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modal}>
//             <h3 style={styles.modalHeader}>{editingTournament ? 'Edit Tournament' : 'Add Tournament'}</h3>
//             <div style={styles.form}>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Tournament Name"
//                 style={styles.input}
//               />
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Description"
//                 style={styles.textarea}
//               />
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 placeholder="Start Date"
//                 style={styles.input}
//               />
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 placeholder="End Date"
//                 style={styles.input}
//               />
//               <div style={styles.modalButtons}>
//                 <button onClick={handleAddOrEdit} style={styles.addButton}>
//                   {editingTournament ? 'Update Tournament' : 'Add Tournament'}
//                 </button>
//                 <button onClick={() => { resetForm(); setShowModal(false); }} style={styles.cancelButton}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "20px",
//     maxWidth: "100%",
//     margin: "0 auto",
//     backgroundColor: "#fff",
//     borderRadius: "5px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   th: {
//     borderBottom: "2px solid #ddd",
//     padding: "10px",
//   },
//   td: {
//     borderBottom: "1px solid #ddd",
//     padding: "10px",
//   },
//   addButton: {
//     padding: "10px",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//   },
//   editButton: {
//     padding: "10px",
//     backgroundColor: "blue",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//   },
//   deleteButton: {
//     padding: "10px",
//     backgroundColor: "#dc3545",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modal: {
//     backgroundColor: "#f8f9fa",
//     padding: "30px",
//     borderRadius: "8px",
//     width: "400px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     position: "relative",
//   },
//   modalHeader: {
//     marginBottom: "20px",
//     textAlign: "center",
//     color: "#343a40",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     padding: "12px",
//     margin: "8px 0",
//     borderRadius: "5px",
//     border: "1px solid #ced4da",
//     fontSize: "16px",
//   },
//   textarea: {
//     padding: "12px",
//     margin: "8px 0",
//     borderRadius: "5px",
//     border: "1px solid #ced4da",
//     fontSize: "16px",
//     height: "100px",
//     resize: "vertical",
//   },
//   modalButtons: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "20px",
//   },
//   cancelButton: {
//     padding: "10px",
//     backgroundColor: "#6c757d",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default TournamentManagement;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TournamentManagement() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tournaments, setTournaments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTournament, setEditingTournament] = useState(null);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tournaments/');
      setTournaments(response.data);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
    }
  };

  const handleAddOrEdit = async () => {
    if (editingTournament) {
      try {
        const response = await axios.put(`http://localhost:8000/api/tournaments/edit/${editingTournament.id}/`, {
          name,
          description,
          start_date: startDate,
          end_date: endDate,
        });
        setTournaments(tournaments.map(t => (t.id === editingTournament.id ? response.data : t)));
      } catch (error) {
        console.error('Error updating tournament:', error);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8000/api/tournaments/create/', {
          name,
          description,
          start_date: startDate,
          end_date: endDate,
        });
        setTournaments([...tournaments, response.data]);
      } catch (error) {
        console.error('Error adding tournament:', error);
      }
    }
    resetForm();
    setShowModal(false);
  };

  const handleEdit = (tournament) => {
    setEditingTournament(tournament);
    setName(tournament.name);
    setDescription(tournament.description);
    setStartDate(tournament.start_date);
    setEndDate(tournament.end_date);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/tournaments/${id}/`);
      setTournaments(tournaments.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting tournament:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setEditingTournament(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Tournament Management</h2>
        <button onClick={() => setShowModal(true)} style={styles.addButton}>
          Add Tournament
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map(t => (
            <tr key={t.id} style={styles.tableRow}>
              <td>{t.name}</td>
              <td>{t.description}</td>
              <td>{t.start_date}</td>
              <td>{t.end_date}</td>
              <td style={styles.actionButtons}>
                <button onClick={() => handleEdit(t)} style={styles.editButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(t.id)} style={styles.deleteButton}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding/editing a tournament */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalHeader}>{editingTournament ? 'Edit Tournament' : 'Add Tournament'}</h3>
            <div style={styles.form}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tournament Name"
                style={styles.input}
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                style={styles.textarea}
              />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
                style={styles.input}
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
                style={styles.input}
              />
              <div style={styles.modalButtons}>
                <button onClick={handleAddOrEdit} style={styles.addButton}>
                  {editingTournament ? 'Update Tournament' : 'Add Tournament'}
                </button>
                <button onClick={() => { resetForm(); setShowModal(false); }} style={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      padding: "20px", // Increased padding for more height
      backgroundColor: "#f8f9fa", // Optional: background color for better visibility
      borderBottom: "2px solid #ddd", // Optional: border to distinguish the header
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    // tableHeader: {
    //   backgroundColor: "#f8f9fa",
    //   borderBottom: "2px solid #ddd",
    // },
    tableHeader: {
        backgroundColor: "#f8f9fa",
        borderBottom: "2px solid #ddd",
        height: "40px", // Increase this value to adjust the height
        lineHeight: "40px", // Aligns text vertically in the center
        textAlign: "center", // Center-align text in the header
      },
    tableRow: {
      borderBottom: "14px solid #ddd",
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-around",
    },
    addButton: {
      padding: "10px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "5px",
    },
    editButton: {
      padding: "8px 12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "0 5px",
    },
    deleteButton: {
      padding: "8px 12px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "0 5px",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      backgroundColor: "#f8f9fa",
      padding: "30px",
      borderRadius: "8px",
      width: "400px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      position: "relative",
    },
    modalHeader: {
      marginBottom: "20px",
      textAlign: "center",
      color: "#343a40",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      padding: "12px",
      margin: "8px 0",
      borderRadius: "5px",
      border: "1px solid #ced4da",
      fontSize: "16px",
    },
    textarea: {
      padding: "12px",
      margin: "8px 0",
      borderRadius: "5px",
      border: "1px solid #ced4da",
      fontSize: "16px",
      height: "100px",
      resize: "vertical",
    },
    modalButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    cancelButton: {
      padding: "10px",
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  

export default TournamentManagement;
