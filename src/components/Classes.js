
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinClassForm from './JoinClassForm';
import Modal from './Modal'; // Import the Modal component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Inline styles for simplicity
const containerStyle = {
  padding: '20px',
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '10px',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '2.5rem',
};

const searchStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  // maxWidth: '1000px',
  fontSize: '1rem',
  width: '50%',
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '20px',
};

const cardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '300px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const detailsStyle = {
  marginTop: '10px',
  fontSize: '0.9rem',
  color: '#333',
};

const joinButtonStyle = {
  backgroundColor: '#61dafb',
  border: 'none',
  padding: '10px 20px',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '1rem',
  marginTop: '10px',
};

const videoStyle = {
  width: '100%',
  height: '200px',
  marginTop: '10px',
};

const backButtonStyle = {
  backgroundColor: '#61dafb',
  border: 'none',
  padding: '10px 30px',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '1rem',
  width: '10%',
};

const Classes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const classes = [
    { 
      title: "Beginner's Chess", 
      description: "Learn the basics of chess, including the rules, moves, and strategies.", 
      schedule: ['Monday & Wednesday - 10:00 AM to 11:30 AM', 'Saturday - 2:00 PM to 3:30 PM'], 
      trainer: 'John Doe - Chess Master',
      videoUrl: 'https://www.youtube.com/embed/OCSbzArwB10?si=ip2msYec8v7dt0H1',
    },
    { 
      title: "Intermediate Chess", 
      description: "Enhance your skills with advanced strategies and tactics.", 
      schedule: ['Tuesday & Thursday - 11:00 AM to 12:30 PM', 'Sunday - 3:00 PM to 4:30 PM'], 
      trainer: 'Emily Johnson - FIDE Master',
      videoUrl: 'https://www.youtube.com/embed/goW1cFHaxtU?si=jSP7jEaEUtepEqHq',
    },
    { 
      title: "Advanced Chess", 
      description: "Master complex strategies and participate in competitive matches.", 
      schedule: ['Monday & Wednesday - 1:00 PM to 3:00 PM', 'Friday - 4:00 PM to 6:00 PM'], 
      trainer: 'Sarah Lee - Chess Coach',
      videoUrl: 'https://www.youtube.com/embed/nXyJdetptXg?si=Rad68veGERWblhGL',
    },
    { 
      title: "Chess for Kids", 
      description: "Fun and engaging chess lessons tailored for young children.", 
      schedule: ['Saturday - 10:00 AM to 11:00 AM', 'Sunday - 11:00 AM to 12:00 PM'], 
      trainer: 'David King - Youth Chess Instructor',
      videoUrl: 'https://www.youtube.com/embed/AOE6-ltbN2o?i=3S7WNjAVKwZVtiit',
    },
    { 
      title: "Chess Tactics and Strategy", 
      description: "Focus on improving your tactical awareness and strategic planning.", 
      schedule: ['Wednesday - 4:00 PM to 6:00 PM', 'Saturday - 3:00 PM to 5:00 PM'], 
      trainer: 'Jessica White - Chess Expert',
      videoUrl: 'https://www.youtube.com/embed/E4F77emUnqQ?si=UTgSddOEpRK6v1Wa',
    },
    { 
      title: "Endgame Mastery", 
      description: "Specialized training on endgame techniques and strategies.", 
      schedule: ['Thursday - 2:00 PM to 4:00 PM', 'Sunday - 1:00 PM to 3:00 PM'], 
      trainer: 'Michael Brown - Endgame Specialist',
      videoUrl: 'https://www.youtube.com/embed/mCsc24k-Q8M?si=xHTqHyuOEk-CIzXo',
    },
    { 
      title: "Chess Openings and Theory", 
      description: "Study and practice popular chess openings and their variations.", 
      schedule: ['Monday - 3:00 PM to 5:00 PM', 'Friday - 5:00 PM to 7:00 PM'], 
      trainer: 'Anna Green - Chess Theorist',
      videoUrl: 'https://www.youtube.com/embed/P4fCFom_KzI?si=3JbE86InG0ONdcT4', 
    },
    { 
      title: "Chess Tournaments Prep", 
      description: "Prepare for upcoming chess tournaments with focused training.", 
      schedule: ['Tuesday - 4:00 PM to 6:00 PM', 'Thursday - 5:00 PM to 7:00 PM'], 
      trainer: 'Richard Lee - Tournament Coach',
      videoUrl: 'https://www.youtube.com/embed/dZhiRvaM8N0?si=pHxkeG5ydHuiC6cr',
    },
    // Add other class items
  ];

  const handleBackClick = () => {
    navigate('/homepage');
  };

  const filteredClasses = classes.filter(classItem =>
    classItem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJoinClick = (classItem) => {
    setSelectedClass(classItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
          <button style={backButtonStyle} onClick={handleBackClick}>Home</button>
          <input
            type="text"
            placeholder="Search classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchStyle}
          />
        <div>
        </div>
        <h1 style={titleStyle}>Get Started with your classes</h1>
      </header>
      <div style={cardContainerStyle}>
        {filteredClasses.map((classItem, index) => (
          <div key={index} style={cardStyle}>
            <h2 style={cardTitleStyle}>{classItem.title}</h2>
            <p>{classItem.description}</p>
            <div style={detailsStyle}>
              <h3>Schedule</h3>
              <ul>
                {Array.isArray(classItem.schedule) ? (
                  classItem.schedule.map((schedule, i) => (
                    <li key={i}>{schedule}</li>
                  ))
                ) : (
                  <li>No schedule available</li>
                )}
              </ul>
              <h3>Trainer</h3>
              <p>{classItem.trainer}</p>
              {classItem.videoUrl && (
                <iframe
                  style={videoStyle}
                  src={classItem.videoUrl}
                  title={classItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <button
              style={joinButtonStyle}
              onClick={() => handleJoinClick(classItem)}
            >
              Join
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <JoinClassForm classItem={selectedClass} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default Classes;
