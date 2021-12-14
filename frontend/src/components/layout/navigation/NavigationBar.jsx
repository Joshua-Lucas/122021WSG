import React, { useState } from 'react';
import {
  NavBarContainer,
  LogoContainer,
  NavDropdown,
  NavContainer,
  NavLink,
} from './NavigationBar.styles.js';
import MenuBar from './MenuBar.jsx';
import Logo from './Logo.jsx';
import NavigationLink from './NavigationLink.jsx';

function NavigationBar() {
  const [toggled, setToggled] = useState(false);

  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
        <MenuBar isToggled={toggled} setIsToggled={setToggled} />
      </LogoContainer>
      <NavDropdown>
        <NavContainer isToggled={toggled}>
          <NavigationLink href="/" linkTitle="Home" />
          <NavigationLink href="/concerts" linkTitle="Concerts" />
          <NavigationLink href="/sports" linkTitle="Sports" />
          <NavigationLink href="/art" linkTitle="Art" />
        </NavContainer>
      </NavDropdown>
    </NavBarContainer>
  );
}

export default NavigationBar;
