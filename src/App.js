// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import UserDetails from './components/UserDetails';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Classes from './components/Classes';
import Welcome from './components/Welcome';
import Tournaments from './components/Tournaments'; 
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import Dashboard from './components/Dashboard';
import TournamentManagement from './components/TournamentManagement';
import ParticipantManagement from './components/ParticipantManagement';
import RatingManagement from './components/RatingManagement';
import ClassManagement from './components/ClassManagement';
import AnalyticsReports from './components/AnalyticsReports';
import Settings from './components/Settings';
import RatingPage from './components/RatingPage';
import Resourses from './components/Resourses';

import './App.css';
import JoinTournament from './components/JoinTournament';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/classes" element={<Classes />} /> {/* Corrected component to element */}
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tournamentmanagement" element={<Dashboard />} />
          <Route path="/classmanagement" element={<ClassManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/participantmanagement" element={<ParticipantManagement />} />
          <Route path="/analyticsreports" element={<AnalyticsReports />} />
          <Route path="/ratingmanagement" element={<RatingManagement />} />
          <Route path="/jointournamet" element={<JoinTournament />} />
          <Route path="/RatingPage" element={<RatingPage/>} />
          <Route path="/Resourses" element={<Resourses/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
