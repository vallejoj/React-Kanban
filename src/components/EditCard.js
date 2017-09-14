import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard} from '../actions';

class EditCard extends Component {
  constructor(props){
        super(props)
        this.state = {
          title:'',
          description:'',
          priority:'',
          progress:'',
        }
}

  handleEditTitleInput(e){
    this.setState({
      title: e.target.value
    })
  }

  handleEditDescriptionInput(e){
    this.setState({
      description: e.target.value
    })
  }

  handleEditProgressInput(e){
    this.setState({
      progress: e.target.value
    })
  }

  handleEditPriorityInput(e){
    this.setState({
      priority: e.target.value
    })
  }

  submitCard(evt) {
     evt.preventDefault();
    console.log('userInput:',this.state)
    let edits = {
      title : this.state.title,
      description : this.state.description,
      priority : this.state.priority,
      progress: this.state.progress

    };

    this.props.editCard(edits, this.props.newid);
  }

  render(){
       console.log('look these props', this.props)
    return (
      <div className = "input-row">
        <input
          type="text"
          placeholder={this.props.newTitle}
          onChange={this.handleEditTitleInput.bind(this)}
        />
        <br/>
        <input
          type="text"
            placeholder={this.props.newDescription}
          onChange={this.handleEditDescriptionInput.bind(this)}
        />

                <select onChange={this.handleEditProgressInput.bind(this)} >
            <option value="queue">Queue</option>
            <option value="progress">Progress</option>
            <option value="done">Done</option>
          </select>


          <select onChange={this.handleEditPriorityInput.bind(this)} >
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
          </select>

              <button onClick={this.submitCard.bind(this)}>Submit</button>
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


const ConnectedEditUser = connect(
  null,
  mapDispatchToProps
)(EditCard)

export default ConnectedEditUser;
