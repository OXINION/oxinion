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
  NavBtnLink,
} from "./Navbar.elements";
import oxinionLogo from "../../assets/images/oxinion_logo.png";
import { RiUserLocationLine } from "react-icons/ri";
import { Button } from "../../globalStyles";

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
            <NavBtnLink to="/sign-up">
              <Button primary>Sign Up</Button>
            </NavBtnLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
