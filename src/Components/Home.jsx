import React from 'react';
import '../Stylesheets/main.css';
import sample from '../Images/image-section.jpg';

const Home = () => {
  return (
    <> 
        <div className="container">
            <div className="typography-section">
                <h1>Optimize <br />your brand</h1>
                <h2>Olivia Ollsen</h2>
                <h3>Brand and Communication consultant</h3>
                <button class="button-57" role="button"><span class="text">Explore More</span><span>Getting Started</span></button>
            </div>
            <div className="image-section">
                <img src={sample} alt="" />
            </div>
        </div>
    </>
  )
}

export default Home
