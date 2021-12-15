import styled from 'styled-components';
import { devices } from '../../assets/designSystem/breakPoints';

export const SearchedMessageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  @media ${devices.laptop} {
    width: 80%;
    padding: 2rem;
  }
`;

export const SearchedMessage = styled.p`
  font-size: 1.2rem;
  span {
    font-weight: 700;
    color: ${({ theme }) => {
      theme.colors.darkAccent;
    }};
  }
`;

export const SearchedErrorContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  @media ${devices.laptop} {
    width: 80%;
    padding: 2rem;
  }
`;

export const SearchedError = styled.p`
  font-size: 1.2rem;
  span {
    font-weight: 700;
    color: ${({ theme }) => {
      theme.colors.darkAccent;
    }};
  }
`;
