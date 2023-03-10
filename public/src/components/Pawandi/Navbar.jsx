import React from "react";
import Logo from "../../assets/logo-background.png";
import styled from "styled-components";


function NavBar(){
    return(
      <>
<Header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/home">
      <img src ={Logo} alt="Logo"/>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarcontent"
    aria-controls="navbarcontent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarcontent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">
          Register
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
    </ul>
  </div>
</nav>
</Header>
    </>
    );
}

const Header = styled.div`

a{
  color:#88d9d9;
}

img{
  height:5rem;
}



`;



export default NavBar;

