import React, { useState, useEffect } from 'react';
import { formatISO } from 'date-fns';
import EventCard from '../base/events/EventCard.jsx';

import SearchBar from '../base/search/SearchBar.jsx';
import {
  SearchedError,
  SearchedErrorContainer,
  SearchedMessage,
  SearchedMessageContainer,
} from './SportPage.styles.js';
import { handleUndefinedData } from '../../utils/exceptionFunctions.js';

function SportPage() {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [searchedFor, setSearchedFor] = useState('');
  const [filteredFor, setFilteredFor] = useState('');
  const [searchError, setSearchError] = useState(false);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 750);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  async function fetchData() {
    try {
      setSearchError(false);
      var date = formatISO(new Date());
      let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=CGf9czqqGto8ib1RdimWIvBgh9paU4hB&keyword=${search}&locale=*&startDateTime=${date}&sort=date,asc&segmentName=sports`;
      let response = await fetch(url);
      let resData = await response.json();

      setResults(resData._embedded.events);
    } catch (err) {
      if (err) {
        setSearchError(true);
        setResults([]);
      }
    }
  }

  function handleSearchEvent(e) {
    e.preventDefault();
    // STORES MOST RECENT SEARCH TO DISPLAY TO THE USER
    setSearchedFor(search);
    setFilteredFor(filterBy);

    // RESETS THE SEARCH AND FILTER FIELD
  }

  return (
    <>
      <SearchBar
        filterInput={filterBy}
        searchInput={search}
        updateSearchInput={setSearch}
        updateFilterInput={setFilterBy}
        onSubmitEvent={handleSearchEvent}
      />
      {searchedFor === '' ? null : (
        <SearchedMessageContainer>
          <SearchedMessage>
            <span>{results.length}</span> events match your search for{' '}
            <span>{searchedFor}</span>
            <span>{filteredFor == '' ? null : ` in ${filteredFor}`}</span>
          </SearchedMessage>
        </SearchedMessageContainer>
      )}

      {!searchError ? (
        results.map((ev) => {
          let newEvent = handleUndefinedData(ev);
          return (
            <EventCard
              key={newEvent.id}
              startDate={new Date(newEvent.dates.start.dateTime)}
              title={newEvent.name}
              venue={newEvent._embedded.venues[0].name}
              location={newEvent._embedded.venues[0].city.name}
              details={newEvent.pleaseNote}
              imgSrc={newEvent.images[1].url}
              linkHref={newEvent.url}
              imgAlt={newEvent.name}
            />
          );
        })
      ) : (
        <SearchedErrorContainer>
          <SearchedError>
            {' '}
            Sorry there are no events with that name!
          </SearchedError>
        </SearchedErrorContainer>
      )}
    </>
  );
}

export default SportPage;
