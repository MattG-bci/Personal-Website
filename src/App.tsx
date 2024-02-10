import React from "react";
import Message from "./components/Message";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import ScrollToBottom from 'react-scroll-to-bottom';
import About from "./components/About";
import "./styles.css";
import Background from "./components/Background";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <ScrollToBottom>
        <NavBar />
        <div className="container">
          <Message />
        </div>
        <div className="about-container">
          <About />
        </div>
        <div className="background-container">
          <Background />
        </div>
        <div>
          <Projects />
        </div>
      </ScrollToBottom>
    </>
  );
};

export default App;
