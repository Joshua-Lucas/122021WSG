import React from 'react';
import Footer from './footer/Footer.jsx';
import NavigationBar from './navigation/NavigationBar.jsx';
function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer
        address={{
          street: '7232 Beier Port',
          city: 'Port Abbigailborough',
          state: 'Utah',
          zipCode: '73213',
        }}
        phoneNumber="489-907-6230"
      />
    </>
  );
}

export default Layout;
