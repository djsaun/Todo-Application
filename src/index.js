import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import GivelifyThemeProvider from './components/GivelifyThemeProvider'

const GlobalStyle = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background: ${props => props.theme.givelifyTheme.colors.grayBackground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
`

ReactDOM.render(
  <React.StrictMode>
    {/* Expose all of the components to the custom givelify theme provider and theme */}
    <GivelifyThemeProvider>
      {/* Reset CSS */}
      <Normalize />

      <GlobalStyle />
      <App />
    </GivelifyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
