import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Button } from './MenuBar.styles.js';

function MenuBar({ isToggled, setIsToggled }) {
  return (
    <>
      <Button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? <XIcon /> : <MenuIcon />}
      </Button>
    </>
  );
}

export default MenuBar;
