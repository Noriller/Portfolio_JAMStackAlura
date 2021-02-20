import React, { useEffect, useState } from 'react';
import CustomTheme from '../../theme/ThemeComponents/CustomTheme';
import { ToggleTheme, useDarkMode } from '../../theme/ThemeComponents/ToggleTheme';
import Cabecalho from '../Cabecalho';
import Logo from '../Logo';
import NavBar from '../NavBar';

export default function Header() {
  return (
    <Cabecalho>
      <Logo />
      <NavBar
        items={[
          { target: 'About', href: 'about' },
          { target: 'Contact', href: 'contact' },
        ]}
      />
    </Cabecalho>
  );
}
