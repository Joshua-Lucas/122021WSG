import styled from 'styled-components';
import { devices } from '../../../assets/designSystem/breakPoints';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 3rem;
  height: 3rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  svg {
    height: 3rem;
    width: 3rem;

    fill: currentColor;
  }

  @media ${devices.laptop} {
    display: none;
  }
`;
