import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {  social } from '../components/profile';

function Footer() {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,224L60,186.7C120,149,240,75,360,53.3C480,32,600,64,720,96C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div className="div">
              <p>Designed and Developed By</p>
              <hr />

              <div className="d-flex justify-content-between px-2">
              <a  rel="noopener noreferrer" target="_blank"  href={social.facebook}><FaFacebook className="footer-icons"/></a>
              <a  rel="noopener noreferrer" target="_blank"  href={social.instagram}><FaInstagram className="footer-icons"/></a>
              <a  rel="noopener noreferrer" target="_blank"  href={social.twitter}><FaTwitter className="footer-icons"/></a>
              <a  rel="noopener noreferrer" target="_blank"  href={social.linkedin}><FaLinkedinIn  className="footer-icons"/></a>
              <a  rel="noopener noreferrer" target="_blank"  href={social.github}><FaGithub className="footer-icons"/></a>
              </div>

              <hr />

              <br />

              <p>Yonathan-Admasu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
