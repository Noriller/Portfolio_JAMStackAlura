/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from './ThemeComponents/GlobalStyle';
import Theme from './ThemeComponents/Theme';
import { ToggleTheme, useDarkMode } from './ThemeComponents/ToggleTheme';
import BreakpointContextProvider from './ThemeComponents/BreakPointContext/BreakPointContext';

export default function ThemeWrapper({ children }) {
  const { theme, toggleTheme, componentMounted } = useDarkMode();
  const [userTheme, setUserTheme] = useState();

  useEffect(() => {
    setUserTheme(Theme(theme));
  }, [theme]);

  if (componentMounted) {
    return (
      <ThemeProvider theme={userTheme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Fira+Sans:ital@0;1&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <BreakpointContextProvider>
          {children}
        </BreakpointContextProvider>
      </ThemeProvider>
    );
  }

  return null;
}
