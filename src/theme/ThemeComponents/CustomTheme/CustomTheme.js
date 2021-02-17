/* eslint-disable max-len */
/*
${({ theme }) => theme.getBreakpointValue(theme.baseSizes.big.xs, theme.baseSizes.big.md, theme.baseSizes.big.lg, theme.baseSizes.big.xl)}
${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)}
${({ theme }) => theme.getBreakpointValue(theme.baseSizes.small.xs, theme.baseSizes.small.md, theme.baseSizes.small.lg, theme.baseSizes.small.xl)}
${({ theme }) => theme.getBreakpointValue(theme.baseSizes.text.xs, theme.baseSizes.text.md, theme.baseSizes.text.lg, theme.baseSizes.text.xl)}
*/
const baseTheme = {
  baseSizes: {
    big: {
      xs: '3rem',
      md: '4.5rem',
      lg: '6rem',
      xl: '9rem',
    },
    medium: {
      xs: '2rem',
      md: '3rem',
      lg: '4rem',
      xl: '6rem',
    },
    small: {
      xs: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    text: {
      xs: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
  },
  spacings: {
    touch: '32px',
    minimum: '8px',
    other: '18px',
  },
  lineSpacing: '1.5rem',
};

const lightTheme = {
  colors: {
    primary: '#0070f3',
  },
  bg: 'white',
  textContrast: '#222222',
  toggleButton: {
    toggleBorder: '#fff',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
};

const darkTheme = {
  colors: {
    primary: 'red',
  },
  bg: '#333333',
  textContrast: 'white',
  toggleButton: {
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
};

export default function CustomTheme(theme) {
  const chosenTheme = theme === 'light' ? lightTheme : darkTheme;

  return { ...baseTheme, ...chosenTheme };
}
