import React from 'react';
import Header from "../components/Header";
import { contact, section5Title, social } from '../components/profile';
import '../stylesheets/contact.css';
// import AOS from "aos";
import "aos/dist/aos.css";

import { FaFileDownload } from 'react-icons/fa'

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
                        <button style={ {background: '#786399'}} type="submit">Send Message</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half " >
                    <p>
                    Feel free to contact me by submitting this form, clicking on LinkedIn, Tweeter,and please click on Resume icons to see my Resume.
                    </p>
                    <div className="rs">
                <div className="d-flex justify-content-center align-items-center flex-column ">
                    {social.resume && <a title="Download Resume" href={social.resume} download><span className='res-download'>resume</span><br/><FaFileDownload color='#6207f0' fontSize='3em' opacity='0.5'/></a>}
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

