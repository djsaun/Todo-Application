import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const Category = props => {
  const { id, title, todos, categories } = props;

  return (
    <CategoryItem>
      <CategoryInfo>
        <div>
          <Icon image={id} />
          <Title color={id}>{title}</Title>
        </div>
        <Count>{todos.length} {todos.length === 1 ? 'todo' : 'todos'}</Count>
      </CategoryInfo>

      {todos && todos.map(todo => <Todo key={todo.id} {...todo} categories={categories} />)}
    </CategoryItem>
  )
}

const CategoryItem = styled.div`
  margin-bottom: 12px;
  padding: 25px 30px 25px 35px;
  background: ${props => props.theme.givelifyTheme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 8px ${props => props.theme.givelifyTheme.colors.grayShadow};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

   > div {
     display: flex;
     align-items: center;
   }
`;

const Icon = styled.div`
  background-image: url(${props => props.theme.givelifyTheme.icons.categories[props.image]});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 35px;
  height: 35px;
`;

const Title = styled.h3`
  margin: 0 0 0 30px;
  font-size: 24px;
  color: ${props => props.theme.givelifyTheme.colors.categories[props.color]}
`;

const Count = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${props => props.theme.givelifyTheme.colors.gray700};
  line-height: 1.22;
`

export default Category;
