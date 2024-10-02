import React from 'react';

import ico_scroll from '../../assets/icons/ico_scroll.svg';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <img src={ico_scroll} alt="scroll icon" className="home__scroll-icon"/>
            {/* <i className="uil uil-mouse-alt home__scroll-mouse"></i> */}
            {/* stroke="var(--title-color)" */}

            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
            
        </a>
        
    </div>
  )
}

export default ScrollDown;