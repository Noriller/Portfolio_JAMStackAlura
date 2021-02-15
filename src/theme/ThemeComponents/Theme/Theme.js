const lightTheme = {
  colors: {
    primary: '#0070f3',
  },
  headings: {
    big: 150,
    medium: 100,
    small: 50,
  },
  paragraphs: {
    big: 150,
    medium: 100,
    small: 50,
  },
  bg: 'white',
  textContrast: 'red',
  toggleButton: {
    toggleBorder: '#fff',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
};

const darkTheme = {
  colors: {
    primary: 'red',
  },
  headings: {
    big: 150,
    medium: 100,
    small: 50,
  },
  paragraphs: {
    big: 150,
    medium: 100,
    small: 50,
  },
  bg: '#333333',
  textContrast: 'white',
  toggleButton: {
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
};

export default function Theme(theme) {
  return theme === 'light' ? lightTheme : darkTheme;
}
