import React from 'react';
import styled from 'styled-components'
import {
  Normalize
} from 'styled-normalize'
import logo from '../icons/logo.svg';
import GivelifyThemeProvider from './GivelifyThemeProvider'

function App() {
  return (
    <>
    <Normalize />
    <GivelifyThemeProvider>
      <AppDiv>
        <Header>
          <img src={logo} alt="Givelify Todo Application" />
        </Header>
      </AppDiv>
    </GivelifyThemeProvider>
    </>
  );
}

export default App;

const AppDiv = styled.div`
  background: ${props => props.theme.givelifyTheme.colors.grayBackground};

  * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
  }
`;

const Header = styled.header`
  padding: 55px 40px 50px;
  text-align: center;
`;
