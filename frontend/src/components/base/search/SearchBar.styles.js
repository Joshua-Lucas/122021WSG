import styled from 'styled-components';
import { lighten } from 'polished';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { devices } from '../../../assets/designSystem/breakPoints';

export const SearchBarContainer = styled.div`
  width: 100%;
  padding: 1rem;
  @media ${devices.laptop} {
    width: 60%;
    margin: 0 auto;
  }
`;

export const SearchBarElement = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  overflow: hidden;
  @media ${devices.laptop} {
    padding: 0.75rem 1rem;
  }
`;

export const SearchSvg = styled(SearchIcon)`
  width: 2rem;
  height: 2rem;
  color: lightgrey;
`;

export const SearchBarLabel = styled.label`
  ${({ theme }) => theme.accessability.srOnly}
`;

export const SearchInputBar = styled.input`
  width: 100%;
  padding: 1rem 0.25rem;
  border: 0;
  font-size: 1rem;
  outline: none;
  @media ${devices.laptop} {
    width: 85%;
  }
`;

export const SearchButton = styled.button`
  /* SETS SCREEN READER ONLY STYLE FOR MOBILE DEVICES */
  ${({ theme }) => theme.accessability.srOnly}
  @media ${devices.laptop} {
    /* UNDOS SCREEN READER ONLY FOR LARGER DEVICES */
    ${({ theme }) => theme.accessability.notSrOnly}
    width: 15%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.darkAccent};
    color: white;
    &:hover {
      background-color: ${({ theme }) => lighten(0.4, theme.colors.darkAccent)};
    }
  }
`;

export const ClearSearchSvg = styled(XIcon)`
  width: 2rem;
  height: 2rem;
  color: lightgrey;

  &:hover {
    color: gray;
  }
  @media ${devices.laptop} {
    margin-right: 2rem;
  }
`;
