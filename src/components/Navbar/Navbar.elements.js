import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(181, 180, 186, 0.25);
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;
  // ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const NavIcon = styled.img`
  width: 40px;
  margin-right: 0.5rem;
  justify-content: start;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  right: 0;
  transform: translate(-100%, 70%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    &:hover {
      border-bottom: 2px solid #4b59f7;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.7rem;
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: bold;

  @media screen and (min-width: 600px) {
    margin-right: 1rem;
  }
`;

export const NavUser = styled.div`
  display: flex;
  margin: 0.3rem;
`;

export const NavBtnLink = styled(Link)`
  display: none;
  text-decoration: none;

  @media screen and (min-width: 600px) {
    display: flex;
    margin-left: 1.5rem;
  }
`;
