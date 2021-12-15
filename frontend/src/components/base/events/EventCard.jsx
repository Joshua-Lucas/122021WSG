import React from 'react';
import {
  EventCardContainer,
  DateContainer,
  DayOfWeek,
  DayOfMonth,
  DetailsContainer,
  EventTitle,
  EventDetails,
  EventLink,
  ImageContainer,
  EventVenue,
  EventImage,
  FeaturedTag,
} from './EventCard.styles.js';
import { getDay, getHours, getMinutes } from 'date-fns';
import {
  formatDayOfWeekAbbreviations,
  formatMonth,
} from '../../../utils/formatFunctions';

function EventCard({
  startDate,
  title,
  venue,
  location,
  details,
  imgSrc,
  linkHref,
  imgAlt,
}) {
  return (
    <>
      <EventCardContainer>
        <DateContainer>
          <DayOfWeek>
            {formatDayOfWeekAbbreviations(getDay(startDate))}
          </DayOfWeek>
          <DayOfMonth>{startDate.getDate().toString()}</DayOfMonth>
        </DateContainer>
        <DetailsContainer>
          <FeaturedTag>{`${formatMonth(
            startDate.getMonth()
          )} ${startDate.getDay()}@ ${getHours(startDate)}:${getMinutes(
            startDate
          )}`}</FeaturedTag>
          <EventTitle>{title}</EventTitle>
          <EventVenue>{venue}</EventVenue>
          <p>{location}</p>
          <EventDetails>{details}</EventDetails>
          <EventLink target="_blank" href={linkHref}>
            Buy Tickets
          </EventLink>
        </DetailsContainer>
        <ImageContainer>
          <EventImage alt={imgAlt} src={imgSrc} />
        </ImageContainer>
      </EventCardContainer>
    </>
  );
}

export default EventCard;
