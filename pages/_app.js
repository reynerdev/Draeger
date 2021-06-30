import React from 'react';
import '../styles/globals.css';
// import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import theme from '../src/theme';
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
