import React from "react";
import styled from "styled-components";
import image1 from "../../assets/slider/1.png";
import image2 from "../../assets/slider/2.png";
import image3 from "../../assets/slider/3.png";


function Slider(){
  return(
    <>
<Carousel>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
            <img src={image1} className="d-block w-100" alt="Image1" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
            <img src={image2} className="d-block w-100" alt="Image2" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
            <img src={image3} className="d-block w-100" alt="Image3" />
        </div>
    </div>
    <button className="carousel-control-prev" data-bs-target="#carouselExampleInterval" type="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" data-bs-target="#carouselExampleInterval" type="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>

</Carousel>
</>
);
}

const Carousel = styled.div`

`;
export default Slider;








