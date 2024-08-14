import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #61dafb;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

function UserForm({ user, onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: user ? user.id : Date.now(),
      name,
      email,
    };
    onSave(userData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <Label>Email</Label>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Button type="submit">{user ? 'Update' : 'Create'} User</Button>
    </Form>
  );
}

export default UserForm;
