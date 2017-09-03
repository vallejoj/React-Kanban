import React from 'react';
import Card from './Card.js';

const TodoList = ( {todos, progress} ) => {
  console.log('whyyyy',todos)
  return (
  <ul>
    {
      todos.filter((todo)=>{
        return todo.progress === progress
      })
      .map((todo)=>{
        return(
          <Card title={todo.title} description={todo.description}/>
        )
      })
    }




  </ul>
  )
}
export default TodoList
