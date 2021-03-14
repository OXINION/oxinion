import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 80px;
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
  margin-right: 0.5rem;
`;
