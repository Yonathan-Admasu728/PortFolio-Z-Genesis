import React from 'react';
import { social } from '../components/profile';
import { useForm, ValidationError } from '@formspree/react';
import '../stylesheets/contact.css';
// import AOS from "aos";
import "aos/dist/aos.css";

 import { FaFileDownload, FaLaptopCode } from 'react-icons/fa'

function Contact() {
  return (
    <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./cont.svg')` }}
      >
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
              <div className='tpl' >
              <p className='pitch' style={{color: '#077e85'}}>
                Please feel free to contact me by submitting this form, check me on LinkedIn, Tweeter, and please checkout Projects Demo and click on Resume icons to see my Resume.
              </p>
                 <div className="d-flex justify-content-center align-items-center flex-row ">
                     {social.resume && <a title="Download Resume" href={social.resume} download>resume<br/><FaFileDownload className='icon-rp' color='#36136eb4' fontSize='3rem' /></a>}  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;

                     { <a title="Projects Demo" href="/" download>Projects<br/><DemoButton/></a>}
                 </div>
                 </div>
          </div>

          <div className="col-md-6">
              <div className='contact-form m-2 p-5 n-box2'>
                  <h3 className='font-bold' style={{color: '#077e85'}}>Get in Touch</h3>

                  <hr />
                  <ContactForm />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

function DemoButton() {
    return (
        <>
            <div className="glow">
                <a href="/projects"><button className="neon-button">&nbsp;<FaLaptopCode className='icon-rp' color='#36136eb4' fontSize='2.5em'/></button></a>
            </div>
        </>
    )
}





function ContactForm() {
  const [state, handleSubmit] = useForm("mknywzgn");
  if (state.succeeded) {
      return <p>It Is great to hear from you!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input type="text" id="fname" name="name" placeholder="name" required></input>
      <input type="email" id="email" name="email" placeholder="email " required></input>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea id="message" name="message" placeholder="Message" ></textarea>
      
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className='submit-btn' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
