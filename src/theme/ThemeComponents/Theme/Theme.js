const lightTheme = {
  colors: {
    primary: '#0070f3',
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
