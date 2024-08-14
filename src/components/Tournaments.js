
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import JoinTournament from './JoinTournament'; // Import JoinTournament component

const tournaments = [
  // // ...your tournament data/
  {
        id: 1,
        title: 'Spring Chess Open',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCimr1DDPlBxF4cC00QF4_qMvgmHD_CxW4LJVDSEdGke074hHB6bwjWDPvgayLmkup4M&usqp=CAU',
        description: 'Join us for the Spring Chess Open, a tournament featuring top players from around the region.',
        date: 'March 15, 2024',
      },
      {
        id: 2,
        title: 'Summer Chess Classic',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4onFO5Om4elpkhmBMcwUdqADgnhi-UsLqUA&s',
        description: 'The Summer Chess Classic brings together the best chess enthusiasts for a season of challenging games.',
        date: 'June 20, 2024',
      },
      {
        id: 3,
        title: 'Autumn Chess Classic',
        image: 'https://img.freepik.com/premium-photo/tranquil-game-chess-autumn-ambiance-with-sunlit-chessboard-vibrant-foliage_1034537-13328.jpg?w=360',
        description: 'Compete in the Autumn Chess Championship and prove your skills against the finest players.',
        date: 'September 10, 2024',
      },
      {
        id: 4,
        title: 'Winter Chess Trophy',
        image: 'https://cdn.mos.cms.futurecdn.net/yHzEup5ARhL6gXThPzyqBn-1200-80.jpg',
        description: 'The Winter Chess Extravaganza is here to warm up your strategic skills with top-notch competition.',
        date: 'December 5, 2024',
      },
      {
        id: 5,
        title: 'Spring Invitational Tournament',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y0snzzPE2YYioJ9EJ_PdRUivDn2O0xZG_Q&s',
        description: 'An exclusive spring tournament inviting the most skilled chess players for an intense competition.',
        date: 'April 10, 2024',
      },
      {
        id: 6,
        title: 'International Chess Showdown',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQEnn0IAe5jj5sUOMYG-jp12udq9Cx6blfw&s',
        description: 'A global chess tournament that brings together players from around the world for a high-stakes competition.',
        date: 'August 30, 2024',
      },
      {
        id: 7,
        title: 'Holiday Chess Challenge',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aZ01XmCEdnD6qdA5LPGz2ciwe1UMF_I-v2zl9hf2NMOf7OuMPNykttwPfgIhKXQP_m8&usqp=CAU',
        description: 'Celebrate the holiday season with a chess challenge that features exciting matches and festive fun.',
        date: 'December 20, 2024',
      },
];

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px 20px',
  },
  backButton: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 30px',
    cursor: 'pointer',
  },
  headerTitle: {
    margin: 0,
  },
  tournamentsContainer: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  carousel: {
    marginBottom: '20px',
  },
  tournamentList: {
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  tournamentCard: {
    backgroundColor: 'white',
    borderRadius: '3px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '300px',
    textAlign: 'center',
  },
  tournamentImage: {
    width: '100%',
    height: 'auto',
  },
  tournamentInfo: {
    padding: '15px',
  },
  tournamentTitle: {
    margin: '10px 0',
  },
  tournamentDescription: {
    margin: '5px 0',
  },
  tournamentDate: {
    margin: '5px 0',
    fontWeight: 'bold',
  },
  joinButton: {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  modal: {
    width:'45%',
    height:'70%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  closeButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginTop:'10px',
    padding: '10px',
    cursor: 'pointer',
    float: 'right',  
  },
};

const Tournaments = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBackClick = () => {
    window.history.back(); // Go back to the previous page using browser history
  };

  const handleJoinClick = (tournamentId) => {
    setSelectedTournament(tournamentId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTournament(null);
  };

  return (
    <div>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={handleBackClick}>Back</button>
        <h1 style={styles.headerTitle}>Tournaments</h1>
        <h1>Chess Academy</h1>
      </header>
      <div style={styles.tournamentsContainer}>
        <Carousel style={styles.carousel} autoPlay infiniteLoop showThumbs={false}>
          {tournaments.map((tournament) => (
            <div key={tournament.id}>
              <img src={tournament.image} alt={tournament.title} />
              <p className="legend">{tournament.title}</p>
            </div>
          ))}
        </Carousel>
        <div style={styles.tournamentList}>
          {tournaments.map((tournament) => (
            <div key={tournament.id} style={styles.tournamentCard}>
              <img src={tournament.image} alt={tournament.title} style={styles.tournamentImage} />
              <div style={styles.tournamentInfo}>
                <h2 style={styles.tournamentTitle}>{tournament.title}</h2>
                <p style={styles.tournamentDescription}>{tournament.description}</p>
                <p style={styles.tournamentDate}>{tournament.date}</p>
                <button
                  style={styles.joinButton}
                  onClick={() => handleJoinClick(tournament.id)}
                >
                  Join Tournament
                </button>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <>
            <div style={styles.modalOverlay} onClick={handleCloseModal}></div>
            <div style={styles.modal}>
              <button style={styles.closeButton} onClick={handleCloseModal}>Close</button>
              <JoinTournament tournamentId={selectedTournament} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tournaments;