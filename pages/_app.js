/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle, Theme, useDarkMode, Toggle,
} from '../src/theme';

export default function App({ Component, pageProps }) {
  const { theme, toggleTheme, componentMounted } = useDarkMode();
  const [userTheme, setUserTheme] = useState();

  useEffect(() => {
    setUserTheme(Theme(theme));
  }, [theme]);

  if (componentMounted) {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={userTheme}>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return null;
}
