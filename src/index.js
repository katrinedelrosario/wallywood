import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/theme'
import App from './App';
import { AuthProvider } from './components/app/providers/authProvider';
import { CartProvider } from './components/app/providers/cartProvider';
import { PosterProvider } from './components/pages/posters/posterlist/posterslist';
import { GlobalStyle } from './components/styled/global.style';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <PosterProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </PosterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
)
