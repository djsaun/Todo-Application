import React from 'react';
import Category from './Category';

const TodoList = props => {
  const { todos, categories, deleteTodo } = props;

  return (
    <>
      {categories && categories.map(category => {
        // Filter todos by category and completed status and pass them as props to their assigned category
        const filteredTodos = todos.filter(todo => todo.category === category.id && !todo.isCompleted )
        return <Category key={category.id} id={category.id} title={category.title} todos={filteredTodos} categories={categories} deleteTodo={deleteTodo} />
      })}
    </>
  )
};

export default TodoList;
