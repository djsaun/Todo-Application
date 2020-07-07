import React, {useState, useEffect} from 'react';
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

function App() {
  // Initialize state
  const [categories, setCategories] = useState([])
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // Update the categories state on the initial render
  useEffect(() => {
    setCategories(categoryList)
  }, []);

  // Update the todos state whenever there's an update made to a todo item (added, edited, or deleted)
  useEffect(() => {
    setTodos(todos)
  }, [todos]);

  // Return only completed todo items and add them to state
  // Pass them down via props to the CompletedSection component
  useEffect(() => {
    const filteredTodos = todos.filter(todo => todo.isCompleted === true);

    setCompletedTodos(filteredTodos);
  }, [todos])

  const addTodo = (text, category) => {
    // Get the current number of todos  
    const todosLength = todos.length;

    // Copy over the existing todos state and append the new todo to the array
    // Add one to the todosLength variable to set a unique id for each todo 
    const updatedTodos = [...todos, {id: todosLength + 1, text, category, isCompleted: false}];

    // Update the todos state
    setTodos(updatedTodos);
  }

  return (
    <>
    {/* Reset CSS */}
    <Normalize />

    {/* Expose all of the components to the custom givelify theme provider and theme */}
    <GivelifyThemeProvider>
      <AppDiv>
        <Container>
          <Header>
            <img src={logo} alt="Givelify Todo Application" />
          </Header>
          <TodoForm addTodo={addTodo} categories={categories} />

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
