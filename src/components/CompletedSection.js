import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const CompletedSection = props => {
  const {todos, deleteTodo} = props;

  // Hide completed todos by default
  const [showTodos, setShowTodos] = useState(true);

  // Toggle the showTodos state whenever the DisplayText element is clicked (if there are completed todos)
  const toggleTodos = () => {
    setShowTodos(!showTodos)
  }

  return (
    <Results>
      {todos && todos.length > 0 ?   
      <DisplayText onClick={() => toggleTodos()}> {!showTodos ? 'Show' : 'Hide'} {todos.length} Completed {todos.length === 1 ? 'Task' : 'Tasks'}</DisplayText> : 
      <DisplayText>No Completed Tasks</DisplayText>
      }

      {todos && todos.length > 0 && showTodos && 
        <ResultsList>
          {todos.map(todo => <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} />)}
        </ResultsList>} 
    </Results>
  )
}

const Results = styled.div`
  margin: 50px 0 150px;
`;

const DisplayText = styled.p`
  margin-bottom: 55px;
  font-size: 18px;
  color: ${props => props.theme.givelifyTheme.colors.gray800};
  line-height: 1.22;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
`;

const ResultsList = styled.div``;

export default CompletedSection;
