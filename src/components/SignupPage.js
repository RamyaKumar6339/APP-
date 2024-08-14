// // // src/components/SignupPage.js

// // import React from 'react';
// // import styled from 'styled-components';
// // import { Link, useNavigate } from 'react-router-dom';

// // const SignupPageContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh;
// //   background: url('https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg') no-repeat center center fixed;
// //   background-size: cover;
// // `;

// // const WelcomeMessage = styled.h1`
// //   color: white;
// //   font-size: 2.5rem;
// //   text-align: center;
// //   margin-bottom: 20px;
// //   z-index: 1;
// // `;

// // const FormContainer = styled.div`
// //   background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
// //   padding: 40px;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   width: 300px;
// //   text-align: center;
// //   z-index: 1;
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 10px;
// //   margin: 10px 0;
// //   border: 1px solid #ccc;
// //   border-radius: 5px;
// // `;

// // const Button = styled.button`
// //   width: 100%;
// //   padding: 10px;
// //   background-color: #61dafb;
// //   border: none;
// //   border-radius: 5px;
// //   color: white;
// //   font-size: 1rem;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #21a1f1;
// //   }
// // `;

// // const LoginLink = styled.div`
// //   margin-top: 20px;
// //   font-size: 0.9rem;
// // `;

// // const SignupPage = () => {
// //   const navigate = useNavigate();

// //   const handleSignup = (event) => {
// //     event.preventDefault();
// //     // Perform signup logic here
// //     navigate('/');
// //   };

// //   return (
// //     <SignupPageContainer>
// //       <WelcomeMessage>Welcome to Chess Academy</WelcomeMessage>
// //       <FormContainer>
// //         <h1>Signup</h1>
// //         <form onSubmit={handleSignup}>
// //           <Input type="text" placeholder="Username" />
// //           <Input type="email" placeholder="Email" />
// //           <Input type="password" placeholder="Password" />
// //           <Button type="submit">Signup</Button>
// //         </form>
// //         <LoginLink>
// //           Already an existing user? <Link to="/login">Login</Link>
// //         </LoginLink>
// //       </FormContainer>
// //     </SignupPageContainer>
// //   );
// // };

// // export default SignupPage;

// // src/components/SignupPage.js

// import React from 'react';
// import styled from 'styled-components';
// import { Link, useNavigate } from 'react-router-dom';

// const SignupPageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url('https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg') no-repeat center center fixed;
//   background-size: cover;
// `;

// const Header = styled.header`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   z-index: 1;
// `;

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   color: black;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Title = styled.h1`
//   color: black;
//   font-size: 1.5rem;
//   margin: 0;
//   text-align: left;
// `;

// const TitleContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: flex-start;
// `;

// const WelcomeMessage = styled.h1`
//   color: white;
//   font-size: 2.5rem;
//   text-align: center;
//   margin-bottom: 20px;
//   z-index: 1;
// `;

// const FormContainer = styled.div`
//   background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
//   padding: 40px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 300px;
//   text-align: center;
//   z-index: 1;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #61dafb;
//   border: none;
//   border-radius: 5px;
//   color: white;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #21a1f1;
//   }
// `;

// const LoginLink = styled.div`
//   margin-top: 20px;
//   font-size: 0.9rem;
// `;

// const SignupPage = () => {
//   const navigate = useNavigate();

//   const handleSignup = (event) => {
//     event.preventDefault();
//     // Perform signup logic here
//     navigate('/homepage');
//   };

//   return (
//     <SignupPageContainer>
//       <Header>
//         <TitleContainer>
//           <Title>Chess Academy</Title>
//         </TitleContainer>
//         <BackButton onClick={() => navigate(-1)}>Back</BackButton>
//       </Header>
//       <WelcomeMessage>Welcome to Chess Academy</WelcomeMessage>
//       <FormContainer>
//         <h1>Signup</h1>
//         <form onSubmit={handleSignup}>
//           <Input type="text" placeholder="Username" />
//           <Input type="email" placeholder="Email" />
//           <Input type="password" placeholder="Password" />
//           <Button type="submit">Signup</Button>
//         </form>
//         <LoginLink>
//           Already an existing user? <Link to="/login">Login</Link>
//         </LoginLink>
//       </FormContainer>
//     </SignupPageContainer>
//   );
// };

// export default SignupPage;
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://img.freepik.com/premium-photo/chess-class-advertisment-background-with-copy-space_118124-99041.jpg') no-repeat center center fixed;
  background-size: cover;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 1.5rem;
  margin: 0;
  text-align: left;
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const WelcomeMessage = styled.h1`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  z-index: 1;
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  z-index: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

const LoginLink = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
`;

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/users/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Assuming successful signup leads to homepage
        navigate('/homepage');
      } else {
        // Handle errors here
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <SignupPageContainer>
      <Header>
        <TitleContainer>
          <Title>Chess Academy</Title>
        </TitleContainer>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      </Header>
      <WelcomeMessage>Welcome to Chess Academy</WelcomeMessage>
      <FormContainer>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Signup</Button>
        </form>
        <LoginLink>
          Already an existing user? <Link to="/login">Login</Link>
        </LoginLink>
      </FormContainer>
    </SignupPageContainer>
  );
};

export default SignupPage;
