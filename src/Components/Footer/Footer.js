import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './Footer.scss';
import {footerInfo} from './FooterInfo';


import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FiPhoneCall} from 'react-icons/fi';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';

import {base_url} from '../../config';

const Footer = () => {
    return (
        <div className="footer-full" >
            <Container>
                <Row>

                    <Col lg className="footer-col">

                    <h6>About</h6>
                    <p> Organizing Secretary Bangladesh Awami League </p>
                    <p> Director of Bangladesh Cricket Board </p>

                    <div className="footer-icons"> 
                    <a href={`${base_url}/`} alt="social icon" className="social-icons"> <FaFacebookF /> </a>
                    <a href={`${base_url}/`} alt="social icon" className="social-icons"> <AiOutlineTwitter/> </a>
                    <a href={`${base_url}/`} alt="social icon" className="social-icons"> <FaLinkedinIn/> </a>
                    <a href={`${base_url}/`} alt="social icon" className="social-icons"> <FiInstagram/> </a>
                    </div>

                    
                    </Col>

                    <Col lg className="footer-col">

                    <h6>Explore</h6>

                    <a href={`${base_url}/`}> BCB </a>
                    <a href={`${base_url}/`}> SMCCI </a>
                    <a href={`${base_url}/`}> Bangladesh Awami League  </a>
                    <a href={`${base_url}/`}> Join Our Community </a>
                    <a href={`${base_url}/`}> Latest News </a>
                    
                    </Col>

                    <Col lg  className="footer-col">

                    <h6> Updates </h6>

                    {footerInfo.map((i) => {
                        return(

                            <div key={i.img} className="footer-update-sec">

                            <a href={i.link} target="_blank" rel="noopener noreferrer">
                        
                                <div style={{ marginRight: '10px' }}>
                                <img src={i.img} alt="img" />
                                </div>
    
                                <p> {i.title} </p>
    
                                </a>
                            
                                 </div>
    
                        )
                    })}

                    </Col>

                    <Col  className="footer-col">

                    <h6> Contact </h6>

                    <div className=" social-address">
                    {/* <a> */}
                        <div style={{ marginRight: '10px' }}>
                        <FiPhoneCall />
                        </div>
                        <p> +88-01711-995525 </p>
                        {/* </a> */}
                        </div>

                        <div className=" social-address">
                    {/* <a > */}
                        <div style={{ marginRight: '10px' }}>
                        <BsFillEnvelopeFill />
                        </div>
                        <p> sac.nadel@gmail.com </p>
                        {/* </a> */}
                        </div>

                        <div className=" social-address">
                    {/* <a > */}
                        <div style={{ marginRight: '10px' }}>
                        <FiMapPin />
                        </div>
                        <p> Bangladesh Secretariat, Dhaka-1000, Bangladesh </p>
                        {/* </a> */}
                        </div>



                    
                    
                    </Col>

                </Row>

                <Row className="footer-down">
                    <div className="footer-br"></div> 
                    
                    
                    <p> 2020 Shafiul Alam Chowdhury Nadel, Developed by Beatnik Technology LTD. </p>
                    
                </Row>

            </Container>
        </div>
    );
};

export default Footer;