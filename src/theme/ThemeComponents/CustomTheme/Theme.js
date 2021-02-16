const baseTheme = {
  textSize: {
    display: '3rem',
    header: '2.5rem',
    title1: '2rem',
    title2: '1.5rem',
    body: '1rem',
    caption: '0.75rem',
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
