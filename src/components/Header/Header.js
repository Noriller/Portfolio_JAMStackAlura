import React from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

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
