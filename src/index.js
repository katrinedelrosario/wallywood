import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styled/theme';
import { GlobalStyle } from './components/styled/global.style'
import { BrowserRouter } from 'react-router-dom'
import { PosterProvider } from './components/app/posterlist/posterlist';
import {AuthProvider} from './components/providers/authProvider';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  
  <React.StrictMode>
    <AuthProvider>
    <PosterProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PosterProvider>
    </AuthProvider>
  </React.StrictMode>
)
