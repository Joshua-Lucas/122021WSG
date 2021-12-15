import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../../assets/designSystem/breakPoints';

export const NavLink = styled(Link)`
  margin: 1rem;
  padding-bottom: 0.5rem;
  line-height: 1.5rem;
  text-transform: capitalize;
  font-weight: 200;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    color: ${({ theme }) => theme.colors.darkAccent};
  }
  @media ${devices.laptop} {
    margin-bottom: 0;
    padding: 0.5rem 0.5rem;
  }
`;

export const NavSpan = styled.span`
  position: relative;
  display: block;
  margin: 0 1rem;

  transition: transform 0.8s cubic-bezier(0.24, 0.82, 0.43, 1.05);
  @media ${devices.laptop} {
    &:before {
      position: absolute;
      top: 150%;
      display: block;
      text-transform: capitalize;
      transform-origin: left top;
      content: ${(props) => `'${props.beforeText}'`};
      color: ${({ theme }) => theme.colors.darkAccent};
    }
    &:hover {
      transform: translateY(-150%);
    }
  }
`;
