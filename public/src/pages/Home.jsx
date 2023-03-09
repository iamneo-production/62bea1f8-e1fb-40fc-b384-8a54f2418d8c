import React from "react";
import logo from "../assets/logo-background.png";
import styled from "styled-components";


function Home(){
    return(
<>
<Header>
        <div>
        <h1>Home Page</h1>
      <img src={logo} alt="Log"/>
      </div>
      </Header>
    </>
    );
}

const Header = styled.div`
background-color:#0c3640;
height: 100vh;
width: 100vw;
display:flex;
flex-direction:column;
img{
    height:10rem;
}
h1{
    background-color:#FFFFFF;
}

}
`;

export default Home

