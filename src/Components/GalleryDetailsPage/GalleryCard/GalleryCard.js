import React from 'react';
// import {Container} from 'react-bootstrap';

import {AiOutlineClockCircle} from 'react-icons/ai';

import './GalleryCard.scss';

import {info} from './GalleryCardInfo';
import {base_url} from '../../../config';

const GalleryCard = () => {
    return (
        <div>
            {/* <Container className="gallerycard-container"> */}

            <div className="gallerycard-container">

                <h4>BCB Board Meeting</h4>
                <p> <AiOutlineClockCircle style={{ marginRight: '5px' }} /> 23 January 2020  </p>




                <div className="gallery-ul">

                {info.map((i) => {
                    return(

                    <div className="gallery-li">


                        <a href={`${base_url}/gallerydetails`} alt="gallery">
                        <div className="overgradient"> <p> {i.title} </p> </div>
                         <img className="gallery-img" src={i.img} alt="gallery img" /> 
                         </a>
                    </div>
                
                    )
                })}
                    </div>

                    

                

            {/* </Container> */}
        </div>

        </div>
    );
};

export default GalleryCard;