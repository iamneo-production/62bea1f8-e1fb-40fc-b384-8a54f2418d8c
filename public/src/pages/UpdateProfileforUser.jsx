import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import Logo from "../../src/assets/logo-background.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #0C3640;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px;
`;


const HeaderText = styled.h1`
  color: #8BD9D9;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #185359;
  border-radius: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;
`;

const Label = styled.label`
  color: #8BD9D9;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #2B838C;
  color: white;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #60BFBF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2B838C;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const NavigationLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-right: 20px;
`;

const UpdateUserProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // handle form submission here
      console.log('Form submitted!');
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Update User Profile</HeaderText>
      </HeaderContainer>
      
      <NavigationBar>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/dashboard">Dashboard</NavigationLink>
      </NavigationBar>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            />
            </FormGroup>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <SubmitButton type="submit">Update Profile</SubmitButton>
            </Form>
            </Container>
            );
            };
            
            export default UpdateUserProfile;
