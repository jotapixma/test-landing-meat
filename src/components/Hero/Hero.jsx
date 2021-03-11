import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia.jsx';
import logoNav from '../../assets/logo.svg';
import './Hero.css'


const Hero = () => {

    return(
        <header className="header-section">
            <div className="hero-banner"></div>
            <div className="container">
                <div className="d-flex justify-space-between flex-column flex-md-row">
                    <figure>
                        <img src={logoNav} alt="logo" className="img-fluid"/>
                    </figure>
                    <SocialMedia/>
                </div>
                <h1 className="hero-title super-title">El secreto <span>de tu cocina</span></h1>    
            </div>
        </header>
      
    )

}

export default Hero;