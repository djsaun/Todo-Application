import React from 'react';
import styled from 'styled-components'
import GivelifyThemeProvider from './GivelifyThemeProvider'

function App() {
  return (
    <GivelifyThemeProvider>
      <AppDiv>
        <header className="App-header">
          test test test
        </header>
      </AppDiv>
    </GivelifyThemeProvider>
  );
}

export default App;

const AppDiv = styled.div`
 * {
     box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
 }
`;
