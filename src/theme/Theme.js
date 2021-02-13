const lightTheme = {
  colors: {
    primary: '#0070f3',
  },
  toggle: {
    body: '#e2e2e2',
    text: '#363537',
    toggleBorder: '#fff',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
};

const darkTheme = {
  colors: {
    primary: 'red',
  },
  toggle: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
};

export default function Theme(theme) {
  return theme === 'light' ? lightTheme : darkTheme;
}
