import React, {  FunctionComponent } from 'react';
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  
} from '@material-ui/core';

import { useDarkMode } from './hooks/useDarkMode';

export const ThemeProvider: FunctionComponent = ({ children }) => {
  const [theme] = useDarkMode();
  const myTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={createMuiTheme(myTheme)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
