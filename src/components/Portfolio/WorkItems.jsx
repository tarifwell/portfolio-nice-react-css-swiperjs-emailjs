import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>

      <img src={item.image} alt="work" className="work__img" />

      <h3 className="work__title">{item.title}</h3>

      <div className="work__button-container">
        <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer"> 
          <i className="uil uil-github work__button-icon"></i>
          <i className="bx bx-right-arrow-alt work__button-icon"></i> 
        </a>

        <a href={item.demo} className="work__button" target="_blank" rel="noopener noreferrer">
          Demo 
          <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
      </div>
    </div>
  )
}

export default WorkItems;