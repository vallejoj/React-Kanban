import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {loadTodos} from '../actions/index.js'
import NewCard from './NewCard';
import Columns from '../components/Columns.js';
import TodoList from '../components/TodoList.js';

class App extends Component {
  componentWillMount(){
    console.log("hey props", this.props)
    this.props.loadTodos();
  }

  render() {
    return (
      <div>
      <Columns todos = {this.props.todos}/>
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
