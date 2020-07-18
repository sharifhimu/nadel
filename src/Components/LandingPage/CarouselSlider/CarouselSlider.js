import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Row} from 'react-bootstrap';

import './CarouselSlider.scss';

import bg1 from '../../assets/image/carousel/carousel-bg1.png';

const CarouselSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="full-slider">
            <Slider {...settings}> 

          <div className="slider-initial" >
            <img src={bg1} alt="carousel" style={{ width: '100%' }} />

          <Container className="slider-container">
            <Row>
            <h3 > Organizing Secretary <br /> Bangladesh Awami League </h3>
            </Row>
            <Row>
            <button> Find Out More </button>
            </Row>
            </Container>
          </div>

         <div className="slider-initial" >
            <img src={bg1} alt="carousel" style={{ width: '100%' }} />

          <Container className="slider-container">
            <Row>
            <h3 > Organizing Secretary <br /> Bangladesh Awami League </h3>
            </Row>
            <Row>
            <button> Find Out More </button>
            </Row>
            </Container>
          </div>
          
          </Slider>
            
        </div>
    );
};

export default CarouselSlider;