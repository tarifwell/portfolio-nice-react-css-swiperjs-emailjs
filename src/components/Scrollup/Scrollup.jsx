import React, { useEffect, useRef } from 'react';

import './Scrollup.css';

const Scrollup = () => {

  const scrollUpRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }

  useEffect(() => {
    const handleScroll = () => {
        // Check if the ref is set and modify its class based on scroll position
        if (scrollUpRef.current) {
            if (window.scrollY >= 560) {
                scrollUpRef.current.classList.add('show-scroll');
            } else {
                scrollUpRef.current.classList.remove('show-scroll');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <button className="scrollup" onClick={scrollToTop} ref={scrollUpRef}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  )
}

export default Scrollup;