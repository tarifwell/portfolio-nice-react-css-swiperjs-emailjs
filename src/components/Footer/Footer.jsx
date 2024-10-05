import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <section className="footer" id="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Tarek</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    {/* <i className="uil uil-instagram"></i> */}
                    <i className="bx bxl-instagram"></i>
                </a>
                {/* <a href="https://www.linkedin.com/" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    <i className="uil uil-linkedin-alt"></i>
                </a> */}
                {/* <a href="https://dribbble.com" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    <i className="uil uil-dribbble"></i>
                </a> */}
                {/* <a href="https://github.com" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    <i className="uil uil-github-alt"></i>
                </a> */}
                <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    {/* <i className="uil uil-twitter-alt"></i> */}
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.facebook.com" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    <i className="bx bxl-facebook"></i>
                </a>

            </div>

            <span className="footer__copy">
                &#169; @tarifwell. All right reserved
            </span>

        </div>
    </section>
  )
}

export default Footer;