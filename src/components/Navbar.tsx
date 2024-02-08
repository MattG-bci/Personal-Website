import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="nav">
          <div><h3>About</h3></div>
          <div><h3>Background</h3></div>
          <div><h3>Projects</h3></div>
          <div><h3>Blog</h3></div>
          <div><h3>Contact</h3></div>
        </div>
    )
};

const Nav = styled.nav``;

const NavBarContainer = styled.div``;

const NavLogo = styled(LinkR)`
    color: #fff;
`;

export default NavBar;

