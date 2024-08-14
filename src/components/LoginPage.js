

import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const LoginPageContainer = styled.div`
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

const SignupLink = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0MTM2MTcxLCJpYXQiOjE3MjM1MzEzNzEsImp0aSI6IjNkMzM5M2E4NTA0MzQ3Y2NhZTk5YjA1MzEyY2ZiMGM4IiwidXNlcl9pZCI6MX0.SCG4GUkv3umHnNYHYZ7oskoRC1p4yq68TVVZ2H03S7M";
    localStorage.setItem('token', token);
    navigate('/homepage');
  };


  return (
    <LoginPageContainer>
      <Header>
        <TitleContainer>
          <Title>Chess Academy</Title>
        </TitleContainer>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      </Header>
      <WelcomeMessage>Welcome to Chess Academy</WelcomeMessage>
      <FormContainer>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
        <SignupLink>
          Not an existing user? <Link to="/signup">Signup</Link>
        </SignupLink>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
