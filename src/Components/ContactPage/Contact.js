import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {base_url} from '../../config';


import './Contact.scss';

import map from '../assets/image/contactpage/map.png';

const Contact = () => {
    return (
        <div>
            <Container  className="contact-container">

            <div className="contact-header">
                <h5> CONTACT </h5>
                
                <div style={{ display: 'flex' }}>
                    <a href={`${base_url}/`}> Home </a> <p> / </p> <a href={`${base_url}/contact`}> Contact </a>
                </div>

                <p> Get In Touch </p>

            </div>

            <Row>
                <Col lg xs={12} className="msg-col">
                
                    <input  type="name" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your Email" />
                    <textarea rows="10" placeholder="Enter Your Message" />

                    <a href="/" alt="send"> Send </a>
                
                </Col>

                <Col className="map-col">
                <a href="/"> 
                <img src={map} alt="img" />
                </a>

                <div className="map-address">
                <p> Where To Find </p>

                <div className="address">

                    <div>
                        <p> Abdul Gani Road, Bangladesh Secretariat, Dhaka-1000, Bangladesh  </p>
                    </div>

                    <div>
                        <p> sac.nadel@gmail.com+88-01711-995525 </p>
                    </div>

                </div>
                </div>
                
                </Col>
            </Row>

            </Container>
        </div>
    );
};

export default Contact;