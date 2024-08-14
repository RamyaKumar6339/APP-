// // // // src/components/Welcome.js
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // // Inline styles for simplicity
// // // const welcomeContainerStyle = {
// // //   display: 'flex',
// // //   flexDirection: 'column',
// // //   alignItems: 'center',
// // //   justifyContent: 'center',
// // //   height: '100vh',
// // //   backgroundImage: 'url("https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg")', // Replace with your background image URL
// // //   backgroundSize: 'cover',
// // //   backgroundPosition: 'center',
// // // };

// // // const navbarStyle = {
// // //   display: 'flex',
// // //   justifyContent: 'space-around',
// // //   width: '100%',
// // //   backgroundColor: 'rgba(0, 0, 0, 0.7)',
// // //   padding: '10px 0',
// // //   position: 'absolute',
// // //   top: '0',
// // // };

// // // const navLinkStyle = {
// // //   color: 'white',
// // //   textDecoration: 'none',
// // //   fontSize: '1.2rem',
// // //   padding: '0 10px',
// // // };

// // // const pageTitleStyle = {
// // //   color: 'white',
// // //   fontSize: '3rem',
// // //   marginTop: '20px',
// // // };

// // // const Welcome = () => {
// // //   return (
// // //     <div style={welcomeContainerStyle}>
// // //       <header style={navbarStyle}>
// // //         <Link to="/login" style={navLinkStyle}>Login</Link>
// // //         <Link to="/signup" style={navLinkStyle}>Signup</Link>
// // //         <Link to="/about" style={navLinkStyle}>About</Link>
// // //         <Link to="/contact" style={navLinkStyle}>Contact</Link>
// // //       </header>
// // //       <h1 style={pageTitleStyle}>Welcome to Our Website</h1>
// // //     </div>
// // //   );
// // // }

// // // export default Welcome;

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // // Inline styles for simplicity
// // const welcomeContainerStyle = {
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   height: '100vh',
// //   backgroundImage: 'url("https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg")', // Replace with your background image URL
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// // };

// // const navbarStyle = {
// //   display: 'flex',
// //   justifyContent: 'flex-end', // Align content to the right
// //   width: '100%',
// //   backgroundColor: 'white', // Semi-transparent white
// //   backdropFilter: 'blur(10px)', // Blur effect
// //   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
// //   padding: '10px 20px', // Adjust padding for spacing
// //   position: 'absolute',
// //   top: '0',
// // };

// // const navLinkStyle = {
// //   color: 'black',
// //   textDecoration: 'none',
// //   fontSize: '1.2rem',
// //   padding: '0 10px',
// // };

// // const pageTitleStyle = {
// //   color: 'white',
// //   fontSize: '3rem',
// //   marginTop: '20px',
// //   textAlign: 'left',
// //   width: '90%', // Adjust width as needed
// //   alignSelf: 'flex-end',
// // };

// // const extraContentStyle = {
// //   color: 'white',
// //   fontSize: '1.5rem',
// //   textAlign: 'left',
// //   width: '90%', // Adjust width as needed
// //   alignSelf: 'flex-end',
// //   marginTop: '10px',
// // };

// // const Welcome = () => {
// //   return (
// //     <div style={welcomeContainerStyle}>
// //       <header style={navbarStyle}>
// //         <div style={{ display: 'flex', alignItems: 'center' }}>
// //           <Link to="/login" style={navLinkStyle}>Login</Link>
// //           <Link to="/signup" style={navLinkStyle}>Signup</Link>
// //           <Link to="/about" style={navLinkStyle}>About</Link>
// //           <Link to="/contact" style={navLinkStyle}>Contact</Link>
// //         </div>
// //       </header>
// //       <h1 style={pageTitleStyle}>Welcome to Our Website</h1>
// //       <div style={extraContentStyle}>
// //         <p>Join our community and improve your chess skills!</p>
// //         <p>Learn from top instructors and compete in tournaments.</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Welcome;
// import React from 'react';
// import { Link } from 'react-router-dom';

// // Inline styles for simplicity
// const welcomeContainerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   backgroundImage: 'url("https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg")', // Replace with your background image URL
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// };

// const navbarStyle = {
//   display: 'flex',
//   justifyContent: 'space-between', // Space out title and navigation links
//   width: '100%',
//   backgroundColor: 'white', // Semi-transparent white
//   backdropFilter: 'blur(10px)', // Blur effect
//   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
//   padding: '10px 20px', // Adjust padding for spacing
//   position: 'absolute',
//   top: '0',
//   left: '0',
// };

// const navLinkStyle = {
//   color: 'black',
//   textDecoration: 'none',
//   fontSize: '1.2rem',
//   padding: '0 10px',
// };

// const pageTitleStyle = {
//   color: 'white',
//   fontSize: '3rem',
//   marginTop: '20px',
//   textAlign: 'left',
//   width: '90%', // Adjust width as needed
//   alignSelf: 'flex-end',
// };

// const extraContentStyle = {
//   color: 'white',
//   fontSize: '1.5rem',
//   textAlign: 'left',
//   width: '90%', // Adjust width as needed
//   alignSelf: 'flex-end',
//   marginTop: '10px',
// };

// const Welcome = () => {
//   return (
//     <div style={welcomeContainerStyle}>
//       <header style={navbarStyle}>
//         <h1 style={{ margin: 0 }}>Chess Academy</h1>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <Link to="/login" style={navLinkStyle}>Login</Link>
//           <Link to="/signup" style={navLinkStyle}>Signup</Link>
//           <Link to="/about" style={navLinkStyle}>About</Link>
//           <Link to="/contact" style={navLinkStyle}>Contact</Link>
//         </div>
//       </header>
//       <h1 style={pageTitleStyle}>Welcome to Our Website</h1>
//       <div style={extraContentStyle}>
//         <p>Join our community and improve your chess skills!</p>
//         <p>Learn from top instructors and compete in tournaments.</p>
//       </div>
//     </div>
//   );
// }

// export default Welcome;
import React from 'react';
import { Link } from 'react-router-dom';

// Inline styles for simplicity
const welcomeContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: 'url("https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg")', // Replace with your background image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between', // Space out title and navigation links
  width: '100%',
  backgroundColor: 'white', // Semi-transparent white
  backdropFilter: 'blur(10px)', // Blur effect
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  padding: '10px 20px', // Adjust padding for spacing
  position: 'absolute',
  top: '0',
  left: '0',
};

const navLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '1.2rem',
  padding: '0 10px',
};

const pageTitleStyle = {
  color: 'white',
  fontSize: '3rem',
  marginTop: '20px',
  textAlign: 'left',
  width: '90%', // Adjust width as needed
  alignSelf: 'flex-end',
};

const extraContentStyle = {
  color: 'white',
  fontSize: '1.5rem',
  textAlign: 'left',
  width: '90%', // Adjust width as needed
  alignSelf: 'flex-end',
  marginTop: '10px',
};

const Welcome = () => {
  return (
    <div style={welcomeContainerStyle}>
      <header style={navbarStyle}>
        <h1 style={{ margin: 0 }}>Chess Academy</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/adminlogin" style={navLinkStyle}>Admin</Link>
          <Link to="/login" style={navLinkStyle}>Login</Link>
          <Link to="/signup" style={navLinkStyle}>Signup</Link>
          <Link to="/signup" style={navLinkStyle}>About</Link>
          <Link to="/signup" style={navLinkStyle}>Contact</Link>
        </div>
      </header>
      <h1 style={pageTitleStyle}>Welcome to Our Website</h1>
      <div style={extraContentStyle}>
        <p>Join our community and improve your chess skills!</p>
        <p>Learn from top instructors and compete in tournaments.</p>
      </div>
    </div>
  );
}

export default Welcome;
