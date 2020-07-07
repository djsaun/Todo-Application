import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';
import checkmark from '../icons/checkmark.svg';

const Todo = props => {
  const { category, categories, text, isCompleted} = props;

  return (
    <TodoItem complete={isCompleted} className={isCompleted ? 'complete' : ''}>
      <div>
        <Icon className='icon' />
        <Text>{text}</Text>
      </div>

      {!isCompleted ? 
        <div>
          <CategorySelect value={category}>
            {categories && categories.map(cat => {
              return <option key={cat.id} value={cat.id}>{cat.title}</option>
            })}
          </CategorySelect>

          <Button>X</Button>
        </div>
      : <Completed>Completed</Completed>}
    </TodoItem>
  )
}

const TodoItem = styled.div`
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.complete ? rgba(props.theme.givelifyTheme.colors.green, .04) : props.theme.givelifyTheme.colors.white};
  border-radius: 12px;

  > div {
    display: flex;
    align-items: center;
  }

  &.complete {
    .icon {
      border-color: ${props => props.theme.givelifyTheme.colors.green};

      &::after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

const Icon = styled.div`
  position: relative;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-image: none;
  background-color: transparent;
  border: 3px solid ${props => props.theme.givelifyTheme.colors.gray300}; 
  border-radius: 100%;
  cursor: pointer;
  transition: all .3s ease;

  &::after {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    content: '';
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
  }

  &:hover, &:active, &:focus {
    background-color: ${props => rgba(props.theme.givelifyTheme.colors.green, .04)}; 
    border-color: ${props => props.theme.givelifyTheme.colors.green};

    &::after {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Text = styled.p`
  font-size: 24px;
  color: ${props => props.theme.givelifyTheme.colors.gray900};
`;

const CategorySelect = styled.select`
  padding: 12px 16px;
  color: ${props => props.theme.givelifyTheme.colors.categories[props.value]};
  background: ${props => rgba(props.theme.givelifyTheme.colors.categories[props.value], .08)};
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transform: rotate(0);
  transition: all .3s ease;

  &:hover, &:active, &:focus {
    transform: rotate(180deg);
  }
`;

const Completed = styled.p`
  color: ${props => props.theme.givelifyTheme.colors.green};
`;

export default Todo;
