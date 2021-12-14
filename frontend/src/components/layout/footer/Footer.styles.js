import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../../assets/designSystem/breakPoints';

export const FooterContainer = styled.footer`
  padding: 1rem 0;
  font-size: 0.75rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column-reverse;
  width: 90%;
  margin: auto;
  @media ${devices.tablet} {
    margin: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media ${devices.laptopL} {
    width: 70%;
  }
`;

export const CompanyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  * {
    padding: 0.2rem 0;
    padding-right: 0.25rem;
  }
  @media ${devices.tablet} {
    justify-content: start;
  }
`;

export const Highlight = styled(Link)`
  color: ${({ theme }) => theme.colors.darkAccent};

  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const PhoneLink = styled.a`
  color: ${({ theme }) => theme.colors.darkAccent};

  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
