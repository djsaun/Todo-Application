import React from 'react';
import Category from './Category';

const TodoList = props => {
  const { todos, categories } = props;

  return (
    <>
      {categories && categories.map(category => {
        // Filter todos by category and pass them as props to their assigned category
        const filteredTodos = todos.filter(todo => todo.category === category.id)
        return <Category key={category.id} id={category.id} title={category.title} todos={filteredTodos} />
      })}
    </>
  )
};

export default TodoList;
