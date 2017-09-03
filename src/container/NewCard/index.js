import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class NewCard extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  submitCard() {
    console.log('userInput:',this.state.userInput)
    this.props.addCard(this.state.userInput)
  }

  handleNewTitleInput(e){
    this.setState({
      userInput: e.target.value
    })
  }
  handleNewDescriptionInput(e){
    this.setState({
      userInput: e.target.value
    })
  }

  render(){

    return (
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={this.handleNewTitleInput.bind(this)}
        />
        <button onClick={this.submitCard.bind(this)}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (text) => {
    // ^-- name of the method in our this.props object
      dispatch(addCard(text))
                // ^--- action function imported above
    }
  }
}

const ConnectedNewUser = connect(
  null,
  mapDispatchToProps
)(NewCard)

export default ConnectedNewUser;
