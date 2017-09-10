import React, {Component} from 'react';

import { connect } from 'react-redux';
import {editCard} from '../actions/index.js'
import EditModal from './EditModal.js'

class Card extends Component {
  handleDone(e){
      e.preventDefault();
      let status = {
        progress:"done"
      }
    this.props.editCard(status,this.props.id)

  }
  handleProgress(e){
      e.preventDefault();
      let status = {
        progress:"progress"
      }
    this.props.editCard(status,this.props.id)

  }
  handleQueue(e){
      e.preventDefault();
      let status = {
        progress:"queue"
      }
      console.log('queue', this.props)
    this.props.editCard(status,this.props.id)
  }

render(){
  console.log("investigating", this.props)
  return (
   <div className="col-md-3 card" >

      <EditModal id = {this.props.id} title= {this.props.title} description = {this.props.description}/>
             <button id="done" onClick={this.handleDone.bind(this)}>Done</button>
             <button id="progress" onClick={this.handleProgress.bind(this)}>Doing</button>
             <button id="queue" onClick={this.handleQueue.bind(this)}>Queue</button>

      <h2>  Title:{this.props.title}</h2>
      <h2>  Description:{this.props.description}</h2>
      <h2>   {this.props.progress}</h2>

    </div>
  )
}
}



const mapDispatchToProps = (dispatch) =>{
  return{
  editCard:(status,id)=>{
      dispatch(editCard(status,id))
    }
  }
}

const ConnectedNewCard = connect(
  null,
  mapDispatchToProps
)(Card)
export default ConnectedNewCard
