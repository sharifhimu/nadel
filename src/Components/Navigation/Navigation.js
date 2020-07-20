import React, {useEffect, useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import './Navigation.scss';

import logo from '../assets/image/logo.png';
import mujib from '../assets/image/mujib-logo.png';

import {FiPhone} from 'react-icons/fi';
import {IoIosMail} from 'react-icons/io';
import {AiOutlineMenu} from 'react-icons/ai';
import {GoSearch} from 'react-icons/go';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

import { base_url } from "../../config";

const Navigation = () => {

    const [fix, setfix] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let className = '';
            if( window.scrollY > 177 ){
                className = 'fixed-top';
            }
            setfix({className});
        })

       
    }, [] )

    console.log(fix);

    return (
        <div >
            <div className="header1">
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={5} className="number">
                    <FiPhone className="icon" />    
                    +88-01711-995525
                    </Col>

                    <Col lg={6} md={4} sm={5} className="mail">
                    <IoIosMail className="icon" />    
                    sac.nadel@gmail.com
                    </Col>

                    <Col lg={3} md={4} sm={12} >
                    
                    <a href={`${base_url}/`} className="social-icons"> <FaFacebookF /> </a>
                    <a href={`${base_url}/`} className="social-icons"> <AiOutlineTwitter/> </a>
                    <a href={`${base_url}/`} className="social-icons"> <FaLinkedinIn/> </a>
                    <a href={`${base_url}/`} className="social-icons"> <FiInstagram/> </a>

                    </Col>
                </Row>
                </Container>
                </div>

                <Container className="header2">
                <Row>

                    <Col lg={1} className="blank-class">
                    
                    </Col>
                    <Col lg={7} md sm xs={9} className="name">
                        <img src={logo} alt="logo" className="logo" />
                        <h3> Shafiul Alam Chowdhury Nadel </h3>                    
                    </Col>

                    <Col lg={4} md sm xs>
                    <img src={mujib} alt="mujib-logo" className="mujib-logo" />
                    </Col>
                </Row>
                </Container>


                <div className= { window.scrollY > 177 ? "header3 fixed-top" : "header3" }>    
                {/* <div className="header3"> */}
                <Container >
                <Row>
                <Col lg={1} md={0}>
                    
                </Col>

                    <Col md={7} sm={12} className="navigation switch">

                    <a href={`${base_url}/`}>    
                    HOME 
                    </a>
                    <div className="border-right"></div>

                    <a href={`${base_url}/about`}>    
                    ABOUT 
                    </a>
                    <div className="border-right"></div> 

                    <a href={`${base_url}/news`}>    
                    NEWS & EVENTS 
                    </a>
                    <div className="border-right"></div>

                    <a href={`${base_url}/eventgallery`}>    
                    GALLERY
                    </a>
                    <div className="border-right"></div>
                        
                    <a href={`${base_url}/contact`}>    
                    CONTACT
                    </a>
                    
                            
                    </Col>

                    <Col md={3} sm={12} className="navigation display dropdown-switch1">

                    {/* <AiOutlineMenu className="icon" /> */}

                    <div className="dropdown">
                    <button className="dropbtn"> <AiOutlineMenu className="icon" /> </button>
                    <div className="dropdown-content">
                        <a href={`${base_url}/`}>Link 1</a>
                        <a href={`${base_url}/`}>Link 2</a>
                        <a href={`${base_url}/`}>Link 3</a>
                    </div>
                    </div>    

                    <div className="border-right"></div>
                    <GoSearch className="icon" />
                    
                    </Col>

                    <Col md={3} sm={12} className="navigation display dropdown-switch2">
                    
                    <div className="dropdown">
                    <button className="dropbtn"> <AiOutlineMenu className="icon" /> </button>
                    <div className="dropdown-content">
                        <a href={`${base_url}/`}>HOME</a>
                        <a href={`${base_url}/about`}>ABOUT</a>
                        <a href={`${base_url}/news`}>NEWS & EVENTS</a>
                        <a href={`${base_url}/eventgallery`}>GALLERY</a>
                        <a href={`${base_url}/contact`}>CONTACT</a>
                        <a href={`${base_url}/`}>MORE LINK</a>
                    </div>
                    </div>    

                    <div className="border-right"></div>
                    <GoSearch className="icon" />

                    </Col>
                    
                </Row>
                </Container>
                </div>

                <Container>
                <div className= {window.scrollY > 177 ? "navheight" : "noheight" }  ></div>
                </Container>
        </div>
    );
};

export default Navigation;