import React from "react";
import styled from "styled-components";


function Myfooter(){
  return(
    <>
<Footer>
<footer Style="background-color: #195359;">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4">
          <h5 class="mb-3" Style="color: white;">HerImpact</h5>
          <p Style="color: white;">
            HerImpact is an online applications desgined for young women in tech to connect with female tech leaders, with a vision to motivate and encourag younger generation to rise high in the tech field.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3"  Style="color: #2B838C;">Links</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="/home" Style="color: #8BD9D9;">Home</a>
            </li>
            <li class="mb-1">
              <a href="/login" Style="color: #88d9d9;">Login</a>
            </li>
            <li class="mb-1">
              <a href="/register" Style="color: #88d9d9;">Register</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="text-center p-3" Style="background-color: #2B838C;">
      <p Style="color: #88d9d9;"> 2023 @Copyright: Princess Diana's Royal Rebels</p>
    </div>
  </footer>
</Footer>
</>
);
}

const Footer = styled.div`

a{
color:#88d9d9;
}

img{
height:5rem;
}

`;
export default Myfooter;








