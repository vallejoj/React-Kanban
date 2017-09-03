import { combineReducers } from 'redux'
import {
  ADD_CARD,
  LOAD_TODOS

} from '../actions/index.js'



function todos(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,action.text
      ]
    case LOAD_TODOS:
    return[
      ...action.todos
    ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
