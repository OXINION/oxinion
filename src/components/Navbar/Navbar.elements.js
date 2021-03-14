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

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
