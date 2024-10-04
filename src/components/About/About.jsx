import React from 'react';

import './About.css';
import img_about from '../../assets/images_profile/img_about_01.png';
import doc_cv from '../../assets/docs/doc_my-cv.pdf';
import Info from './Info';
import ico_files from '../../assets/icons/ico_files.svg';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={img_about} alt="about" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I'm Tarek. I'm a Frontend Developer and I'm very passionate about creating intuitive and beautiful user interfaces. I am well-versed in HTML, CSS, and JavaScript. I am also skilled in React and Next.js.
          </p>

          <a href={doc_cv} download="" className="button button--flex">
              Download CV
              {/* <img src={ico_files} alt="files icon" className="button__icon" /> */}
              {/* fill="var(--container-color)" */}
              <i className="uil uil-download-alt button__icon"></i>
              
            </a>

          {/* <div className="about__info">
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Years of <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> projects
              </span>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a href="#contact" className="button button--flex">
              Contact Me
              <i className="uil uil-message button__icon"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About;