import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const CompletedSection = props => {
  const {todos} = props;

  // Hide completed todos by default
  const [showTodos, setShowTodos] = useState(false);

  // Toggle the showTodos state whenever the DisplayText element is clicked (if there are completed todos)
  const toggleTodos = () => {
    setShowTodos(!showTodos)
  }

  return (
    <Results>
      {todos && todos.length > 0 ?   
      <DisplayText onClick={() => toggleTodos()}>Show {todos.length} Completed {todos.length === 1 ? 'Task' : 'Tasks'}</DisplayText> : 
      <DisplayText>No Completed Tasks</DisplayText>
      }

      {todos && todos.length > 0 && showTodos && 
        <ResultsList>
          {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ResultsList>} 
    </Results>
  )
}

const Results = styled.div`
  margin-top: 50px;
`;

const DisplayText = styled.p`
  font-size: 18px;
  color: ${props => props.theme.givelifyTheme.colors.gray800};
  line-height: 1.22;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
`;

const ResultsList = styled.div``;

export default CompletedSection;
