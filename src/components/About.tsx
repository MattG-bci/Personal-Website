import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";


const About = () => {
    return (
        <div>
            <div className="header">
                    <h1 className="title">About</h1>
            </div>
            <div className="about">
                <div className="profile-pic">
                    <img src="src/assets/profile.jpeg" height="450" width="550"></img>
                </div>
                <div>
                    <div className="about-description">
                        <div className="window-border">
                            <div className="window-dot-1"></div>
                            <div className="window-dot-2"></div>
                            <div className="window-dot-3"></div>
                        </div>
                        <div className="description-container">
                            <p className="description">I am a recent MSc Applied Machine Learning gradutate from Imperial College London.</p>
                            <p className="description">Experianced in developing machine learning algorithms for various fields ranging from medical imaging to autonomous driving.</p>
                            <p className="description">Currently looking for remote opportunities or in London, UK.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default About;
