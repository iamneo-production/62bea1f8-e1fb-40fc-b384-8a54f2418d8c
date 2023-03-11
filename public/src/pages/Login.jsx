import React, { useState } from "react";
import {Link } from "react-router-dom";
import NavBar from "../components/Pawandi/Navbar";
import Footer from "../components/Pawandi/Footer";
import styled from "styled-components";


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
  margin-bottom: 10px 0 10px;
`;
/*
const Logo = styled.img`
  height: 5rem;
  margin-right: 2rem;
`;
*/
const HeaderText = styled.h1`
  
  color: #8BD9D9;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
  background-color: #8BD9D9;
  border-radius: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0c3640;
  margin-bottom: 6px;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #60bfbf;
  color: #0c3640;
`;

const SubmitButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #2b838c;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #185359;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #0c3640;
`;

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };
  return(
<>
<NavBar/>
<Container>
    <p></p> 
    <HeaderContainer>
        <HeaderText>Login</HeaderText>
      </HeaderContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="first-name">Username</Label>
          <Input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
      <LinkContainer>
        <Link to="/register">Don't have an Account?</Link>
      </LinkContainer>
    </Container>
    <Footer/>
    </>
 );
};

export default Login;
