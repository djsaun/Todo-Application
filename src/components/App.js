import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import logo from '../icons/logo.svg';
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
    const updatedTodos = [...todos, {id: todosLength, text, category, isCompleted: false}];

    // Update the todos state
    setTodos(updatedTodos);
  }

  const completeTodo = (id) => {
    // Copy over the existing todos state
    const todoItems = [...todos];

    // Let the user confirm that they want to mark the item as complete
    const confirm = window.confirm("Are you sure you want to mark this item as complete?");

    if (confirm) {
      // Find the todo item in the todos state array and change its isCompleted value
      todoItems.find(item => item.id === id).isCompleted = true;
    }

    // Update the todos state
    setTodos(todoItems);
  }

  const updateCategory = (id, category) => {
    // Copy over the existing todos state
    const todoItems = [...todos];

    // Let the user confirm that they want to update the item's category
    const confirm = window.confirm("Are you sure you want to update this item's category?");

    if (confirm) {
      // Find the todo item in the todos state array and change its category value
      todoItems.find(item => item.id === id).category = category;
    }

    // Update the todos state
    setTodos(todoItems);
  }

  const deleteTodo = id => {
    // Copy over the existing todos state
    let todoItems = [...todos];
   
    // Let the user confirm that the todo item should be deleted
    const confirm = window.confirm('Are you sure you want to delete this item?');

    if (confirm) {
      // Loop over all of the todos and filter the targeted todo out of the todoItems array
      todoItems = todoItems.filter(item => item.id !== id );
    }

    // Update the todos state
    setTodos(todoItems);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Givelify Todo Application" />
      </Header>

      <TodoForm addTodo={addTodo} categories={categories} />

      <TodoList deleteTodo={deleteTodo} completeTodo={completeTodo} todos={todos} categories={categories} updateCategory={updateCategory} />

      <CompletedSection deleteTodo={deleteTodo} todos={completedTodos}  />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

const Header = styled.header`
  padding: 55px 40px 50px;
  text-align: center;
`;
