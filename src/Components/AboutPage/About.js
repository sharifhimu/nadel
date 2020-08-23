import React, {useState} from 'react';
import { Container,Row,Col, ListGroup, Card, Modal } from 'react-bootstrap';
import {MdDateRange} from 'react-icons/md';
import {FiClock} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {IoMdArrowDropright} from 'react-icons/io';
import {FaPlayCircle} from 'react-icons/fa';

import {base_url} from '../../config';
import './About.scss';

import img from '../assets/image/aboutpage/img1.png';
import fb from '../assets/image/aboutpage/socialicon/FB.png';
import twitter from '../assets/image/aboutpage/socialicon/Twitter.png';
import linkedin from '../assets/image/aboutpage/socialicon/Linkedin.png';
import Instagram from '../assets/image/aboutpage/socialicon/Instagram.png';


import {upcominginfo, info, logoinfo, videoinfo} from './BiographyInfo';

const About = () => {

     // this section is for modal structure... video showing

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return (
        <div>
            <Container className="about-container">

            <div className="about-header">
                <h5> About </h5>
                
                <div style={{ display: 'flex' }}>
                    <a href={`${base_url}/`}> Home </a> <p> / </p> <a href={`${base_url}/about`}> About </a>
                </div>

            </div>

            <Row>

                <Col lg={7} xs={12} className="about-col">
                <img src={img}  alt="img" />
                <h5> Organizing Secretary Bangladesh Awami League<br/>
                    Director, Bangladesh Cricket Board
                     </h5>

                <p> Esse voluptate enim est in deserunt aute cupidatat
                    non nulla magna. Nulla consectetur sunt sit ad incididunt
                    est irure voluptate id. Adipisicing ea ea in nulla anim
                    ex anim occaecat incididunt sint ex irure. Culpa non eiusmod
                    quis in dolore ad est. 
                    Esse voluptate enim est in deserunt aute cupidatat
                    non nulla magna. Nulla consectetur sunt sit ad incididunt
                    est irure voluptate id. Adipisicing ea ea in nulla anim
                    ex anim occaecat incididunt sint ex irure. Culpa non eiusmod
                    quis in dolore ad est. <br/><br/> 

                    Esse voluptate enim est in deserunt aute cupidatat
                    non nulla magna. Nulla consectetur sunt sit ad incididunt
                    est irure voluptate id. Adipisicing ea ea in nulla anim
                    ex anim occaecat incididunt sint ex irure. Culpa non eiusmod
                    quis in dolore ad est. Esse voluptate enim est in deserunt aute cupidatat
                    non nulla magna. Nulla consectetur sunt sit ad incididunt
                    est irure voluptate id. Adipisicing ea ea in nulla anim
                    ex anim occaecat incididunt sint ex irure. Culpa non eiusmod
                    quis in dolore ad est.     

                </p>     

                <h6> Biography </h6>

                   

                        {info.map((i) => {
                            return(
                                
                                <div>

                                <div className="biography">     
                                <img src={i.firstimg} className="biography-img" alt="img" />
                        <p className="p1"> {i.p1} </p>
                    </div>

                    <div className="biography">
                        
                        <p className="p2"> {i.p2} </p>

                              <img src={i.secondimg} className="biography-img" alt="img" />

                              <p className="p2-repeat"> {i.p2} </p>
                    </div>

                    </div>            
                            )
                        })}

                        
                
                
                </Col>

                <Col lg={4} xs={12}>

                        {/* upcoming events */}
                <Card className="upcoming-events-card" >
                    <ListGroup >
                        <ListGroup.Item>Upcoming Events</ListGroup.Item>
                        {upcominginfo.map((i) => {
                                return(

                                    <ListGroup.Item>
                                    <div style={{ display: 'flex' }}>            
                                   <div className="date">
                                        <p style={{ fontWeight: 'bold',  fontSize: '25px' }}> {i.date}  </p>
                                        <p> {i.month} </p>
                                    </div>
                                    <div className="event-name">
                                       <a href={`${base_url}/`}> <p className="event-location"> {i.mainLocation} </p> </a>
                                        <div className="event-date">
                                         <div style={{ display: 'flex', alignItems: 'center' }}> <MdDateRange/>  <p>&nbsp;  {i.fullDate}  &nbsp;</p> </div> 
                                         <div style={{ display: 'flex', alignItems: 'center' }}> <FiClock/> <p> &nbsp; {i.time} &nbsp;</p> </div>             
                                              </div>      
                                        <div className="event-date">
                                             <div style={{ display: 'flex', alignItems: 'center' }}> 
                                             <GoLocation/>  <p className="location-full">&nbsp;  {i.fullLocation} </p>  </div> 
                                        </div> 
                                    </div>          
                                    </div>
                                </ListGroup.Item>
                                )    
                        })}
                    <ListGroup.Item 
                        style={{ fontSize: '14px',paddingBottom: '5em', paddingTop: '2em'  }}>
                             <a href={`${base_url}/`} style={{ textDecoration: 'none',color: '#274472'  }} >
                                  More Events  <IoMdArrowDropright /> 
                                  </a>
                                 </ListGroup.Item>
                    </ListGroup>
                    </Card>

                        {/* political engagement */}
                    <Card className="upcoming-events-card" >
                    <ListGroup >
                        <ListGroup.Item> Political Engagement </ListGroup.Item>

                        {logoinfo.map((i) => {
                                return(

                                    <ListGroup.Item style={{ display: 'block' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>            
                                    <img style={{ width: '15%' }} src={i.img} alt="logo" />
                                    <div className="event-name">
                                       <a href={`${base_url}/`}> <p className="event-location"> {i.title} </p> </a>
                                        <div className="event-date">
                                         <div style={{ display: 'flex', alignItems: 'center' }}> <p> {i.text} </p> </div> 
                                                  
                                              </div>      
                                       
                                    </div>          
                                    </div>
                                </ListGroup.Item>
                                )    
                        })}
                        
                    </ListGroup>
                    </Card>

                    {/* featured video */}
                    <Card className="upcoming-events-card" >
                    <ListGroup >
                        <ListGroup.Item>  Featured Video </ListGroup.Item>

                      

                        {videoinfo.map((i) => {
                                return(
                                        <>
                                    <button  onClick={handleShow}>
                                       <div className="featured-video">
                                       <FaPlayCircle className="play-icon" />
                                         <Card.Img  src={i.img} />
                                       </div> 
                                    </button>

                                    <div className="video-modal">

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title> {i.title} </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {/* <img src={require(`../../assets/image/videoImage/${currentImage.img}`)} /> */}

                                            <iframe title="video" className="video-style"
                                            src={i.video} 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen>

                                            </iframe>

                                        </Modal.Body>

                                        
                                    </Modal>
                                    </div>                  
                                        </>
                                )    
                        })}
                    <ListGroup.Item 
                        style={{ fontSize: '14px',paddingBottom: '2em', paddingTop: '2em'  }}>
                             <a href={`${base_url}/`} style={{ textDecoration: 'none',color: '#274472'  }} >
                                  More video  <IoMdArrowDropright /> 
                                  </a>
                                 </ListGroup.Item>
                    </ListGroup>
                    </Card>



                        {/* social media links */}
                        <Card className="upcoming-events-card social-icons" >
                        
                        <p> Social Media Icons </p>

                       <a href="/"> <img src={fb} alt="fb" className="social-icon" /> </a>
                       <a href="/"> <img src={twitter} alt="fb" className="social-icon" /> </a>
                       <a href="/"> <img src={Instagram} alt="fb" className="social-icon" /> </a>
                       <a href="/"> <img src={linkedin} alt="fb" className="social-icon" /> </a>

                       
                        </Card>


                </Col>

            </Row>

            </Container>
        </div>
    );
};

export default About;