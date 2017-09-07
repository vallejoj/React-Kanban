import React, {Component} from 'react';
import Card from './Card.js';


class TodoList extends Component {
render()
{
  return (
  <ul className = "left">
    {
      this.props.todos.filter((todo)=>{
        return this.props.progress === todo.progress
      })
      .map((todo)=>{
        console.log("inspect entire",todo)
        return(
          <Card key= {todo.id} id= {todo.id} title={todo.title} description={todo.description} progress={todo.progress}/>
        )
      })
    }
  </ul>
  )
}}
export default TodoList
