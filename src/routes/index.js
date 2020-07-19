import React from "react";
import { Route, Switch } from "react-router-dom";
import { base_url } from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import LandingPage from '../OnlyPages/LandingPage/LandingPage';
import EventGalleryPage from "../OnlyPages/EventGalleryPage/EventGalleryPage";
import NewsViewsPage from "../OnlyPages/NewsViewsPage/NewsViewsPage";
import GalleryDetailsPage from '../OnlyPages/GalleryDetailsPage/GalleryDetailsPage';
import NewsDetailsPage from '../OnlyPages/NewsDetailsPage/NewsDetailsPage';
import ContactPage from '../OnlyPages/ContactPage/ContactPage';
import AboutPage from '../OnlyPages/AboutPage/AboutPage';

import '../App.scss';


function Routes() {
    return (
      <div className="App">

        <Navigation />

        <Switch>
          <Route path={`${base_url}/`} exact component={LandingPage} />
          <Route path={`${base_url}/eventgallery`} exact component={EventGalleryPage} />
          <Route path={`${base_url}/news`} exact component={NewsViewsPage} />
          <Route path={`${base_url}/gallerydetails`} exact component={GalleryDetailsPage} />
          <Route path={`${base_url}/newsdetails`} exact component={NewsDetailsPage} />
          <Route path={`${base_url}/contact`} exact component={ContactPage} />
          <Route path={`${base_url}/about`} exact component={AboutPage} />

          
         
        </Switch>

        <Footer/>
      </div>
    );
  }
  
  export default Routes;
  
