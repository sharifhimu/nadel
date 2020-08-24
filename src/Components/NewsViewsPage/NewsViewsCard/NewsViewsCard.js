import React from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import { base_url } from "../../../config";
import {Link} from 'react-router-dom';


import './NewsViewsCard.scss';

import {newsinfo} from './NewsViewsCardInfo';

const NewsViewsCard = () => {
    return (
        <div className="newscard-full">
            <Container className="newsviews">

            <div className="news-header">
                <h5> News & Views </h5>
                
                <div style={{ display: 'flex' }}>
                    <Link to={`${base_url}/`}> Home </Link> <p> / </p> <Link to={`${base_url}/news`}> News & Views </Link>
                </div>

            </div>

            <Row>


                {newsinfo.map((i) => {
                    return(

                        <Col key={i.id} lg={3}>

                <Card className="full-card" >
                    <Link to={`${base_url}/newsdetails`}>
                    <Card.Img  src={i.img} />
                    <Card.Body className="news-card-body">
                        <Card.Title style={{ color: '#4174C5' }}> {i.title} </Card.Title>
                        <Card.Text style={{ fontSize: '12px', color: '#5F6769', margin: '0 0 5px 0' }}> {i.date}  </Card.Text>
                      
                      
                        <Card.Text>
                        {i.text}
                        </Card.Text>
                        <button >Read More</button>
                    </Card.Body>
                    </Link>
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