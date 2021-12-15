import styled from 'styled-components';
import { devices } from '../../../assets/designSystem/breakPoints';

export const NavBarContainer = styled.div`
  @media ${devices.laptop} {
    margin: auto;
    width: 80%;
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  padding: 1rem 2rem 0 2rem;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 10rem;
    height: 6rem;
    padding: 0.5rem 0;
  }
`;

export const NavDropdown = styled.div`
  position: relative;

  @media ${devices.laptop} {
    width: 100%;
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavContainer = styled.nav`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 50;
  position: absolute;
  top: 150;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ isToggled }) =>
    !isToggled ? 'translateY(-200%)' : 'translateY(0%)'};
  transition: ${({ isToggled }) =>
    !isToggled ? 'transform 0.2s ease-in' : 'transform 0.3s ease-out'};
  @media ${devices.laptop} {
    position: static;
    width: 100%;
    margin-left: 2rem;
    padding: 0;
    height: auto;
    flex-direction: row;
    align-items: center;
    transform: translateY(0);
  }
`;
