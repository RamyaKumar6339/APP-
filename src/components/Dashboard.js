// // import React from 'react';
// // import { Box, Grid, Paper, Typography } from '@mui/material';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import AssignmentIcon from '@mui/icons-material/Assignment';
// // import EventIcon from '@mui/icons-material/Event';
// // import MessageIcon from '@mui/icons-material/Message';
// // import SettingsIcon from '@mui/icons-material/Settings';

// // const Dashboard = () => {
// //   const dashboardItems = [
// //     {
// //       title: 'Profile',
// //       description: 'View and update your personal information.',
// //       icon: <AccountCircleIcon fontSize="large" />,
// //     },
// //     {
// //       title: 'Tasks',
// //       description: 'Manage your tasks and to-do lists.',
// //       icon: <AssignmentIcon fontSize="large" />,
// //     },
// //     {
// //       title: 'Events',
// //       description: 'Keep track of your upcoming events and meetings.',
// //       icon: <EventIcon fontSize="large" />,
// //     },
// //     {
// //       title: 'Messages',
// //       description: 'Check your messages and notifications.',
// //       icon: <MessageIcon fontSize="large" />,
// //     },
// //     {
// //       title: 'Settings',
// //       description: 'Adjust your account settings and preferences.',
// //       icon: <SettingsIcon fontSize="large" />,
// //     },
// //   ];

// //   return (
// //     <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
// //       <Typography variant="h4" gutterBottom>
// //         Dashboard
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {dashboardItems.map((item, index) => (
// //           <Grid item xs={12} sm={6} md={4} key={index}>
// //             <Paper
// //               sx={{
// //                 p: 2,
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 backgroundColor: '#ffffff',
// //                 borderRadius: '12px',
// //                 boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
// //                 transition: 'transform 0.3s',
// //                 '&:hover': {
// //                   transform: 'scale(1.05)',
// //                 },
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   width: 60,
// //                   height: 60,
// //                   backgroundColor: '#f0f4f8',
// //                   borderRadius: '50%',
// //                   mr: 2,
// //                 }}
// //               >
// //                 {item.icon}
// //               </Box>
// //               <Box>
// //                 <Typography variant="h6" component="div">
// //                   {item.title}
// //                 </Typography>
// //                 <Typography variant="body2" color="textSecondary">
// //                   {item.description}
// //                 </Typography>
// //               </Box>
// //             </Paper>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default Dashboard;
// import React from 'react';
// import { Box, Grid, Paper, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import EventIcon from '@mui/icons-material/Event';
// import MessageIcon from '@mui/icons-material/Message';
// import SettingsIcon from '@mui/icons-material/Settings';

// const Dashboard = () => {
//   const dashboardItems = [
//     {
//       title: 'Profile',
//       description: 'View and update your personal information.',
//       icon: <AccountCircleIcon fontSize="large" />,
//       image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944', // Replace with your image URL
//     },
//     {
//       title: 'Tasks',
//       description: 'Manage your tasks and to-do lists.',
//       icon: <AssignmentIcon fontSize="large" />,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIw9pz2RuTqexe7Y65uToR9JF5vhcQnIDfw&s', // Replace with your image URL
//     },
//     {
//       title: 'Events',
//       description: 'Keep track of your upcoming events and meetings.',
//       icon: <EventIcon fontSize="large" />,
//       image: 'https://www.shutterstock.com/image-vector/events-colorful-typography-banner-260nw-1356206768.jpg', // Replace with your image URL
//     },
//     {
//       title: 'Messages',
//       description: 'Check your messages and notifications.',
//       icon: <MessageIcon fontSize="large" />,
//       image: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/10/google-messages-hero.png', // Replace with your image URL
//     },
//     {
//       title: 'Settings',
//       description: 'Adjust your account settings and preferences.',
//       icon: <SettingsIcon fontSize="large" />,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_5XPB557f1Vf8E0_ifHSU5DgT6zESxWyyw&s', // Replace with your image URL
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         p: 4,
//         backgroundColor: '#f5f5f5',
//         minHeight: '100vh',
//         backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/028/232/503/small_2x/chess-game-use-strategies-to-rules-the-board-decision-making-match-chess-piece-isolated-on-background-ai-generated-photo.jpg")', // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {dashboardItems.map((item, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: 'flex',
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderRadius: '12px',
//                 boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: 60,
//                   height: 60,
//                   backgroundColor: '#f0f4f8',
//                   borderRadius: '50%',
//                   mr: 2,
//                   overflow: 'hidden', // Ensures the image fits within the circle
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//               </Box>
//               <Box>
//                 <Typography variant="h6" component="div">
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {item.description}
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

const Dashboard = () => {
  const dashboardItems = [
    {
      title: 'Profiles',
      description: 'View the profile details of the users.',
      icon: <AccountCircleIcon fontSize="large" />,
      image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944', // Replace with your image URL
    },
    {
      title: 'Tasks',
      description: 'Manage your tasks and to-do lists.',
      icon: <AssignmentIcon fontSize="large" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIw9pz2RuTqexe7Y65uToR9JF5vhcQnIDfw&s', // Replace with your image URL
    },
    {
      title: 'Events',
      description: 'Keep track of your upcoming events and meetings.',
      icon: <EventIcon fontSize="large" />,
      image: 'https://www.shutterstock.com/image-vector/events-colorful-typography-banner-260nw-1356206768.jpg', // Replace with your image URL
    },
    {
      title: 'Messages',
      description: 'Check your messages and notifications.',
      icon: <MessageIcon fontSize="large" />,
      image: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/10/google-messages-hero.png', // Replace with your image URL
    },
    {
      title: 'Settings',
      description: 'Adjust your account settings and preferences.',
      icon: <SettingsIcon fontSize="large" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_5XPB557f1Vf8E0_ifHSU5DgT6zESxWyyw&s', // Replace with your image URL
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/028/232/503/small_2x/chess-game-use-strategies-to-rules-the-board-decision-making-match-chess-piece-isolated-on-background-ai-generated-photo.jpg")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {dashboardItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 4, // Increased padding for larger boxes
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)', // Increased shadow for a more prominent look
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                height: 180, // Set a fixed height
                width: '80%', // Ensure it takes full width of the Grid item
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100, // Increased width
                  height: 80, // Increased height
                  backgroundColor: '#f0f4f8',
                  borderRadius: '50%',
                  mr: 2,
                  overflow: 'hidden', // Ensures the image fits within the circle
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box>
                <Typography variant="h5" component="div"> {/* Increased text size */}
                  {item.title}
                </Typography>
                <Typography variant="body1" color="textSecondary"> {/* Adjusted text size */}
                  {item.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
