export const lightTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#00b4d8',
    background: '#ffffff',
    text: '#000000',
    heading: '#1a1a1a',
    border: '#e0e0e0',
  },
  fonts: {
    body: 'Inter, system-ui, -apple-system, sans-serif',
    heading: 'Inter, system-ui, -apple-system, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#0070f3',
    secondary: '#00b4d8',
    background: '#0a0a0a',
    text: '#ffffff',
    heading: '#f5f5f5',
    border: '#2a2a2a',
  },
};

export type Theme = typeof lightTheme;