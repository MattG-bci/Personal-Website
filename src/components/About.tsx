import React, { useEffect } from 'react';


const About = () => {
    useEffect(() => {
        const description = document.querySelectorAll(".about-description");
        const profile = document.querySelectorAll(".profile-pic");
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate")
            }
          });
        });
        
        let contents = [description, profile];
        contents.forEach(content => {
          content.forEach(el => {
            observer.observe(el)});
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
    
  return (
    <div>
      <div className="header">
        <h1 className="title">About</h1>
      </div>
      <div className="about">
        <div className="profile-pic">
          <img src="src/assets/profile.jpeg" height="400" width="500" alt="Profile" />
        </div>
        <div>
          <div className="about-description">
            <div className="window-border">
              <div className="window-dot-1"></div>
              <div className="window-dot-2"></div>
              <div className="window-dot-3"></div>
            </div>
            <div className="description-container">
              <p className="description">I am a recent MSc Applied Machine Learning graduate from Imperial College London.</p>
              <p className="description">Experienced in developing machine learning algorithms for various fields ranging from medical imaging to autonomous driving.</p>
              <p className="description">Currently looking for remote opportunities or in London, UK.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
