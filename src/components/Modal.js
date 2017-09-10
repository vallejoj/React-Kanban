import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import NewCard from '../container/NewCard'
const createReactClass = require('create-react-class');

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const ModalExample = createReactClass({

  getInitialState(){
    return { showModal: false };
  },

  render() {

    return (
      <div className='modal-example pull-right'>
        <Button onClick={this.open}>
          New Task
        </Button>


        <Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <div className = "modalStyle" >
               <NewCard/>
          </div>
        </Modal>
      </div>
    );
  },

  close(){
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  }
});



export default ModalExample
