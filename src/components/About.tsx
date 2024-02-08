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
                    <img src="src/assets/najman.webp" height="450" width="550"></img>
                </div>
                <div className="about-description">
                    <p className="description">I am a recent MSc Applied Machine Learning gradutate from Imperial College London.</p>
                    <p className="description">Experianced in developing machine learning algorithms for various fields ranging from medical imaging to autonomous driving.</p>
                    <p className="description">Currently looking for opportunities remote or in London, UK.</p>
                </div>
            </div>
        </div>
    )
};


export default About;
