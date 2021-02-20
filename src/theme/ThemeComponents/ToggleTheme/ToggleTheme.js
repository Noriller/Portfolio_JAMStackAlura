import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { func, string } from 'prop-types';

/**
 * @borrows @tutorial https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
 */
export const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon" />
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon" />
    </ToggleContainer>
  );
};

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

const ToggleContainer = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.toggleButton.gradient};
  width: 8rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleButton.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transform-origin: top right;
  transform: scale(${({ theme }) => theme.getBreakpointValue(0.6, 0.8, 1, 1.2, 1.5)});

  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

      &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

      &:nth-child(2) {
    transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
  }
}
`;

/**
 * @borrows @tutorial https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
 */
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else if (
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setMode('dark');
    } else {
      setMode('light');
    }

    setComponentMounted(true);
  }, []);

  return { theme, toggleTheme, componentMounted };
};
