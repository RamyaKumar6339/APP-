// src/components/ProfilePage.js

import React from 'react';
import styled from 'styled-components';

// Styled components
const ProfilePageContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const ProfileHeader = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProfileTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid #282c34; /* Optional: border to make the profile picture stand out */
`;

const ProfileInfo = styled.div`
  width: 100%;
`;

const ProfileInfoItem = styled.div`
  margin-bottom: 10px;
`;

const ProfileLabel = styled.span`
  font-weight: bold;
`;

const ProfileValue = styled.span`
  margin-left: 10px;
`;

const CourseLayout = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const CourseTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CourseItem = styled.li`
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

function ProfilePage() {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedDate: 'January 15, 2023',
    profilePicture: 'https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg', // Updated profile picture URL
    courses: [
      'Introduction to Chess',
      'Advanced Chess Strategies',
      'Endgame Techniques',
      'Chess Tactics and Puzzles',
    ],
  };

  return (
    <ProfilePageContainer>
      <ProfileHeader>
        <ProfileTitle>Profile Page</ProfileTitle>
      </ProfileHeader>
      <ProfileDetails>
        <ProfileLogo src={user.profilePicture} alt="Profile" />
        <ProfileInfo>
          <ProfileInfoItem>
            <ProfileLabel>Name:</ProfileLabel>
            <ProfileValue>{user.name}</ProfileValue>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileValue>{user.email}</ProfileValue>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <ProfileLabel>Joined Date:</ProfileLabel>
            <ProfileValue>{user.joinedDate}</ProfileValue>
          </ProfileInfoItem>
        </ProfileInfo>
      </ProfileDetails>
      <CourseLayout>
        <CourseTitle>My Courses</CourseTitle>
        <CourseList>
          {user.courses.map((course, index) => (
            <CourseItem key={index}>{course}</CourseItem>
          ))}
        </CourseList>
      </CourseLayout>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
