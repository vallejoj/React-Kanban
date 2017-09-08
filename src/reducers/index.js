import {combineReducers} from 'redux'
import {ADD_CARD, LOAD_TODOS, CHANGE_PROGRESS_STATUS_TO_DOING} from '../actions/index.js'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.text
      ]

    case LOAD_TODOS:
      console.log('my action is the', action)
      return action.cards;

    case CHANGE_PROGRESS_STATUS_TO_DOING:

      var newState = state.map((item) => {
        if (item.id === action.id) {
          console.log('we have found a mathchhh', item.id, action.id)
          item.progress = action.status

          return item
        } else {
          return item
        }
      })
    return newState
    default:
      return state
  }
}

const todoApp = combineReducers({todos})

export default todoApp
