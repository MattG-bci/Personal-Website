import React from "react";

import Message from "./components/Message";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import ScrollToBottom from 'react-scroll-to-bottom';
import About from "./components/About";
import "./styles.css";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
        <ScrollToBottom>
          <Message />
          <div id="about-container" className="about-container">
            <About />
          </div>
          <div id="background-container" className="background-container">
            <Background />
          </div>
          <div id="projects-container" className="projects-container">
            <Projects />
          </div>
          <div id="blog-container" className="project-container">
            <Blog />
          </div>
          <div id="contact-container">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </ScrollToBottom>
    </>
  );
}

export default Home;