import React from 'react';
import '../Stylesheets/about.css';
import aboutImage from '../Images/about-image.jpg';

const About = () => {
  return (
    <>
      <div className="container-about">
        <div className="typography-about">
          <h1>About Us</h1>
          <div className="typography-about-paragraph">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi tempora pariatur quidem rem quas, aperiam nihil animi fuga at libero eum, quibusdam doloribus placeat natus nesciunt mollitia unde distinctio. Pariatur quibusdam veniam quis unde exercitationem asperiores distinctio ducimus dolor qui, dolores quam odio eaque illum placeat sit mollitia et?</h3> <br />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit amet officiis atque consequuntur cumque autem, dolorem id voluptatem accusantium magnam delectus velit quia molestiae aliquam, unde ad possimus. Ex.</h3>
          </div>
        </div>
        <div className="image-about">
          <img src={aboutImage} alt="" />
        </div>
        {/* <div className="our-mission">
                    <h1>Our Mission</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quae esse ipsa suscipit id voluptates voluptatem voluptatum impedit eos, ad sequi laborum molestiae! A exercitationem sit, esse laboriosam iure quo? Fuga velit itaque ducimus at necessitatibus excepturi. Ratione excepturi nam magnam laboriosam libero. Maiores quas incidunt ex exercitationem architecto deserunt?</h3>
                </div> */}
        <div className="our-team">
          
        </div>
      </div>
    </>
  );
}

export default About
