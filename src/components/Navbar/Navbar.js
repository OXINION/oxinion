import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavUser,
} from "./Navbar.elements";
import oxinionLogo from "../images/oxinion_logo.png";
import { RiUserLocationLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={oxinionLogo} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks>Ride</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Travel</NavLinks>
            </NavItem>
            <NavUser>
              <RiUserLocationLine />
            </NavUser>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
