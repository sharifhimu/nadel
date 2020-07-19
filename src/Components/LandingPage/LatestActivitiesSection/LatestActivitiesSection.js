import React, {useState} from 'react';
import {Container, Row, Col, Card, ListGroup, Modal} from 'react-bootstrap';
import {BsImages} from 'react-icons/bs';
import {MdEventNote} from 'react-icons/md';
import {BsNewspaper} from 'react-icons/bs';
import {MdDateRange} from 'react-icons/md';
import {FiClock} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {IoMdArrowDropright} from 'react-icons/io';
import {FaPlayCircle} from 'react-icons/fa';

import './LatestActivitiesSection.scss';
import {info, smallVideo} from './LatestAcitivitiesInfo';

import {base_url} from '../../../config';

const LatestActivitiesSection = () => {


    const [currentImage, setcurImage] = useState({
        img: "videoImage1.png",
        id:1,
        title: 'Parliament Session 2019',
        date: '21 September, 2019',
        text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        video: `https://www.youtube.com/embed/4w_NdW-Jv5E`
    });


    const showImage = (img, id, title, date, text, video) => {

        setcurImage({ img: img, id: id, title: title, date: date, text: text, video: video  });

    }
    
    // this section is for modal structure... video showing

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    return (
        <div>
            <Container className="option-container">
                <Row >

                    <Col lg={1}></Col>

                    <Col lg={2}>

                    <div className="icon-style">
                        <a href={`${base_url}/gallerydetails`}>
                    <BsImages className="icon" />
                    <p> GALLERY </p>
                    </a>
                    </div>

                    </Col>

                    <Col lg={2} >

                    <div className="icon-style">
                        <a href={`${base_url}/eventgallery`}>
                    <MdEventNote className="icon" />
                    <p> EVENT </p>
                    </a>
                    </div>
                    </Col>

                    <Col lg={2} >
                    <div className="icon-style">
                        <a href={`${base_url}/news`}>
                    <BsNewspaper className="icon" />
                    <p> NEWS </p>
                    </a>
                    </div>
                    </Col>

                    <Col lg={4} className="subscription-style">

                     <div className="subscribe-sec">

                     <p>Subscribe For Updates</p>

                     <div>   
                    <input className="email" type="email" placeholder="Enter your email" />
                    <button> Subscribe </button>    
                     </div>   
                    </div>
                    
                    </Col>


                </Row>
                </Container>


                <div style={{ padding: '4em 0', margin: '2rem 0',backgroundColor: ' #F2F4F9' }}>
                    <Container>

                <Row>

                {/* <Col lg={1}></Col> */}

                    <Col lg={5} className="upcoming-events">

                    <Card className="upcoming-events-card" >
                    <ListGroup >
                        <ListGroup.Item>Upcoming Events</ListGroup.Item>

                        {info.map((i) => {
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
                                             <GoLocation/>  <p>&nbsp;  {i.fullLocation} </p>  </div> 
                                        </div> 
        
                                    </div>
       
                                    </div>
        
                                </ListGroup.Item>

                                )    
                        })}

                        
                        <ListGroup.Item 
                        style={{ fontSize: '14px',paddingBottom: '5em', paddingTop: '2em'  }}>
                             <a href={`${base_url}/`} style={{color: '#274472'  }} >
                                  More Events  <IoMdArrowDropright /> 
                                  </a>
                                 </ListGroup.Item>

                    </ListGroup>
                    </Card>
                    
                    </Col>

                    <Col lg={4} className="video-sec"> 
                        
                        <p>Latest Activities</p>

                        <button  onClick={handleShow}>

                        <div className="large-video">
                            <FaPlayCircle className="video-icon" /> 
                        {/* <img className="active-image" src={require(`../../assets/image/videoImage/videoImage 1.png`)} /> */}
                        
                        {currentImage && (
                        <img 
                        className="active-image"
                         id="currentImg" 
                         src= {require(`../../assets/image/videoImage/${currentImage.img}`)}
                         alt="large" /> )} 
                        
                        </div>   
                        </button>

                        <div className="video-modal">

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title> {currentImage.title} </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                             
                                <iframe title="video" className="video-style"
                                  src={currentImage.video} 
                                  frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>

                                </iframe>
  
                            </Modal.Body>

                        </Modal>
                        </div>

                    </Col>

                    <Col lg={3} className="activity-detail-sec1" > 

                 {
                     currentImage && (
                        <div className="activity-detail">

                    <p className="p1"> {currentImage.title}</p>
                    <p className="p2"> {currentImage.date} </p>
                    <p className="p3"> {currentImage.text} </p>
                   
                     <a  href={`${base_url}/`} className="p4"> Read More </a>           

                    </div>

                     )
                 }
                    
                    
                    </Col>

                </Row>

                <Row style={{ margin: '2em 0 0 0', alignItems: 'flex-start' }}>

                        {smallVideo.map((i) => {
                            return(

                                <Col  className="video-sec">
                       
                                <div className="small-video ">
                                        <FaPlayCircle className="video-icon" />
                                    <img className="active-image" alt="small video" src={require(`../../assets/image/videoImage/${i.img}`)}
                                    onClick={() => { showImage(i.img, i.id, i.title, i.date, i.text, i.video); }}
                                    />
                                </div>  

                                </Col>

                            )
                        })}

                    
                </Row>

                <Row className="activity-detail-sec2">

                    <Col>
                    
                    {
                     currentImage && (
                        <div className="activity-detail">

                    <p className="p1"> {currentImage.title}</p>
                    <p className="p2"> {currentImage.date} </p>
                    <p className="p3"> {currentImage.text} </p>
                   
                     <a  href={`${base_url}/`} className="p4"> Read More </a>           

                    </div>

                     )
                 }

                    </Col>
                </Row>
                </Container>
                </div>
           
        </div>
    );
};

export default LatestActivitiesSection;