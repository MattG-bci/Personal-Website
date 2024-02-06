import React from "react";
import Message from "./components/Message";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import ScrollToBottom from 'react-scroll-to-bottom';
import "./styles.css";


const NextPage = styled.div`
  margin-top: 200vh; /* Ensure this content appears below the viewport */
`;

function App() {
  return (
    <>
      <ScrollToBottom>
        <div className="nav">
          <div><h3>About</h3></div>
          <div><h3>Background</h3></div>
          <div><h3>Projects</h3></div>
          <div><h3>Blog</h3></div>
          <div><h3>Contact</h3></div>
        </div>
        <div className="container">
          <Message />
        </div>
      </ScrollToBottom>
    </>
  );
};

export default App;
