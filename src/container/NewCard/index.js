import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class NewCard extends Component {

  handleNewTitleInput(e){
    this.setState({
      title: e.target.value
    })
  }

  handleNewDescriptionInput(e){
    this.setState({
      description: e.target.value
    })
  }

  handleNewProgressInput(e){
    this.setState({
      progress: e.target.value
    })
  }

  submitCard(evt) {
     evt.preventDefault();
    console.log('userInput:',this.state)
    let newCard = {
      title : this.state.title,
      description : this.state.description,
      progress: this.state.progress
    };
    console.log('newcard:',newCard)
    this.props.addCard(newCard);
  }

  render(){

    return (
      <div className = "input-row">
        <input
          type="text"
          placeholder="title"
          onChange={this.handleNewTitleInput.bind(this)}
        />
        <br/>
        <input
          type="text"
          placeholder="description"
          onChange={this.handleNewDescriptionInput.bind(this)}
        />
        <input
          type="text"
          placeholder="progress"
          onChange={this.handleNewProgressInput.bind(this)}
        />
        <button onClick={this.submitCard.bind(this)}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (text) => {
      dispatch(addCard(text))
    }
  }
}

const ConnectedNewUser = connect(
  null,
  mapDispatchToProps
)(NewCard)

export default ConnectedNewUser;
