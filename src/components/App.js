import React from 'react';
import styled from 'styled-components'
import {
  Normalize
} from 'styled-normalize'
import GivelifyThemeProvider from './GivelifyThemeProvider'

function App() {
  return (
    <>
    <Normalize />
    <GivelifyThemeProvider>
      <AppDiv>
        <header className="App-header">
          test test test
        </header>
      </AppDiv>
    </GivelifyThemeProvider>
    </>
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
