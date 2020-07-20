import React from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import { base_url } from "../../../config";



import './NewsViewsCard.scss';

import {newsinfo} from './NewsViewsCardInfo';

const NewsViewsCard = () => {
    return (
        <div className="newscard-full">
            <Container className="newsviews">

            <div className="news-header">
                <h5> News & Views </h5>
                
                <div style={{ display: 'flex' }}>
                    <a href={`${base_url}/`}> Home </a> <p> / </p> <a href={`${base_url}/news`}> News & Views </a>
                </div>

            </div>

            <Row>


                {newsinfo.map((i) => {
                    return(

                        <Col key={i.id} lg={3}>

                <Card className="full-card" >
                    <a href={`${base_url}/newsdetails`}>
                    <Card.Img  src={i.img} />
                    <Card.Body className="news-card-body">
                        <Card.Title style={{ color: '#4174C5' }}> {i.title} </Card.Title>
                        <Card.Text style={{ fontSize: '12px', color: '#5F6769', margin: '0 0 5px 0' }}> {i.date}  </Card.Text>
                      
                      
                        <Card.Text>
                        {i.text}
                        </Card.Text>
                        <button >Read More</button>
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

export default NewsViewsCard;