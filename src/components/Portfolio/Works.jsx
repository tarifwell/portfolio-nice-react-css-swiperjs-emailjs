import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
          setProjects(projectsData);
        } else {
          const newProjects = projectsData.filter((project) => {
            // return project.category.includes(item.name);
            return project.category.toLowerCase() === item.name.toLowerCase();
          });
          setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }
    
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span 
              // onClick={() => setItem({ name: item.name })} 
              onClick={(e) => {
                handleClick(e, index)
              }} 
              key={`category-${index}`} 
              className={`${active === index ? "active-work" : ""} work__item`} 
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
      {/* {projectsData.map((item, index) => { */}
        {projects.map((item, index) => {
            //   return <WorkItems item={item} key={`project-${index}`} />;
            return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
