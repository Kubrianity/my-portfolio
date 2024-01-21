import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container container">
        <h1 className="footer__title"> Made with love &#x1F5A4;</h1>
        <div className="footer__social">
          <a href="https://www.github.com/Kubrianity" className="home__social-icon" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/kubry" className="home__social-icon" target="_blank" rel="noreferrer" >
            <FiLinkedin />
          </a>    
        </div>
        <span className="footer__copy"></span>
      </section>
    </footer>
  );
}

export default Footer;