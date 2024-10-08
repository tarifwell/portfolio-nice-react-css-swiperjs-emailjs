import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        
        <a href="mailto:contact@example.com" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-envelope"></i>
        </a>
        
        <a href="https://www.linkedin.com/" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://www.facebook.com" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-facebook-f home__social-icon-facebook"></i>
        </a>

        <a href="https://github.com" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://twitter.com" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-twitter-alt"></i>
        </a>

        {/* <a href="https://www.instagram.com" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-instagram"></i>
        </a> */}

        {/* <a href="https://dribbble.com" className="home__social-icon" target="_blank" rel="noreferrer noopener">
            <i className="uil uil-dribbble"></i>
        </a> */}
        
    </div>
  )
}

export default Social;