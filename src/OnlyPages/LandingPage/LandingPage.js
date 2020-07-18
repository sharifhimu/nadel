import React from 'react';

import CarouselSlider from '../../Components/LandingPage/CarouselSlider/CarouselSlider';
import LatestActivities from '../../Components/LandingPage/LatestActivitiesSection/LatestActivitiesSection';
import NewsViews from '../../Components/LandingPage/NewsViews/NewsViews';
import Gallery from '../../Components/LandingPage/Gallery/Gallery';


const LandingPage = () => {
    return (
        <div>
            <CarouselSlider />
            <LatestActivities />
            <NewsViews />
            <Gallery />
            
        </div>
    );
};

export default LandingPage;