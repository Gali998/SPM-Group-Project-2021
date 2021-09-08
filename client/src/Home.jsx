import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Container from './Container';

import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import './css/ContactUs.css';
//import backgroundImage1 from './images/caller1.jpg';
//import backgroundImage2 from './images/map1.jpg';

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <Header />


                <HeroSection />
                <Container />
                <Cards />
                <Slider />



                <Footer />
            </div>
        );
    }
}