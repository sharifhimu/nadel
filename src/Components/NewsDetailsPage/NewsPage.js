import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import image from '../assets/image/newsDetailsPage/one.png';

import {base_url} from '../../config';

import './NewsPage.scss';
import {newsinfo, recentnewsinfo} from './NewsPageInfo';

const NewsPage = () => {
    return (
        <div>
            <Container className="newspage-container">
                
                <h4>
                    BCB Board Meeting During Champion's Trophy
                </h4>


                <div className="publish-text">
                <p> Published </p> <p> 12 Feb 2019 11:32AM </p>
                </div>    

                <Row>
                    <Col lg={7} className="news-details-col" >
                        <img className="news-details-img" alt="news" src={image} />

                        <div className="news-details">
                            <h6>
                                The Bangladesh Cricket Board(BCB) Is The Governing Body of Cricket In Bangladesh. 
                                The BCB First Became An Associate Member Of The International Cricket Council.

                            </h6>

                            <p>
                                In excepteur quis sit aliqua duis ex ut cillum.
                                 Proident deserunt ipsum ad exercitation incididunt
                                  id veniam ex fugiat ut. Enim est quis esse esse<br/><br/>

                                   cillum cupidatat magna dolore elit tempor qui 
                                   adipisicing eu. Nulla laborum mollit tempor veniam 
                                   laboris labore. Ea aliquip eiusmod exercitation irure
                                    irure consectetur ea dolor aliquip duis quis irure. 
                                    Esse eiusmod aute mollit velit est magna.
                                    cillum cupidatat magna dolore elit tempor qui 
                                   adipisicing eu. Nulla laborum mollit tempor veniam 
                                   laboris labore. Ea aliquip eiusmod exercitation irure
                                    irure consectetur ea dolor aliquip duis quis irure. 
                                    Esse eiusmod aute mollit velit est magna.<br/><br/>
                                    cillum cupidatat magna dolore elit tempor qui 
                                   adipisicing eu. Nulla laborum mollit tempor veniam 
                                   laboris labore. Ea aliquip eiusmod exercitation irure
                                    irure consectetur ea dolor aliquip duis quis irure. 
                                    Esse eiusmod aute mollit velit est magna.
                                    cillum cupidatat magna dolore elit tempor qui 
                                   adipisicing eu. Nulla laborum mollit tempor veniam 
                                   laboris labore. Ea aliquip eiusmod exercitation irure
                                    irure consectetur ea dolor aliquip duis quis irure. 
                                    Esse eiusmod aute mollit velit est magna.<br/><br/>
                            </p>
                        </div>
                    </Col>

                    <Col lg={5} className="mostread-col">

                        <p> Most Read </p>

                        <div className="mostread">
                                
                            {newsinfo.map((i) => {
                                return(

                                    <div className="mostread-single">
                                <a href={`${base_url}/`}>
                                <img src={i.img} alt="img" />
                                <p> {i.title} </p>  
                                </a>    
                            </div>


                                )
                            })}
                            
                        </div>

                        <div>
                            <p>Recent News</p>

                            <div className="recentnews" >
                               
                               {recentnewsinfo.map((i) => {
                                   return(

                                    <a className="recentnews-single" href={i.link} target="_blank" rel="noopener noreferrer" > {i.title} </a>
                                

                                   )
                               })}
                                                              
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default NewsPage;