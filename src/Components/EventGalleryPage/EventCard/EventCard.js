import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { base_url } from "../../../config";

import {AiOutlineClockCircle} from 'react-icons/ai';

import './EventCard.scss';

import {cardinfo} from './EventCardInfo';

const EventCard = () => {
    return (
        <div className="eventcard-full"> 
            
            <Container className="eventgallery">

            <div className="eventgallery-header">
                <h5>EVENT GALLERY</h5>
                
                <div style={{ display: 'flex' }}>
                    <a href={`${base_url}/`}> Home </a> <p> / </p> <a href={`${base_url}/eventgallery`}> Event </a>
                </div>

            </div>
            
            <Row>


                    {cardinfo.map((i) => {
                        return(
                            
                            <Col lg={4}>

                            <Card className="full-card" >
                            <a href={`${base_url}/gallerydetails`}>
                            <Card.Body className="news-card-body">
                                
                            <Card.Img  src={i.img} />
                                <Card.Title style={{ color: '#4174C5',margin: '20px 0 0 10px' }}> {i.title} </Card.Title>
                                <Card.Text style={{ fontSize: '15px', color: '#5F6769', margin: '5px 0 5px 10px' }}>
                                    
                                    <AiOutlineClockCircle style={{ marginRight: '5px', }} />
                                     {i.date} 
                                      </Card.Text>
                                      
                            </Card.Body>
                            </a>
                            </Card>
        
                           </Col>
        

                        )
                    })}
                    
                   
            </Row>
            </Container>

        </div>
    );
};

export default EventCard;