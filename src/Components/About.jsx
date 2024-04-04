import React from 'react';
import '../Stylesheets/about.css';
import aboutImage from '../Images/about-image.jpg';
import Card from './Card';

const About = () => {
  return (
    <>
            <div className="container-about">
                <div className="typography-about">
                    <h1>About Us</h1>
                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates impedit provident asperiores aliquam quibusdam ipsum.</h3>
                </div>
                <div className="image-about">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="our-mission">
                    <h1>Our Mission</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quae esse ipsa suscipit id voluptates voluptatem voluptatum impedit eos, ad sequi laborum molestiae! A exercitationem sit, esse laboriosam iure quo? Fuga velit itaque ducimus at necessitatibus excepturi. Ratione excepturi nam magnam laboriosam libero. Maiores quas incidunt ex exercitationem architecto deserunt?</h3>
                </div>
                <div className="our-team">
                    <h1>Meet Our Team</h1>
                    <Card/>
                </div>
            </div>
    </>
  )
}

export default About
