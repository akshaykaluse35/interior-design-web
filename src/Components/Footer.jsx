import React from 'react';
import '../Stylesheets/footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="typography-footer">
                <h1>Let's Collaborate</h1>
            </div>
            <div className="footer-content">
                <h1>Visit Social Media </h1>

                <div className="footer-social">
                    <SocialIcon className='socia-icon' network="youtube" url=""/>
                    <SocialIcon className='socia-icon' network="instagram" url=''/>
                    <SocialIcon className='socia-icon' network="whatsapp" url=''/>
                    <SocialIcon className='socia-icon' network="facebook" url=''/>
                </div>

                <div className="footer-adress">
                        <h3>Pune Maharashtra</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
