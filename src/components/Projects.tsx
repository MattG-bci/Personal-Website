import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {
  const [hoveredProjects, setHoveredProjects] = useState(Array(3).fill(false));

  const handleMouseEnter = (index : number) => {
    const updatedHoveredProjects = [...hoveredProjects];
    updatedHoveredProjects[index] = true;
    setHoveredProjects(updatedHoveredProjects);
  };

  const handleMouseLeave = (index : number) => {
    const updatedHoveredProjects = [...hoveredProjects];
    updatedHoveredProjects[index] = false;
    setHoveredProjects(updatedHoveredProjects);
  };

  const projects = [
    {
      imgSrc: "src/assets/clip.png",
      title: "Frame Search API",
      desc: "API for searching through frames and exctracting k-top matches to a text prompt.",
      projectLink: "/components/projects/FrameSearchAPI",
    },
    
    {
      imgSrc: "src/assets/pepper.jpeg",
      title: "RoboLecturer",
      desc: "Group project on implementing a robot lecturer to teach an elemenatary-level science class.",
      projectLink: "/components/projects/RoboLecturer",
    },

    {
      imgSrc: "src/assets/pointcloud.png",
      title: "Scene Representation and Pre-Tagging for Autonomous Driving",
      desc: "Master's thesis on investigation of self-supervised methods on autonomous driving data.",
      projectLink: "/components/projects/SceneRepresentation",
    },
  ];

  useEffect(() => {
    const projectDocs = document.querySelectorAll(".project");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-animation-media");
        }
      });
    });
    
    projectDocs.forEach(projectDoc => {
        observer.observe(projectDoc);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="title">Projects</h1>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
        <Link to={project.projectLink} style={{ textDecoration: 'none', color: "inherit"}} key={index}>          
          <div
            key={index}
            style={{
              width: hoveredProjects[index] ? '350px' : '300px',
              height: hoveredProjects[index] ? '550px' : '500px',
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
            <div className="project-description">{project.desc}</div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};


export default Projects;
