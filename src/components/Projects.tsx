import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProjects, setHoveredProjects] = useState(Array(3).fill(false));

  const handleMouseEnter = (index) => {
    const updatedHoveredProjects = [...hoveredProjects];
    updatedHoveredProjects[index] = true;
    setHoveredProjects(updatedHoveredProjects);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredProjects = [...hoveredProjects];
    updatedHoveredProjects[index] = false;
    setHoveredProjects(updatedHoveredProjects);
  };

  const projects = [
    {
      imgSrc: "src/assets/pepper.jpeg",
      title: "RoboLecturer",
      desc: "ewf",
    },
    
    {
      imgSrc: "src/assets/pepper.jpeg",
      title: "RoboLecturer",
      desc: "ewf",
    },

    {
      imgSrc: "src/assets/pepper.jpeg",
      title: "RoboLecturer",
      desc: "ewf",
    },
  ];

  return (
    <div>
      <div className="header">
        <h1 className="title">Projects</h1>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: hoveredProjects[index] ? '350px' : '300px',
              height: hoveredProjects[index] ? '450px' : '400px',
              transition: 'all 0.2s ease-in-out',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="project"
          >
            <div className="img-container">
              <img src={project.imgSrc} height="300" width="260" alt="project-img" />
            </div>
            <div className="title">{project.title}</div>
            <div className="desc">{project.desc}</div>
          </div>
          
        ))}
      </div>
    </div>
  );
};


export default Projects;
