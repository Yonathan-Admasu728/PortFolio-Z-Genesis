// import React from "react";
// import Header from "../components/Header";
// function Contact() {
//   return (
//     <div>
//       <Header/>
//       <div className="container contact mt-5">
//         <div className="row pt-5">
//           <div className="col-md-6 p-5">
//               <img src="./contactus.svg" alt="" />
//           </div>
//           <div className="col-md-6">
//               <div className='contact-form m-2 p-5 n-box2'>
//                   <h3 className='font-bold'>Contact US</h3>

//                   <hr />
//                   <input type="text" className='form-control' placeholder='Name'/>
//                   <input type="text" className='form-control' placeholder='Name'/>

//                   <textarea className="form-control" rows={3} defaultValue={""} />

//                   <button className='primary-button mt-3'>SUBMIT</button>
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';
import Header from "../components/Header";
import { contact, section5Title, social } from '../components/profile';
import '../stylesheets/contact.css';
// import AOS from "aos";
import "aos/dist/aos.css";

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
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
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
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
        </div>
    )
    
}

export default Contact

