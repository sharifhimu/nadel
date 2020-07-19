import React from 'react';
import {Card,  Container,} from 'react-bootstrap';

import {Galleryinfo} from './GalleryInfo';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './Gallery.scss';

import {base_url} from '../../../config';


const NewsViews = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div style={{ margin: '4rem 0 0 0' }}>
            <Container className="Gallery-container">

              <div className="news-header">
              <p> Gallery </p>
              </div>
                {/* <Row> */}

                <Slider {...settings}>

             {Galleryinfo.map((i) => {
                 return(

                    // <Col>

                    <Card className="full-card" > 
                  <a href={`${base_url}/gallerydetails`} >
                    <Card.Img  src={i.img} />
                    </a>
                   
                    </Card>

                    // </Col>

                 )
             })}   

            </Slider>

            {/* </Row> */}

            </Container>

        </div>
    );
};

export default NewsViews;