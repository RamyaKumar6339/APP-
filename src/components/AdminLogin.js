
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Background = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-c4d-chess-background-image_863703.jpg'); /* Replace with your background image URL */
//   background-size: cover;
//   background-position: center;
// `;

// const AdminLoginContainer = styled.div`
//   background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
//   padding: 20px;
//   border-radius: 10px;
//   max-width: 400px;
//   width: 100%;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// `;

// const AdminLoginTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #d81b60;
// `;

// const AdminLoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const AdminLoginInput = styled.input`
//   margin-bottom: 10px;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;

// const AdminLoginButton = styled.button`
//   padding: 10px;
//   background-color: #d81b60;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #c2185b;
//   }
// `;

// function AdminLogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate login by checking static credentials
//     if (username === 'admin' && password === 'password') {
//       // Clear error and redirect to UserDetails page
//       setError('');
//       navigate('/userdetails');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <Background>
//       <AdminLoginContainer>
//         <AdminLoginTitle>Admin Login</AdminLoginTitle>
//         <AdminLoginForm onSubmit={handleSubmit}>
//           <AdminLoginInput
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <AdminLoginInput
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <AdminLoginButton type="submit">Login</AdminLoginButton>
//         </AdminLoginForm>
//       </AdminLoginContainer>
//     </Background>
//   );
// }

// export default AdminLogin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-c4d-chess-background-image_863703.jpg'); /* Replace with your background image URL */
  background-size: cover;
  background-position: center;
`;

const Header = styled.header`
  position: absolute;
  top: 0 ;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  color: black;

`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: black;
  padding-left:10px

  &:hover {
    color: #c2185b;
  }
`;

const AdminLoginContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AdminLoginTitle = styled.h3`
  font-size: 1.5rem;
  color: black;
`;

const AdminLoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AdminLoginInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AdminLoginButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c2185b;
  }
`;

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login by checking static credentials
    if (username === 'admin' && password === 'password') {
      // Clear error and redirect to UserDetails page
      setError('');
      navigate('/adminpage');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Background>
      <Header>
        <HeaderTitle>Chess Academy</HeaderTitle>
        <BackButton onClick={handleBack}>
          <FaArrowLeft />
          
        </BackButton>
      </Header>
      <AdminLoginContainer>
        <AdminLoginTitle>Admin Login</AdminLoginTitle>
        <AdminLoginForm onSubmit={handleSubmit}>
          <AdminLoginInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AdminLoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <AdminLoginButton type="submit">Login</AdminLoginButton>
        </AdminLoginForm>
      </AdminLoginContainer>
    </Background>
  );
}

export default AdminLogin;
