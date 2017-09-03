import React from 'react';
import TodoList from './TodoList.js'
import NewCard from '../container/NewCard';


const Columns = ({todos}) => {

  return (
    <div className="container-fluid">

        <div className="row">
          <div className="col-md-4">
            <h1>TODO</h1>
  <TodoList todos= {this.props.todos}/>
          </div>

          <div className="col-md-4">
            <h1>DOING</h1>
          </div>

          <div className="col-md-4">
            <h1>DONE</h1>
          </div>
        </div>
    </div>

  )
}

export default Columns
