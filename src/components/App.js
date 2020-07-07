import React, {useState, useEffect, useReducer} from 'react';
import styled from 'styled-components'
import {
  Normalize
} from 'styled-normalize'
import logo from '../icons/logo.svg';
import GivelifyThemeProvider from './GivelifyThemeProvider';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CompletedSection from './CompletedSection';

const categoryList = [{
    id: 'today',
    title: 'Today',
    btn: true
  },
  {
    id: 'tomorrow',
    title: 'Tomorrow',
    btn: true
  },
  {
    id: 'this_week',
    title: 'This Week',
    btn: true
  },
  {
    id: 'no_date',
    title: 'No Date',
    btn: false
  }
];

const todoList = [{
  id: 1,
  text: 'Test Item One',
  category: 'today',
  isCompleted: true,
}, {
  id: 2,
  text: 'Test Item Two',
  category: 'tomorrow',
  isCompleted: false,
}, {
  id: 3,
  text: 'Test Item Three',
  category: 'no_date',
  isCompleted: false,
}, {
  id: 4,
  text: 'Test Item Four',
  category: 'today',
  isCompleted: false,
}]

function App() {
  // Initialize state
  const [categories, setCategories] = useState([])
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // Update the categories state on the initial render
  useEffect(() => {
    setCategories(categoryList)
  }, []);

   useEffect(() => {
     setTodos(todoList)
   }, []);

   useEffect(() => {
     const filteredTodos = todos.filter(todo => todo.isCompleted === true);

     setCompletedTodos(filteredTodos);
   }, [todos])

  return (
    <>
    <Normalize />
    <GivelifyThemeProvider>
      <AppDiv>
        <Container>
          <Header>
            <img src={logo} alt="Givelify Todo Application" />
          </Header>
          <TodoForm categories={categories} />

          <TodoList todos={todos} categories={categories} />

          <CompletedSection todos={completedTodos} />
        </Container>
      </AppDiv>
    </GivelifyThemeProvider>
    </>
  );
}

export default App;

const AppDiv = styled.div`
  background: ${props => props.theme.givelifyTheme.colors.grayBackground};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

const Header = styled.header`
  padding: 55px 40px 50px;
  text-align: center;
`;
