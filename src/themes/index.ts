export const theme = {
  colors: {
    primary: '#3f51b5',
    primaryDark: '#1a237e',
    primaryLight: '#757de8',
    secondary: '#f50057',
    border: '#cdcdcd',
    danger: '#ed1c24',
    gray: '#6b6b6b',
    black: '#000',
    white: '#fff',
    text: '#000',
    background: '#fff',
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    extraLarge: '20px',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
} as const;

export type AppTheme = typeof theme;
