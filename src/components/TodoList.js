import React from 'react';
import Card from './Card.js';

const TodoList = ( {todos} ) => {
  console.log('whyyyy',todos)
  return (
  <ul>
      {
        todos.map(todo => {
          return (
            <Card name={todo} />
          )
        })
      }

  </ul>
  )
}
export default TodoList
