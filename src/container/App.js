import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {loadTodos} from '../actions/index.js'
import NewCard from './NewCard';

import TodoList from '../components/TodoList.js';

class App extends Component {
  componentWillMount(){
    console.log("hey props", this.props)
    this.props.loadTodos();
  }

  render() {
    return (
      <div className="container-fluid">
  <NewCard/>
          <div className="row">
              <h1>TODO</h1>
                    <div className="col-md-4">
                    <TodoList todos = {this.props.todos} progress = 'queue'/>
                    </div>

                    <div className="col-md-4">
                      <h1>DOING</h1>
          <TodoList todos = {this.props.todos} progress = 'progress'/>
                    </div>

                    <div className="col-md-4">
                      <h1>DONE</h1>

                    </div>


    </div>
  </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    todos:state.todos
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    loadTodos:()=>{
      dispatch(loadTodos());
    }
  }
}

const ConnectedApp = connect (
mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
