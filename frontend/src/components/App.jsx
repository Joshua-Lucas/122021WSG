import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../assets/designSystem/Theme.js';

import HomePage from '../components/pages/HomePage.jsx';
import ConcertPage from './pages/ConcertPage.jsx';
import Layout from './layout/Layout.jsx';
import { GlobalStyles } from '../assets/designSystem/GlobalStyles.js';
import SportPage from './pages/SportPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Layout>
            <Routes>
              <Route path="/sports" element={<SportPage />} />
              <Route path="/concerts" element={<ConcertPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
