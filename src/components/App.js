import React, {useState, useEffect, useReducer} from 'react';
import styled from 'styled-components'
import {
  Normalize
} from 'styled-normalize'
import logo from '../icons/logo.svg';
import GivelifyThemeProvider from './GivelifyThemeProvider';
import TodoForm from './TodoForm';

const categoryList = [{
    id: 'today',
    title: 'Today'
  },
  {
    id: 'tomorrow',
    title: 'Tomorrow'
  },
  {
    id: 'this_week',
    title: 'This Week',
  },
  {
    id: 'no_date',
    title: 'No Date'
  }
];

function App() {
  // Initialize state
  const [categories, setCategories] = useState([])
  const [todos, setTodos] = useState([]);

  // Update the categories state on the initial render
  useEffect(() => {
    setCategories(categoryList)
  }, []);

  return (
    <>
    <Normalize />
    <GivelifyThemeProvider>
      <AppDiv>
        <Header>
          <img src={logo} alt="Givelify Todo Application" />
        </Header>
        <TodoForm categories={categories} />
      </AppDiv>
    </GivelifyThemeProvider>
    </>
  );
}

export default App;

const AppDiv = styled.div`
  margin: 0 auto;
  background: ${props => props.theme.givelifyTheme.colors.grayBackground};
  max-width: 1000px;

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
