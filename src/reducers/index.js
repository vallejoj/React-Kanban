import {combineReducers} from 'redux'
import {ADD_CARD, LOAD_TODOS, EDIT_CARD, DELETE_CARD} from '../actions/index.js'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
    console.log("action time!!!",action)
      return [

        ...action.cards
      ]

    case LOAD_TODOS:
      return action.cards;

    case DELETE_CARD:
    let filter = state.filter(card => card.id !== parseInt(
      action.id,10))
      return filter


    case EDIT_CARD:
      return action.cards
    default:
      return state
  }
}

const todoApp = combineReducers({todos})

export default todoApp
