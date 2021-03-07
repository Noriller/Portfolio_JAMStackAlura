import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { node } from 'prop-types';
import GlobalStyle from './ThemeComponents/GlobalStyle';
import CustomTheme from './ThemeComponents/CustomTheme';
import { ToggleTheme, useDarkMode } from './ThemeComponents/ToggleTheme';
import BreakpointContextProvider, { getBreakpointValue } from './ThemeComponents/MediaQuery';

export default function ThemeWrapper({ children }) {
  const { theme, toggleTheme, componentMounted } = useDarkMode();
  const [userTheme, setUserTheme] = useState();

  useEffect(() => {
    setUserTheme(CustomTheme(theme));
  }, [theme]);

  if (componentMounted) {
    return (
      <BreakpointContextProvider>
        <ThemeProvider theme={{ ...userTheme, theme, getBreakpointValue }}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Fira+Sans:ital@0;1&display=swap" rel="stylesheet" />
          </Head>
          <GlobalStyle />
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          {children}
        </ThemeProvider>
      </BreakpointContextProvider>
    );
  }

  return null;
}

ThemeWrapper.propTypes = {
  children: node.isRequired,
};
