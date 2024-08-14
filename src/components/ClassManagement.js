
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function ClassManagement() {
// //   const [classes, setClasses] = useState([]);
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [schedule, setSchedule] = useState('');
// //   const [trainer, setTrainer] = useState('');
// //   const [editingClass, setEditingClass] = useState(null);
// //   const [showForm, setShowForm] = useState(false);

// //   useEffect(() => {
// //     fetchClasses();
// //   }, []);

// //   const fetchClasses = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:8000/api/classes/');
// //       setClasses(response.data);
// //     } catch (error) {
// //       console.error('Error fetching classes:', error);
// //     }
// //   };

// //   const handleAddClass = async () => {
// //     if (!title || !description || !schedule || !trainer) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     try {
// //       await axios.post('http://localhost:8000/api/classes/create/', {
// //         title,
// //         description,
// //         schedule,
// //         trainer,
// //       });
// //       fetchClasses(); // Refresh the list of classes
// //       resetForm();
// //     } catch (error) {
// //       console.error('Error adding class:', error);
// //     }
// //   };

// //   const handleUpdateClass = async () => {
// //     if (!title || !description || !schedule || !trainer || !editingClass) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     try {
// //       await axios.put(`http://localhost:8000/api/classes/${editingClass.id}/update/`, {
// //         title,
// //         description,
// //         schedule,
// //         trainer,
// //       });
// //       fetchClasses(); // Refresh the list of classes
// //       resetForm();
// //     } catch (error) {
// //       console.error('Error updating class:', error);
// //     }
// //   };

// //   const handleDeleteClass = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:8000/api/classes/${id}/`);
// //       fetchClasses(); // Refresh the list of classes
// //     } catch (error) {
// //       console.error('Error deleting class:', error);
// //     }
// //   };

// //   const resetForm = () => {
// //     setTitle('');
// //     setDescription('');
// //     setSchedule('');
// //     setTrainer('');
// //     setEditingClass(null);
// //     setShowForm(false);
// //   };

// //   const startEditing = (classToEdit) => {
// //     setTitle(classToEdit.title);
// //     setDescription(classToEdit.description);
// //     setSchedule(classToEdit.schedule);
// //     setTrainer(classToEdit.trainer);
// //     setEditingClass(classToEdit);
// //     setShowForm(true);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.header}>
// //         <h2>Class Management</h2>
// //         <button onClick={() => setShowForm(true)} style={styles.addButton}>
// //           Add Class
// //         </button>
// //       </div>

// //       <table style={styles.table}>
// //         <thead>
// //           <tr>
// //             <th>Title</th>
// //             <th>Description</th>
// //             <th>Schedule</th>
// //             <th>Trainer</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {classes.length > 0 ? (
// //             classes.map(c => (
// //               <tr key={c.id}>
// //                 <td>{c.title}</td>
// //                 <td>{c.description}</td>
// //                 <td>{c.schedule}</td>
// //                 <td>{c.trainer}</td>
// //                 <td>
// //                   <button onClick={() => startEditing(c)} style={styles.editButton}>
// //                     Edit
// //                   </button>
// //                   <button onClick={() => handleDeleteClass(c.id)} style={styles.deleteButton}>
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="5">No classes available</td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>

// //       {showForm && (
// //         <div style={styles.modal}>
// //           <div style={styles.modalContent}>
// //             <h2>{editingClass ? 'Update Class' : 'Add Class'}</h2>
// //             <input
// //               type="text"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //               placeholder="Class Title"
// //               style={styles.input}
// //             />
// //             <textarea
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)}
// //               placeholder="Class Description"
// //               style={styles.textarea}
// //             />
// //             <input
// //               type="text"
// //               value={schedule}
// //               onChange={(e) => setSchedule(e.target.value)}
// //               placeholder="Class Schedule"
// //               style={styles.input}
// //             />
// //             <input
// //               type="text"
// //               value={trainer}
// //               onChange={(e) => setTrainer(e.target.value)}
// //               placeholder="Class Trainer"
// //               style={styles.input}
// //             />
// //             <button
// //               onClick={editingClass ? handleUpdateClass : handleAddClass}
// //               style={styles.button}
// //             >
// //               {editingClass ? 'Update Class' : 'Add Class'}
// //             </button>
// //             <button onClick={resetForm} style={styles.cancelButton}>
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     padding: "20px",
// //     maxWidth: "100%",
// //     margin: "0 auto",
// //     backgroundColor: "#fff",
// //     borderRadius: "5px",
// //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //   },
// //   header: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: "20px",
// //   },
// //   addButton: {
// //     padding: "10px 20px",
// //     backgroundColor: "#4CAF50",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// //   table: {
// //     width: "100%",
// //     borderCollapse: "collapse",
// //   },
// //   th: {
// //     borderBottom: "2px solid #ddd",
// //     padding: "10px",
// //     textAlign: "left",
// //   },
// //   td: {
// //     borderBottom: "1px solid #ddd",
// //     padding: "10px",
// //   },
// //   editButton: {
// //     padding: "5px 10px",
// //     backgroundColor: "#FFA500",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //     marginRight: "10px",
// //   },
// //   deleteButton: {
// //     padding: "5px 10px",
// //     backgroundColor: "#FF4500",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// //   modal: {
// //     position: "fixed",
// //     top: "0",
// //     left: "0",
// //     width: "100%",
// //     height: "100%",
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   modalContent: {
// //     backgroundColor: "#fff",
// //     padding: "40px",
// //     borderRadius: "5px",
// //     maxWidth: "500px",
// //     width: "100%",
// //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //   },
// //   input: {
// //     display: "block",
// //     width: "100%",
// //     padding: "10px",
// //     marginBottom: "10px",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //   },
// //   textarea: {
// //     display: "block",
// //     width: "100%",
// //     padding: "10px",
// //     marginBottom: "10px",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //     height: "100px",
// //   },
// //   button: {
// //     padding: "10px",
// //     backgroundColor: "#4CAF50",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //     marginRight: "10px",
// //   },
// //   cancelButton: {
// //     padding: "10px",
// //     backgroundColor: "#f44336",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// // };

// // export default ClassManagement;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ClassManagement() {
//   const [classes, setClasses] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [schedule, setSchedule] = useState('');
//   const [trainer, setTrainer] = useState('');
//   const [editingClass, setEditingClass] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   const fetchClasses = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/classes/');
//       setClasses(response.data);
//     } catch (error) {
//       console.error('Error fetching classes:', error);
//     }
//   };

//   const handleAddClass = async () => {
//     if (!title || !description || !schedule || !trainer) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8000/api/classes/create/', {
//         title,
//         description,
//         schedule,
//         trainer,
//       });
//       fetchClasses(); // Refresh the list of classes
//       resetForm();
//     } catch (error) {
//       console.error('Error adding class:', error);
//     }
//   };

//   const handleUpdateClass = async () => {
//     if (!title || !description || !schedule || !trainer || !editingClass) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:8000/api/classes/${editingClass.id}/update/`, {
//         title,
//         description,
//         schedule,
//         trainer,
//       });
//       fetchClasses(); // Refresh the list of classes
//       resetForm();
//     } catch (error) {
//       console.error('Error updating class:', error);
//     }
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setSchedule('');
//     setTrainer('');
//     setEditingClass(null);
//     setShowForm(false);
//   };

//   const startEditing = (classToEdit) => {
//     setTitle(classToEdit.title);
//     setDescription(classToEdit.description);
//     setSchedule(classToEdit.schedule);
//     setTrainer(classToEdit.trainer);
//     setEditingClass(classToEdit);
//     setShowForm(true);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h2>Class Management</h2>
//         <button onClick={() => setShowForm(true)} style={styles.addButton}>
//           Add Class
//         </button>
//       </div>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Schedule</th>
//             <th>Trainer</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {classes.length > 0 ? (
//             classes.map(c => (
//               <tr key={c.id}>
//                 <td>{c.title}</td>
//                 <td>{c.description}</td>
//                 <td>{c.schedule}</td>
//                 <td>{c.trainer}</td>
//                 <td>
//                   <button onClick={() => startEditing(c)} style={styles.editButton}>
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No classes available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {showForm && (
//         <div style={styles.modal}>
//           <div style={styles.modalContent}>
//             <h2>{editingClass ? 'Update Class' : 'Add Class'}</h2>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Class Title"
//               style={styles.input}
//             />
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Class Description"
//               style={styles.textarea}
//             />
//             <input
//               type="text"
//               value={schedule}
//               onChange={(e) => setSchedule(e.target.value)}
//               placeholder="Class Schedule"
//               style={styles.input}
//             />
//             <input
//               type="text"
//               value={trainer}
//               onChange={(e) => setTrainer(e.target.value)}
//               placeholder="Class Trainer"
//               style={styles.input}
//             />
//             <button
//               onClick={editingClass ? handleUpdateClass : handleAddClass}
//               style={styles.button}
//             >
//               {editingClass ? 'Update Class' : 'Add Class'}
//             </button>
//             <button onClick={resetForm} style={styles.cancelButton}>
//               Cancel
//             </button>
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
//   addButton: {
//     padding: "10px 20px",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   th: {
//     borderBottom: "2px solid #ddd",
//     padding: "10px",
//     textAlign: "left",
//   },
//   td: {
//     borderBottom: "1px solid #ddd",
//     padding: "10px",
//   },
//   editButton: {
//     padding: "5px 10px",
//     backgroundColor: "blue",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   modal: {
//     position: "fixed",
//     top: "0",
//     left: "0",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: "40px",
//     borderRadius: "5px",
//     maxWidth: "500px",
//     width: "100%",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//   },
//   input: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   textarea: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     height: "100px",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginRight: "10px",
//   },
//   cancelButton: {
//     padding: "10px",
//     backgroundColor: "#f44336",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default ClassManagement;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClassManagement() {
  const [classes, setClasses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [schedule, setSchedule] = useState('');
  const [trainer, setTrainer] = useState('');
  const [editingClass, setEditingClass] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/classes/');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddClass = async () => {
    if (!title || !description || !schedule || !trainer) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/classes/create/', {
        title,
        description,
        schedule,
        trainer,
      });
      fetchClasses(); // Refresh the list of classes
      resetForm();
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  const handleUpdateClass = async () => {
    if (!title || !description || !schedule || !trainer || !editingClass) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.put(`http://localhost:8000/api/classes/${editingClass.id}/update/`, {
        title,
        description,
        schedule,
        trainer,
      });
      fetchClasses(); // Refresh the list of classes
      resetForm();
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSchedule('');
    setTrainer('');
    setEditingClass(null);
    setShowForm(false);
  };

  const startEditing = (classToEdit) => {
    setTitle(classToEdit.title);
    setDescription(classToEdit.description);
    setSchedule(classToEdit.schedule);
    setTrainer(classToEdit.trainer);
    setEditingClass(classToEdit);
    setShowForm(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Class Management</h2>
        <button onClick={() => setShowForm(true)} style={styles.addButton}>
          Add Class
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Schedule</th>
            <th style={styles.th}>Trainer</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.length > 0 ? (
            classes.map(c => (
              <tr key={c.id} style={styles.tableRow}>
                <td style={styles.td}>{c.title}</td>
                <td style={styles.td}>{c.description}</td>
                <td style={styles.td}>{c.schedule}</td>
                <td style={styles.td}>{c.trainer}</td>
                <td style={styles.td}>
                  <button onClick={() => startEditing(c)} style={styles.editButton}>
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={styles.noData}>No classes available</td>
            </tr>
          )}
        </tbody>
      </table>

      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>{editingClass ? 'Update Class' : 'Add Class'}</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Class Title"
              style={styles.input}
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Class Description"
              style={styles.textarea}
            />
            <input
              type="text"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              placeholder="Class Schedule"
              style={styles.input}
            />
            <input
              type="text"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              placeholder="Class Trainer"
              style={styles.input}
            />
            <button
              onClick={editingClass ? handleUpdateClass : handleAddClass}
              style={styles.button}
            >
              {editingClass ? 'Update Class' : 'Add Class'}
            </button>
            <button onClick={resetForm} style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    fontWeight: "bold",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
  tableRow: {
    transition: "background-color 0.3s",
  },
  tableRowHover: {
    backgroundColor: "#f9f9f9",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  noData: {
    textAlign: "center",
    padding: "20px",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "5px",
    maxWidth: "500px",
    width: "100%",
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
  textarea: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  cancelButton: {
    padding: "10px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ClassManagement;
