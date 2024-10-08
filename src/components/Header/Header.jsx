import React, { useState } from "react";

import "./Header.css";
// import logo from '../../assets/logos/logo_1.png';

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const scrollHeader = document.querySelector(".header");

    // When the scroll is higher than 200 viewport height, add the scroll-header class to the a tag with the header tag
    if (this.scrollY >= 80) scrollHeader.classList.add("scroll-header");
    else scrollHeader.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [toggle, showMenu] = useState(false);

  const [activeNav, setActiveNav] = useState("#home");

  const navToggle = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show-menu");
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {/* <img src={logo} alt="logo" style={{height: '16px', marginRight: '5px'}}/> */}
          {/* <i class='bx bxs-spa' style={{ marginRight: '5px', fontSize: '25px' }}></i> */}
          {/* <i class='bx bxl-squarespace' style={{ marginRight: '5px', fontSize: '25px' }}></i> */}
          
          <i className='bx bx-spa' style={{ marginRight: '5px', fontSize: '25px' }}></i>
          
          <span>@tarifwell</span>
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
