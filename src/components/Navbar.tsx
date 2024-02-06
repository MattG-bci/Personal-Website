import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Navbar</NavLogo>
                </NavBarContainer>
            </Nav>
        </>
    )
};

const Nav = styled.nav``;

const NavBarContainer = styled.div``;

const NavLogo = styled(LinkR)`
    color: #fff;
`;

export default NavBar;

