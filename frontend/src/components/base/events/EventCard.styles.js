import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import { devices } from '../../../assets/designSystem/breakPoints';

export const EventCardContainer = styled.article`
  width: 95%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid lightgrey;

  @media ${devices.laptop} {
    width: 80%;
    flex-direction: row;
    border: transparent;
  }
`;

export const DateContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-text: center;
  border-bottom: 4px solid blue;
  margin: 0.5rem 0;
  @media ${devices.laptop} {
    width:100%
    align-text: left;
    border-bottom: 0;
    border-right: 4px solid blue;
  }
`;

export const DayOfWeek = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const DayOfMonth = styled.p`
  text-align: center;
  font-size: 3rem;
`;

export const DetailsContainer = styled.div`
  padding: 0.5rem 0;
  order: 3;
  @media ${devices.laptop} {
    padding: 0 2rem;
    order: 2;
  }
`;

export const FeaturedTag = styled.p`
  text-transform: capitalize;
  margin: 0.5rem 0;
`;

export const EventTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  @media ${devices.laptop} {
    font-size: 4rem;
  }
`;

export const EventVenue = styled.h3`
  font-size: 1.5rem;
  @media ${devices.laptop} {
    font-size: 1.5rem;
  }
`;

export const EventDetails = styled.p`
  padding-top: 1rem;
  @media ${devices.laptop} {
    padding: 1.5rem 0;
  }
`;

export const EventLink = styled(Link)`
  display: inline-block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.darkAccent};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: white;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => lighten(0.4, theme.colors.darkAccent)};
  }

  @media ${devices.laptop} {
    width: 40%;
  }
`;

export const ImageContainer = styled.figure`
  object-fit: cover;
  order: 2;
  overflow: hidden;
  @media ${devices.laptop} {
    order: 3;
  }
`;

export const EventImage = styled.img`
  width: 100%;
`;
