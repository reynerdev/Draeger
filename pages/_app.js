import React from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
