import React, { useState } from 'react';

import {
  SearchBarContainer,
  SearchBarElement,
  SearchBarLabel,
  SearchFilterBar,
  SearchInputBar,
  SearchButton,
  SearchSvg,
  ClearSearchSvg,
} from './SearchBar.styles';

function SearchBar({
  onSubmitEvent,
  filterInput,
  searchInput,
  updateSearchInput,
  updateFilterInput,
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
            placeholder="Search Artist, Teams, and Events"
            value={searchInput}
            onChange={(e) => handleSearchEvent(e)}
          />
          {isSearching ? (
            <ClearSearchSvg
              aria-label="clear search input"
              onClick={clearSearch}
            />
          ) : null}

          <SearchBarLabel htmlFor="filterInput">Filter Field</SearchBarLabel>
          <SearchFilterBar
            id="filterInput"
            type="text"
            name="filterInput"
            placeholder="City"
            value={filterInput}
            onChange={(e) => updateFilterInput(e.target.value)}
          />

          <SearchButton id="searchSubmit" type="submit">
            Search
          </SearchButton>
        </SearchBarElement>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
