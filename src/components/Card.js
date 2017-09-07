import React, {Component} from 'react';
import ShiftCardRight from './ShiftCardRight.js'
import { connect } from 'react-redux';
import {changeProgressStatusToDoing} from '../actions/index.js'

class Card extends Component {
  handleDone(e){
      e.preventDefault();
      let status = {
        progress:"done"
      }
    this.props.changeProgressStatusToDoing(status.progress,this.props.id)

  }
  handleProgress(e){
      e.preventDefault();
      let status = {
        progress:"progress"
      }
    this.props.changeProgressStatusToDoing(status.progress,this.props.id)

  }
  handleQueue(e){
      e.preventDefault();
      let status = {
        progress:"queue"
      }
    this.props.changeProgressStatusToDoing(status.progress,this.props.id)

  }
render()

{
  return (
   <div className="col-md-3 card" >
     <button onClick={this.handleDone.bind(this)}>Done</button>
     <button onClick={this.handleProgress.bind(this)}>Doing</button>
          <button onClick={this.handleQueue.bind(this)}>Queue</button>
      <h2>  Title:{this.props.title}</h2>
      <h2>  Description:{this.props.description}</h2>
      <h2>   {this.props.progress}</h2>
    </div>
  )
}
}



const mapDispatchToProps = (dispatch) =>{
  return{
  changeProgressStatusToDoing:(status,id)=>{
      dispatch(changeProgressStatusToDoing(status,id))
    }
  }
}

const ConnectedNewCard = connect(
  null,
  mapDispatchToProps
)(Card)
export default ConnectedNewCard
