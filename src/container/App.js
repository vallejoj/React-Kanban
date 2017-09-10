import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {loadTodos} from '../actions/index.js'

import ModalExample from '../components/Modal';
import TodoList from '../components/TodoList.js';

class App extends Component {
  componentWillMount() {
    this.props.loadTodos();
  }



  render() {
    return (
      <div className="jumbotron">
        <ModalExample/>
        <div className="row">


          <div className="col-md-4 left-column">
            <h3>To-do</h3>
            <TodoList todos={this.props.todos} progress='queue'/>

          </div>


          <div className="col-md-4 center-column">
            <h3>Doing</h3>
            <TodoList todos={this.props.todos} progress='progress'/>
          </div>

          <div className="col-md-4 right-column">
            <h3>Done</h3>
            <TodoList todos={this.props.todos} progress='done'/>
          </div>

    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadTodos: () => {
      dispatch(loadTodos());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps)(App)

export default ConnectedApp;
