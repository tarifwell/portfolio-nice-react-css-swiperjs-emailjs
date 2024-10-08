import React from 'react';

import './About.css';
import img_about from '../../assets/images_profile/img_profile_02.jpg';
import doc_cv from '../../assets/docs/doc_my-cv.pdf';
import Info from './Info';
import ico_file from '../../assets/icons/ico_file.svg';

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
              {/* <i class="uil uil-import button__icon"></i> */}
              {/* <i class='bx bx-file button__icon' ></i> */}
              <img src={ico_file} alt="files icon" className="button__icon" />
            </a>
        </div>
      </div>
    </section>
  )
}

export default About;