import React, { useEffect, useState } from 'react';

function ConcertPage() {
  const [results, setResults] = useState([]);
  useEffect(() => {});

  async function fetchData(params) {
    let response = await fetch(
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=CGf9czqqGto8ib1RdimWIvBgh9paU4hB'
    );
    let resData = await response.json();

    setResults(resData);
  }
  return (
    <>
      <h1>Concert Page</h1>
      <p>Looking for Concerts</p>
    </>
  );
}

export default ConcertPage;
