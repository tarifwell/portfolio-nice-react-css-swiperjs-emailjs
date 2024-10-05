import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";
import ico_hand from '../../assets/icons/ico_hand.svg';
import ico_send from '../../assets/icons/ico_send.svg';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, /* Emailjs service id */
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, /* Emailjs template id */
        form.current, 
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY, /* Emailjs public key */
        }
    )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">contact@example.com</span>

              <a href="mailto:contact@example.com" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">999-888-777</span>

              <a href="https://api.whatsapp.com/send?phone=999888777&text=Hello, more information!" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              {/* <i className="bx bxl-messenger contact__card-icon"></i> */}
              <i className="bx bx-message-rounded-dots contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.tarek</span>

              <a href="https://m.me/user.tarek" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          

          <form ref={form} onSubmit={sendEmail} className="contact__form">{/* action="" */}

          <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name="form_name" className="contact__form-input" placeholder="Insert your name" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input type="email" name="form_email" className="contact__form-input" placeholder="Insert your email" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="form_project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project" />
            </div>

            <button className="button button--flex">
                Send Message
                {/* <img src={ico_send} alt="send icon" style={{marginLeft: '10px', color: 'white'}} /> */}
                <i className="uil uil-message button__icon" style={{marginLeft: '10px', color: 'var(--container-color)'}}></i>
                {/* fill="var(--container-color)" */}
            </button>

            </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
