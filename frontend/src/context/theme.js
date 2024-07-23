// src/context/theme.js

import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'light', // default theme value
  toggleTheme: () => {}, // default function
});

export default ThemeContext;
