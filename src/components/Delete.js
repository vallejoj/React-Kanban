import React, {Component} from 'react';
import {deleteCard} from '../actions/index.js'
import { connect } from 'react-redux';

class Delete extends Component{
  handleDelete(){
  console.log("delete")
  this.props.deleteCard(this.props.id)
  }
render(){

return(
  <div>
    <button onClick={this.handleDelete.bind(this)}>Delete</button>
  </div>
)

}

}

const mapDispatchToProps = (dispatch) =>{
  return{
  deleteCard:(id)=>{
      dispatch(deleteCard(id))
    }
  }
}

const ConnectedDelete = connect(
  null,
  mapDispatchToProps
)(Delete)
export default ConnectedDelete
