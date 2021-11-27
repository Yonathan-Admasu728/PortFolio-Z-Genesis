import React from 'react';
import Header from "../components/Header";
import { contact, section5Title, social } from '../components/profile';
import '../stylesheets/contact.css';
// import AOS from "aos";
import "aos/dist/aos.css";

import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithubSquare, FaFileDownload } from 'react-icons/fa'

const Contact = () => {
    
    return (
      <div>
        <Header/>
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://www.linkedin.com/in/yonathanadmasu/"} method={contact.contactUrl ? "POST" : "GET"}>
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Send Message</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                        
                    </p>
                    <div className="rs">
                <div className="d-flex justify-content-center align-items-center flex-column ">
                <div className="d-flex justify-content-center align-items-center flex-row">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><FaLinkedin color='darkblue' fontSize='2em'/></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><FaFacebook color='blue' fontSize='2em'/></a>}
                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><FaTwitter color='aqua' fontSize='2em'/></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><FaInstagram color='orange' fontSize='2em'/></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><FaGithubSquare color='white' fontSize='2em'/></a>}<br/>
                </div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><FaFileDownload color='green' fontSize='2em'/></a>}
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
    
}

export default Contact

