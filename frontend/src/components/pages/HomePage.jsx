import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function HomePage() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let response = await fetch(
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=CGf9czqqGto8ib1RdimWIvBgh9paU4hB'
    );
    let resData = await response.json();

    setResults(resData);
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>Hello World</p>
    </>
  );
}

export default HomePage;
