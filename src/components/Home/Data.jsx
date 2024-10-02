import React from 'react';
import ico_hand from '../../assets/icons/ico_hand.svg';
import ico_send from '../../assets/icons/ico_send.svg';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Hi, I'am Tarek
        <img src={ico_hand} alt="hand icon" className="home__hand" />
        {/* <i className="uil uil-hand home__hand"></i> */}
      </h1>

      <h3 className="home__subtitle">Frontend Developer</h3>

      <p className="home__description">
        I am a Frontend Developer with a strong background in design and development. I am passionate about creating intuitive and beautiful user interfaces. I am well-versed in HTML, CSS, and JavaScript. I am also skilled in React and Next.js.
      </p>

      <a href="#contact" className="button button--flex">
        Contact Me
        {/* <img src={ico_send} alt="send icon" style={{marginLeft: '10px', color: 'white'}} /> */}
        <i className="uil uil-message button__icon" style={{marginLeft: '10px', color: 'var(--container-color)'}}></i>
        {/* fill="var(--container-color)" */}

      </a>



    </div>
  )
}

export default Data;