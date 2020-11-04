import { useState } from 'react';
import { ThemeOptions } from '@material-ui/core';

interface DarkModeProps {
  theme: ThemeOptions;
  toggleDarkMode: () => void;
}

const initalThemeProps: ThemeOptions = {
  palette: {
    type: 'dark',
  },
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState(initalThemeProps);

  const toggleDarkMode = () => {
    const updateTheme: ThemeOptions = {
      ...theme,
      palette: {
        ...theme.palette,
        type: theme.palette?.type === 'dark' ? 'light' : 'dark',
      },
    };

    setTheme(updateTheme);
  };

  return [theme, toggleDarkMode] as const;
};
