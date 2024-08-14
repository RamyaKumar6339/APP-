
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// HomePage Styled Components
const HomePageContainer = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #61dafb;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Features = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Feature = styled.div`
  width: 30%;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

// Kerasol Section Styled Components
const moveImage = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`;

const KerasolSection = styled.section`
  background-color: #e0f7fa;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
`;

const KerasolDescription = styled.p`
  font-size: 1.2rem;
  color: #004d40;
  margin: 20px 0;
`;

const KerasolImages = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const KerasolImage = styled.img`
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  animation: ${moveImage} 5s linear infinite;
`;

// About Section Styled Components
const AboutSection = styled.section`
  background-color: #f3e5f5;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  color: #7b1fa2;
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  color: #6a1b9a;
  margin: 20px 0;
`;

// Contact Us Section Styled Components
const ContactSection = styled.section`
  background-color: #fff3e0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #ff5722;
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  color: #e64a19;
  margin: 20px 0;
`;

const ContactEmail = styled.a`
  color: #ff5722;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

// Rating Form Styled Components
const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid #ccc;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const FormTitle = styled.h2`
  margin-bottom: 15px;
   width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FormButton = styled.button`
  padding: 10px 15px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ff5722;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

// HomePage Component
function HomePage() {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const navigate = useNavigate();

  const handleRatingClick = () => {
    setShowRatingForm(!showRatingForm);
  };

  const handleCloseForm = () => {
    setShowRatingForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/welcome'); // Redirect to the login page or home page
  };

  return (
    <div>
      <Header>
        <HeaderTitle>Chess Academy</HeaderTitle>
        <NavLinks>
          <NavLink to="#" onClick={handleRatingClick}>Ratings</NavLink> {/* Open Rating Form */}
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavLinks>
      </Header>
      <HomePageContainer>
        <Header>
          <HeaderTitle>Welcome to Chess Academy</HeaderTitle>
          <HeaderSubtitle>Learn, Play, and Master Chess</HeaderSubtitle>
        </Header>
        <Features>
          <Feature>
            <FeatureTitle>
              <Link to="/classes" style={{ textDecoration: 'none', color: 'inherit' }}>Classes</Link>
            </FeatureTitle>
            <FeatureDescription>Join our classes to learn from the best instructors.</FeatureDescription>
          </Feature>
          <Feature>
            <FeatureTitle>
              <Link to="/tournaments" style={{ textDecoration: 'none', color: 'inherit' }}>Tournaments</Link>
            </FeatureTitle>
            <FeatureDescription>Participate in our regular tournaments to test your skills.</FeatureDescription>
          </Feature>
          <Feature>
          <FeatureTitle>
              <Link to="/Resourses" style={{ textDecoration: 'none', color: 'inherit' }}>Resourses</Link>
            </FeatureTitle>
            <FeatureDescription>Access a variety of resources to improve your game.</FeatureDescription>
          </Feature>
        </Features>
        <KerasolSection>
          <KerasolDescription>Explore our advanced chess strategies and training programs.</KerasolDescription>
          <KerasolImages>
            <KerasolImage src="https://img.freepik.com/premium-photo/chess-pieces-chessboard-with-one-them-facing-other_250469-17138.jpg" alt="Kerasol Image 1" />
            <KerasolImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Z4AChi9Ztd6Ee2UIDBpp8l437rGDBKnMqUd8OcfKtIEk8vaeqPO2nlEzCvMfyG1zGiQ&usqp=CAU" alt="Kerasol Image 2" />
            <KerasolImage src="https://content.jdmagicbox.com/comp/pune/s2/020pxx20.xx20.190307162933.b3s2/catalogue/tactical-moves-chess-academy-pune-e1ux8kavma.jpg" alt="Kerasol Image 3" />
          </KerasolImages>
        </KerasolSection>
        <AboutSection>
          <AboutTitle>About Us</AboutTitle>
          <AboutDescription>Learn more about our academy, our mission, and our team.</AboutDescription>
        </AboutSection>
        <ContactSection>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactDescription>Have questions? Feel free to reach out to us!</ContactDescription>
          <ContactEmail href="mailto:info@chessacademy.com">info@chessacademy.com</ContactEmail>
        </ContactSection>
        {showRatingForm && (
          <FormContainer>
            <CloseButton onClick={handleCloseForm}>×</CloseButton>
            <FormTitle>Rate Us</FormTitle>
            <form>
              {/* <FormField>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput type="text" id="name" name="name" />
              </FormField> */}
              <FormField>
                <FormLabel htmlFor="rating">Rating</FormLabel>
                <FormInput type="number" id="rating" name="rating" min="1" max="5" />
              </FormField>
              <FormButton type="submit">Submit</FormButton>
            </form>
          </FormContainer>
        )}
      </HomePageContainer>
    </div>
  );
}

export default HomePage;
