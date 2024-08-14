// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate

// // function AdminPage() {
// //   const [tournaments, setTournaments] = useState([]);
// //   const [participants, setParticipants] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [selectedSection, setSelectedSection] = useState("dashboard");
// //   const navigate = useNavigate(); // Initialize navigate

// //   const handleAddTournament = (tournament) => {
// //     setTournaments([...tournaments, tournament]);
// //     alert(`Tournament "${tournament}" added!`);
// //   };

// //   const handleAddParticipant = (participant) => {
// //     setParticipants([...participants, participant]);
// //     alert(`Participant "${participant}" added!`);
// //   };

// //   const handleAddUser = (user) => {
// //     setUsers([...users, user]);
// //     alert(`User "${user}" added!`);
// //   };

// //   const handleLogout = () => {
// //     // Logic for logging out can go here
// //     navigate("/"); // Navigate to the WelcomePage after logout
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <nav style={styles.navbar}>
// //         <button onClick={() => setSelectedSection("dashboard")} style={styles.navButton}>
// //           Dashboard
// //         </button>
// //         <button onClick={() => setSelectedSection("tournaments")} style={styles.navButton}>
// //           Tournament Management
// //         </button>
// //         <button onClick={() => setSelectedSection("participants")} style={styles.navButton}>
// //           Participant Management
// //         </button>
// //         <button onClick={() => setSelectedSection("users")} style={styles.navButton}>
// //           User Management
// //         </button>
// //         <button onClick={() => setSelectedSection("classes")} style={styles.navButton}>
// //           Class Management
// //         </button>
// //         <button onClick={() => setSelectedSection("matches")} style={styles.navButton}>
// //           Match Management
// //         </button>
// //         <button onClick={() => setSelectedSection("ratings")} style={styles.navButton}>
// //           Rating Management
// //         </button>
// //         <button onClick={() => setSelectedSection("analytics")} style={styles.navButton}>
// //           Analytics & Reports
// //         </button>
// //         <button onClick={() => setSelectedSection("settings")} style={styles.navButton}>
// //           Settings
// //         </button>
// //         <button onClick={handleLogout} style={styles.logoutButton}>
// //           Logout
// //         </button>
// //       </nav>

// //       <main style={styles.main}>
// //         {selectedSection === "dashboard" && <Dashboard />}
// //         {selectedSection === "tournaments" && <TournamentManagement onAdd={handleAddTournament} />}
// //         {selectedSection === "participants" && <ParticipantManagement onAdd={handleAddParticipant} />}
// //         {selectedSection === "users" && <UserManagement onAdd={handleAddUser} />}
// //         {selectedSection === "classes" && <ClassManagement />}
// //         {selectedSection === "matches" && <MatchManagement />}
// //         {selectedSection === "ratings" && <RatingManagement />}
// //         {selectedSection === "analytics" && <AnalyticsReports />}
// //         {selectedSection === "settings" && <Settings />}
// //       </main>
// //     </div>
// //   );
// // }

// // function Dashboard() {
// //   return <div style={styles.section}>Welcome to the Chess Academy Admin Dashboard</div>;
// // }

// // function TournamentManagement({ onAdd }) {
// //   const [tournament, setTournament] = useState("");

// //   return (
// //     <div style={styles.section}>
// //       <h2>Tournament Management</h2>
// //       <input
// //         type="text"
// //         value={tournament}
// //         onChange={(e) => setTournament(e.target.value)}
// //         placeholder="Tournament Name"
// //         style={styles.input}
// //       />
// //       <button onClick={() => onAdd(tournament)} style={styles.button}>
// //         Add Tournament
// //       </button>
// //     </div>
// //   );
// // }

// // function ParticipantManagement({ onAdd }) {
// //   const [participant, setParticipant] = useState("");

// //   return (
// //     <div style={styles.section}>
// //       <h2>Participant Management</h2>
// //       <input
// //         type="text"
// //         value={participant}
// //         onChange={(e) => setParticipant(e.target.value)}
// //         placeholder="Participant Name"
// //         style={styles.input}
// //       />
// //       <button onClick={() => onAdd(participant)} style={styles.button}>
// //         Add Participant
// //       </button>
// //     </div>
// //   );
// // }

// // function UserManagement({ onAdd }) {
// //   const [user, setUser] = useState("");

// //   return (
// //     <div style={styles.section}>
// //       <h2>User Management</h2>
// //       <input
// //         type="text"
// //         value={user}
// //         onChange={(e) => setUser(e.target.value)}
// //         placeholder="User Name"
// //         style={styles.input}
// //       />
// //       <button onClick={() => onAdd(user)} style={styles.button}>
// //         Add User
// //       </button>
// //     </div>
// //   );
// // }

// // function ClassManagement() {
// //   return (
// //     <div style={styles.section}>
// //       <h2>Class Management</h2>
// //       {/* Add class management features here */}
// //     </div>
// //   );
// // }

// // function MatchManagement() {
// //   return (
// //     <div style={styles.section}>
// //       <h2>Match Management</h2>
// //       {/* Add match management features here */}
// //     </div>
// //   );
// // }

// // function RatingManagement() {
// //   return (
// //     <div style={styles.section}>
// //       <h2>Rating Management</h2>
// //       {/* Add rating management features here */}
// //     </div>
// //   );
// // }

// // function AnalyticsReports() {
// //   return (
// //     <div style={styles.section}>
// //       <h2>Analytics & Reports</h2>
// //       {/* Add analytics and report features here */}
// //     </div>
// //   );
// // }

// // function Settings() {
// //   return (
// //     <div style={styles.section}>
// //       <h2>Settings</h2>
// //       {/* Add settings features here */}
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     display: "flex",
// //     fontFamily: "Arial, sans-serif",
// //     height: "100vh",
// //     backgroundColor: "#f4f4f4",
// //   },
// //   navbar: {
// //     width: "200px",
// //     backgroundColor: "#333",
// //     color: "#fff",
// //     padding: "20px",
// //     boxSizing: "border-box",
// //   },
// //   navButton: {
// //     display: "block",
// //     width: "100%",
// //     padding: "10px",
// //     backgroundColor: "#444",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     textAlign: "left",
// //     marginBottom: "10px",
// //     cursor: "pointer",
// //   },
// //   logoutButton: {
// //     display: "block",
// //     width: "100%",
// //     padding: "10px",
// //     backgroundColor: "#d9534f",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     textAlign: "left",
// //     marginBottom: "10px",
// //     cursor: "pointer",
// //   },
// //   main: {
// //     flexGrow: 1,
// //     padding: "20px",
// //     boxSizing: "border-box",
// //   },
// //   section: {
// //     backgroundColor: "#fff",
// //     padding: "20px",
// //     borderRadius: "5px",
// //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //   },
// //   input: {
// //     padding: "10px",
// //     width: "100%",
// //     marginBottom: "10px",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //   },
// //   button: {
// //     padding: "10px",
// //     backgroundColor: "#4CAF50",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// // };

// // export default AdminPage;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Dashboard from "./Dashboard"; // Import the Dashboard component
// import TournamentManagement from './TournamentManagement';
// import ParticipantManagement from './ParticipantManagement';
// import UserManagement from './UserManagement';
// import ClassManagement from './ClassManagement';
// import MatchManagement from './MatchManagement';
// import RatingManagement from './RatingManagement';
// import AnalyticsReports from './AnalyticsReports';
// import Settings from './Settings';

// function AdminPage() {
//   const [tournaments, setTournaments] = useState([]);
//   const [participants, setParticipants] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedSection, setSelectedSection] = useState("dashboard");
//   const navigate = useNavigate(); // Initialize navigate

//   const handleAddTournament = (tournament) => {
//     setTournaments([...tournaments, tournament]);
//     alert(`Tournament "${tournament}" added!`);
//   };

//   const handleAddParticipant = (participant) => {
//     setParticipants([...participants, participant]);
//     alert(`Participant "${participant}" added!`);
//   };

//   const handleAddUser = (user) => {
//     setUsers([...users, user]);
//     alert(`User "${user}" added!`);
//   };

//   const handleLogout = () => {
//     // Logic for logging out can go here
//     navigate("/"); // Navigate to the WelcomePage after logout
//   };

//   return (
//     <div style={styles.container}>
//       <nav style={styles.navbar}>
//         <button onClick={() => setSelectedSection("dashboard")} style={styles.navButton}>
//           Dashboard
//         </button>
//         <button onClick={() => setSelectedSection("tournaments")} style={styles.navButton}>
//           Tournament Management
//         </button>
//         <button onClick={() => setSelectedSection("participants")} style={styles.navButton}>
//           Participant Management
//         </button>
//         <button onClick={() => setSelectedSection("users")} style={styles.navButton}>
//           User Management
//         </button>
//         <button onClick={() => setSelectedSection("classes")} style={styles.navButton}>
//           Class Management
//         </button>
//         <button onClick={() => setSelectedSection("matches")} style={styles.navButton}>
//           Match Management
//         </button>
//         <button onClick={() => setSelectedSection("ratings")} style={styles.navButton}>
//           Rating Management
//         </button>
//         <button onClick={() => setSelectedSection("analytics")} style={styles.navButton}>
//           Analytics & Reports
//         </button>
//         <button onClick={() => setSelectedSection("settings")} style={styles.navButton}>
//           Settings
//         </button>
//         <button onClick={handleLogout} style={styles.logoutButton}>
//           Logout
//         </button>
//       </nav>

//       <main style={styles.main}>
//         {selectedSection === "dashboard" && <Dashboard />}
//         {selectedSection === "tournaments" && <TournamentManagement onAdd={handleAddTournament} />}
//         {selectedSection === "participants" && <ParticipantManagement onAdd={handleAddParticipant} />}
//         {selectedSection === "users" && <UserManagement onAdd={handleAddUser} />}
//         {selectedSection === "classes" && <ClassManagement />}
//         {selectedSection === "matches" && <MatchManagement />}
//         {selectedSection === "ratings" && <RatingManagement />}
//         {selectedSection === "analytics" && <AnalyticsReports />}
//         {selectedSection === "settings" && <Settings />}
//       </main>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     fontFamily: "Arial, sans-serif",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   navbar: {
//     width: "200px",
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "20px",
//     boxSizing: "border-box",
//   },
//   navButton: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#444",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     textAlign: "left",
//     marginBottom: "10px",
//     cursor: "pointer",
//   },
//   logoutButton: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#d9534f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     textAlign: "left",
//     marginBottom: "10px",
//     cursor: "pointer",
//   },
//   main: {
//     flexGrow: 1,
//     padding: "20px",
//     boxSizing: "border-box",
//   },
//   section: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "5px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//   },
//   input: {
//     padding: "10px",
//     width: "100%",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default AdminPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import TournamentManagement from './TournamentManagement';
import ParticipantManagement from './ParticipantManagement';
import UserManagement from './UserDetails';
import ClassManagement from './ClassManagement';
// import MatchManagement from './MatchManagement';
import RatingManagement from './RatingManagement';
import AnalyticsReports from './AnalyticsReports';
import Settings from './Settings';
import StudentDetails from "./Studentdetails";

function AdminPage() {
  const [tournaments, setTournaments] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const navigate = useNavigate();

  const handleAddTournament = (tournament) => {
    setTournaments([...tournaments, tournament]);
    alert(`Tournament "${tournament}" added!`);
  };

  const handleDeleteTournament = (index) => {
    setTournaments(tournaments.filter((_, i) => i !== index));
    alert('Tournament deleted!');
  };

  const handleAddParticipant = (participant) => {
    setParticipants([...participants, participant]);
    alert(`Participant "${participant}" added!`);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
    alert(`User "${user}" added!`);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <button onClick={() => setSelectedSection("dashboard")} style={styles.navButton}>
          Dashboard
        </button>
        {/* <button onClick={() => setSelectedSection("tournaments")} style={styles.navButton}>
          Tournament Management
        </button> */}
        <button onClick={() => setSelectedSection("participants")} style={styles.navButton}>
          Participant Management
        </button>
        <button onClick={() => setSelectedSection("users")} style={styles.navButton}>
          User Management
        </button>
        {/* <button onClick={() => setSelectedSection("classes")} style={styles.navButton}>
          Class Management
        </button> */}
        <button onClick={() => setSelectedSection("students")} style={styles.navButton}>
          Student details
        </button>
        <button onClick={() => setSelectedSection("ratings")} style={styles.navButton}>
          Rating Management
        </button>
        {/* <button onClick={() => setSelectedSection("analytics")} style={styles.navButton}>
          Analytics & Reports
        </button>
        <button onClick={() => setSelectedSection("settings")} style={styles.navButton}>
          Settings
        </button> */}
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </nav>

      <main style={styles.main}>
        {selectedSection === "dashboard" && <Dashboard />}
        {selectedSection === "tournaments" && (
          <TournamentManagement 
            tournaments={tournaments} 
            onAdd={handleAddTournament} 
            onDelete={handleDeleteTournament} 
          />
        )}
        {selectedSection === "participants" && <ParticipantManagement onAdd={handleAddParticipant} />}
        {selectedSection === "users" && <UserManagement onAdd={handleAddUser} />}
        {/* {selectedSection === "classes" && <ClassManagement />} */}
        {selectedSection === "students" && <StudentDetails />}
        {selectedSection === "ratings" && <RatingManagement />}
        {/* {selectedSection === "analytics" && <AnalyticsReports />}
        {selectedSection === "settings" && <Settings />} */}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  navbar: {
    width: "200px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  },
  navButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textAlign: "left",
    marginBottom: "10px",
    cursor: "pointer",
  },
  logoutButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textAlign: "left",
    marginBottom: "10px",
    cursor: "pointer",
  },
  main: {
    flexGrow: 1,
    padding: "20px",
    boxSizing: "border-box",
  },
};

export default AdminPage;
