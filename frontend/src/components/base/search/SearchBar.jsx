import React, { useState } from 'react';

import {
  SearchBarContainer,
  SearchBarElement,
  SearchBarLabel,
  SearchInputBar,
  SearchButton,
  SearchSvg,
  ClearSearchSvg,
} from './SearchBar.styles';

function SearchBar({
  onSubmitEvent,

  searchInput,
  updateSearchInput,
}) {
  const [isSearching, setIsSearching] = useState(false);

  function handleSearchEvent(e) {
    setIsSearching(true);
    updateSearchInput(e.target.value);
  }

  function clearSearch() {
    updateSearchInput('');
    setIsSearching(false);
  }
  return (
    <>
      <SearchBarContainer>
        <SearchBarElement onSubmit={(e) => onSubmitEvent(e)}>
          <SearchSvg />
          <SearchBarLabel htmlFor="searchInput">Search Field</SearchBarLabel>
          <SearchInputBar
            id="searchInput"
            type="text"
            name="searchInput"
            placeholder="Search Artist, Team, or Location"
            value={searchInput}
            onChange={(e) => handleSearchEvent(e)}
          />
          {isSearching ? (
            <ClearSearchSvg
              aria-label="clear search input"
              onClick={clearSearch}
            />
          ) : null}

          <SearchButton id="searchSubmit" type="submit">
            Search
          </SearchButton>
        </SearchBarElement>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
