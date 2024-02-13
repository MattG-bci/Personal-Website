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

function App() {
  return (
    <>
      <ScrollToBottom>
        <Message />
        <div className="about-container">
          <About />
        </div>
        <div className="background-container">
          <Background />
        </div>
        <div className="projects-container">
          <Projects />
        </div>
        <div className="project-container">
          <Blog />
        </div>
        <div className="project-container">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </ScrollToBottom>
    </>
  );
};

export default App;
