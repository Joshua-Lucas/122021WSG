import React from 'react';
import { NavLink, NavSpan } from './NavigationLink.styles.js';

function NavigationLink({ href, linkTitle }) {
  return (
    <>
      <NavLink to={href}>
        <NavSpan beforeText={linkTitle}>{linkTitle}</NavSpan>
      </NavLink>
    </>
  );
}

export default NavigationLink;
