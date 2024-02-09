import React from "react";
import Message from "./components/Message";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import ScrollToBottom from 'react-scroll-to-bottom';
import About from "./components/About";
import "./styles.css";
import Component from "./components/Background";


const NextPage = styled.div`
  margin-top: 200vh; /* Ensure this content appears below the viewport */
`;

function App() {
  return (
    <>
      <ScrollToBottom>
        <NavBar />
        <div className="container">
          <Message />
        </div>
        <>
          <About />
        </>
        <>
          <Component />
        </>
      </ScrollToBottom>
    </>
  );
};

export default App;
