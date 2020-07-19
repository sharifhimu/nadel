import React from 'react';
import {Card, Container,} from 'react-bootstrap';

import {newsinfo} from './NewsViewsInfo';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './NewsViews.scss';

import {base_url} from '../../../config';


const NewsViews = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
            <Container className="newsviews-container">

              <div className="news-header">
              <p> News & Views </p>
              </div>
                {/* <Row> */}

                <Slider {...settings}>

             {newsinfo.map((i) => {
                 return(

                    // <Col>

                    <Card className="full-card" >
                    <Card.Img  src={i.img} />
                    <Card.Body className="news-card-body">
                       <Card.Title style={{ color: '#4174C5' }}> {i.title} </Card.Title> 
                        <Card.Text style={{ fontSize: '12px', color: '#5F6769', margin: '0 0 5px 0' }}> {i.date}  </Card.Text>
                      
                      
                        <Card.Text>
                        {i.text}
                        </Card.Text>
                        <a href={`${base_url}/newsdetails`}> <button >Read More</button> </a> 
                    </Card.Body>
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