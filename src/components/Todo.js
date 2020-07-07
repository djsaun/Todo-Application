import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const Todo = props => {
  const { id, text, isCompleted} = props;

  return (
    <TodoItem complete={isCompleted}>
      <Text>{text}</Text>

      {!isCompleted ? 
        <div>
          Category

          <button>X</button>
        </div>
      : <p>Completed</p>}
    </TodoItem>
  )
}

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.complete ? rgba(props.theme.givelifyTheme.colors.green, .04) : props.theme.givelifyTheme.colors.white};
`;

const Text = styled.p`
  font-size: 24px;
  color: ${props => props.theme.givelifyTheme.colors.gray900};
`;

export default Todo;
